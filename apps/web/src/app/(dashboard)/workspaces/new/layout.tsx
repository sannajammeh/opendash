import React from "react";
import { AppContainer } from "../../components/AppContainer";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return <AppContainer>{children}</AppContainer>;
};

export default Layout;
