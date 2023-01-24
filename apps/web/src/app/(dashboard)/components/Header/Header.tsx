"use client";

import React from "react";
import { useUser } from "src/context/AuthContext";
import { Flex, Text } from "@opendash/ui";
import { useAppContext } from "../../AppContext";
import { useRouteConfig } from "../../route.config";

const Header = () => {
  const appState = useAppContext();
  const route = useRouteConfig(appState);

  if (route.showHeader === false) return null;
  return (
    <header className="min-h-[46px] border-b border-radix-slate6 flex items-center px-3">
      <Flex as="span" variant="horizontal" gap="2">
        {route.icon} <Text weight="medium">{route.title}</Text>
      </Flex>
    </header>
  );
};

export default Header;
