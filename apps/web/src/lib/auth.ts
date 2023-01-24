import {
  createTRPCProxyClient,
  httpBatchLink,
  TRPCClientError,
} from "@trpc/client";
import type { AppRouter } from "src/server/root";
import SuperJSON from "superjson";
import type { RouterOutputs } from "./trpc";
import { getBaseUrl } from "./trpc/utils";

const api = createTRPCProxyClient<AppRouter>({
  transformer: SuperJSON,
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});

export type User = RouterOutputs["auth"]["getUser"]["user"];

const Observable = <T, E>(data: T) => {
  let state = data;
  const listeners = new Set<(data: T, event: E) => void>();
  return {
    subscribe: (listener: (data: T, event: E) => void) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    set: (d: T, event: E) => {
      state = d;
      listeners.forEach((listener) => listener(state, event));
    },
    get: () => state,
  };
};

type Observable<T, E> = {
  subscribe: (listener: (data: T, event: E) => void) => () => void;
  set: (data: T, event: E) => void;
  get: () => T;
};

export interface Session {
  access_token: string;
  refresh_token: string;
  user: Omit<User, "password">;
}

export interface AuthState {
  session: Session | null;
  loading: boolean;
}

export type AuthChangeEvent = "SIGNED_IN" | "SIGNED_OUT" | "INIT";

export interface AuthOptions {
  storageKey?: string;
}

export class AuthClient {
  state: Observable<AuthState, AuthChangeEvent>;
  config: Required<AuthOptions>;
  constructor({ storageKey = "od:auth:token" }: AuthOptions = {}) {
    this.state = Observable<AuthState, AuthChangeEvent>({
      session: null,
      loading: true,
    });
    this.config = {
      storageKey,
    };

    if (typeof window !== "undefined") {
      this.loadSession().then(() => {
        this.state.subscribe((state) => {
          writeToStorage(this.config.storageKey, state.session);
        });
      });
    }
  }

  onAuthStateChange(
    listener: (state: AuthState, event: AuthChangeEvent) => void
  ) {
    listener(this.state.get(), "INIT");
    return this.state.subscribe(listener);
  }

  async getSession(jwt?: string) {
    const session = this.state.get().session;
    if (!this._checkExists()) return null;

    const expired = this._checkExpiry(session);
    if (expired) return await this.refreshSession(session);

    return session;
  }

  async getUser() {
    const session = await this.getSession();
    return session?.user ?? null;
  }

  async signIn(email: string, password: string) {
    const session = await api.auth.authenticate.mutate({ email, password });

    this.state.set(
      {
        session,
        loading: false,
      },
      "SIGNED_IN"
    );

    return session;
  }

  async signUp(email: string, password: string) {
    const session = await api.auth.createUser.mutate({
      email,
      password,
      confirmPassword: password,
    });

    this.state.set(
      {
        session,
        loading: false,
      },
      "SIGNED_IN"
    );

    return session;
  }

  async signOut() {
    const refreshToken = this.state.get().session?.refresh_token;
    this.state.set(
      {
        session: null,
        loading: false,
      },
      "SIGNED_OUT"
    );
    if (refreshToken) await api.auth.revokeRefreshToken.mutate(refreshToken);
  }

  async getIdToken() {
    const session = await this.getSession();
    if (!session) return null;
    return session.access_token;
  }

  private async loadSession() {
    const session = readFromStorage<Session>(this.config.storageKey);
    if (session) {
      const expired = this._checkExpiry(session);
      if (expired) await this.refreshSession(session);
      this.state.set(
        {
          session,
          loading: false,
        },
        "SIGNED_IN"
      );
    } else {
      this.state.set(
        {
          ...this.state.get(),
          loading: false,
        },
        "SIGNED_OUT"
      );
    }
  }

  private async refreshSession(session: Session | null) {
    if (!session) return null;
    try {
      const newSession = await api.auth.refresh.query(session.refresh_token);
      this.state.set(
        {
          session: newSession,
          loading: false,
        },
        "SIGNED_IN"
      );
    } catch (error: any) {
      if (error.code === "UNAUTHORIZED") {
        this.signOut();
      }

      return null;
    }
  }

  private _checkExists() {
    const session = this.state.get().session;
    return !!session;
  }

  private _checkExpiry(session: Session | null) {
    if (!session) return true;
    const { payload } = decodeToken(session.access_token);
    const expiry = payload.exp * 1000;
    return Date.now() > expiry;
  }
}

function decodeToken(tokenStr: string) {
  const [header, payload] = tokenStr.split(".");

  const result = {
    header: JSON.parse(atob(header)),
    payload: JSON.parse(atob(payload)),
  };

  return result;
}

function readFromStorage<T>(key: string) {
  const data = localStorage.getItem(key);
  if (!data) return null;
  return SuperJSON.parse<T>(data);
}

function writeToStorage(key: string, data: any) {
  localStorage.setItem(key, SuperJSON.stringify(data));
}

export const auth = new AuthClient();
