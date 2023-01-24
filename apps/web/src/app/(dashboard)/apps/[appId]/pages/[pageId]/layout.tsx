import React from "react";
import { FiPackage } from "react-icons/fi";
import { AppBar } from "@opendash/ui";
import { NextAppLayout } from "next-types";
import { Back } from "src/app/(dashboard)/components/Back";
import { getPage } from "src/app/(dashboard)/apps/data";

const AppLayout: NextAppLayout<{}, { appId: string; pageId: string }> = async ({
  params,
  children,
}) => {
  const page = await getPage(params.appId, params.pageId);
  return (
    <>
      <AppBar size="lg" className="bg-radix-slate1 gap-3">
        <Back href={`/apps/${params.appId}`} />
        <FiPackage /> <h1>{page.displayName}</h1>
      </AppBar>
      {children}
    </>
  );
};

export default AppLayout;
