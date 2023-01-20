import React from "react";
import { FiPackage } from "react-icons/fi";
import { AppBar } from "ui";
import { NextAppLayout } from "../../../../../../next-types";
import { getAppName } from "./head";

type Props = {};

const AppLayout: NextAppLayout<{}, { appId: string }> = async ({
  params,
  children,
}) => {
  const app = await getAppName(params.appId);
  return (
    <>
      <AppBar size="lg" className="bg-radix-slate1">
        <FiPackage /> <h1>{app.displayName}</h1>
      </AppBar>
      {children}
    </>
  );
};

export default AppLayout;
