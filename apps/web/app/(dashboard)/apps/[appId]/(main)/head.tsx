import React from "react";
import { NextAppLayout } from "../../../../../next-types";
import { teams } from "../../data";

export const getAppName = async (id: string) => {
  const { displayName } = teams.find((t) => t.id === Number(id)) || {
    displayName: "Team",
  };
  return { displayName };
};

const Head: NextAppLayout<{}, { appId: string }> = async ({ params }) => {
  const app = await getAppName(params.appId);
  return (
    <>
      <title>{`${app.displayName} | OpenDash`}</title>
    </>
  );
};

export default Head;
