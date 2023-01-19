"use client";
import React, { PropsWithChildren } from "react";
import { classed } from "ui";
import { useRouteConfig } from "./route.config";

type Props = {};

const Outlet = ({ children }: PropsWithChildren<Props>) => {
  const route = useRouteConfig();
  return (
    <OutletContainer bg={route.elevated ? "elevated" : "transparent"}>
      {children}
    </OutletContainer>
  );
};

export default Outlet;

const OutletContainer = classed("div", {
  base: "h-full",
  variants: {
    bg: {
      elevated: "bg-radix-slate3",
      transparent: "bg-transparent",
    },
  },
});
