import React, { createContext, useContext, useSyncExternalStore } from "react";
import { auth } from "src/lib/auth";
import type * as Auth from "src/lib/auth";

export interface AuthContext {
  user?: Auth.User | null;
  session?: Auth.Session | null;
}

export const authContext = createContext<AuthContext>(null!);

const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const state = useSyncExternalStore(
    auth.state.subscribe,
    auth.state.get,
    auth.state.get
  );

  return (
    <authContext.Provider
      value={{
        user: state?.user,
        session: state.session,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(authContext);
export const useUser = () => useAuthContext().user;
export const useSession = () => useAuthContext().session;
