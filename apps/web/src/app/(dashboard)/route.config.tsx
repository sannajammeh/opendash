import { Component1Icon, TokensIcon } from "@radix-ui/react-icons";
import {
  usePathname,
  useSearchParams,
  useSelectedLayoutSegment,
} from "next/navigation";
import { useMemo } from "react";
import { FiDatabase, FiHome } from "react-icons/fi";
import { match, P } from "ts-pattern";
import { NextAppProps } from "../../../next-types";

interface Route {
  title: string;
  icon?: JSX.Element;
  segment?: string | null;
  elevated?: boolean;
  showHeader?: boolean;
}

const ConnectionPattern = new URLPattern({
  pathname: "/connections/:id",
});

const AppPattern = new URLPattern({
  pathname: "/apps/*",
});

export const getRouteConfig = (pathname?: string, pageProps?: NextAppProps) => {
  const matchedConfig = match<{ pathname: typeof pathname }, Route>({
    pathname,
  })
    .with({ pathname: "/workspaces" }, () => ({
      title: "Workspaces",
      icon: <TokensIcon />,
      segment: "workspaces",
    }))

    .with({ pathname: "/workspaces/new" }, () => ({
      title: "New workspace",
      icon: <TokensIcon />,
      segment: "workspaces",
      elevated: true,
    }))

    .with({ pathname: "/connections" }, () => ({
      title: "Connections",
      icon: <FiDatabase />,
      segment: "connections",
      elevated: true,
    }))
    .when(
      ({ pathname }) =>
        ConnectionPattern.test({
          pathname: pathname || "",
        }),
      () => ({
        title: "Connections",
        showHeader: false,
      })
    )
    .when(
      (value) => AppPattern.test(value),
      () => ({
        title: "Apps",
        icon: <Component1Icon />,
        showHeader: false,
        elevated: true,
      })
    )

    .otherwise(() => ({
      title: "Home",
      segment: null,
      icon: <FiHome />,
    }));

  return matchedConfig;
};

export const useRouteConfig = (pageProps?: NextAppProps) => {
  const pathname = usePathname();
  return useMemo(
    () => getRouteConfig(pathname ?? undefined, pageProps),
    [pathname, pageProps]
  );
};
