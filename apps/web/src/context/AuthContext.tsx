import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { auth } from "src/lib/auth";
import type * as Auth from "src/lib/auth";
import { SiOpslevel } from "react-icons/si";
import Redirect from "src/components/Redirect";
import { usePathname, useRouter } from "next/navigation";

export interface AuthContext {
  user?: Auth.User | null;
  session?: Auth.Session | null;
}

export const authContext = createContext<AuthContext>(null!);

const AuthProvider = ({
  children,
  legacyRouter,
}: React.PropsWithChildren<{ legacyRouter?: boolean }>) => {
  const [session, setSession] = useState<AuthContext["session"]>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const isLogin = pathname === "/login";

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChange((session, event) => {
      setSession(session.session);
      setLoading(session.loading);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    !isLogin && router.prefetch("/login");
  }, [isLogin]);

  return (
    <authContext.Provider
      value={{
        user: session?.user,
        session,
      }}
    >
      {loading && !isLogin && <LoadingScreen />}
      {!loading && !session?.user && !isLogin && (
        <Redirect
          legacyRouter={legacyRouter}
          href={
            !pathname
              ? "/login"
              : pathname === "/"
              ? "/login"
              : `/login?redirect=${encodeURIComponent(pathname)}`
          }
        />
      )}
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(authContext);
export const useUser = () => useAuthContext().user;
export const useSession = () => useAuthContext().session;

const LoadingScreen = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 grid place-items-center bg-radix-slate1 z-50">
      <SiOpslevel className="animate-ping" size="4rem" />
    </div>
  );
};
