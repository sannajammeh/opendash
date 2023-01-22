"use client";
import React from "react";
import AuthProvider from "src/context/AuthContext";
import { ApiProvider } from "src/lib/trpc";

const Providers = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ApiProvider>
      <AuthProvider>{children}</AuthProvider>
    </ApiProvider>
  );
};

export default Providers;
