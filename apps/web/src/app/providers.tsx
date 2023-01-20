"use client";
import React from "react";
import { ApiProvider } from "src/lib/trpc";

const Providers = ({ children }: React.PropsWithChildren<{}>) => {
  return <ApiProvider>{children}</ApiProvider>;
};

export default Providers;
