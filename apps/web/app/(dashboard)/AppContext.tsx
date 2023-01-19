"use client";

import {
  createContext,
  memo,
  PropsWithChildren,
  PureComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { NextAppProps } from "../../next-types";

export interface AppContext extends NextAppProps {
  setParams: (params: NextAppProps["params"]) => void;
}

export const AppContext = createContext<AppContext>({} as AppContext);

export const AppContextProvider = ({
  children,
  params,
}: PropsWithChildren<Partial<AppContext>>) => {
  const [_params, setParams] = useState<AppContext["params"]>(params || {});

  return (
    <AppContext.Provider value={{ params: _params, setParams }}>
      {children}
    </AppContext.Provider>
  );
};

const Memo = memo(({ children }: PropsWithChildren<{}>) => <>{children}</>);

export const AppConfig = ({
  children,
  params,
}: PropsWithChildren<Partial<AppContext>>) => {
  const appContext = useAppContext();

  useEffect(() => {
    params && appContext.setParams(params);

    return () => {
      appContext.setParams({});
    };
  }, [params]);

  return <Memo>{children}</Memo>;
};

export const useAppContext = () => useContext(AppContext);
