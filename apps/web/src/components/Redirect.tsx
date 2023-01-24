"use client";

import { useIsomorphicLayoutEffect } from "@opendash/hooks";
import { useRouter } from "next/navigation";
import { useRouter as useLegacyRouter } from "next/router";

const Redirect = ({
  href,
  legacyRouter,
}: {
  href: string;
  legacyRouter?: boolean;
}) => {
  const router = legacyRouter ? useLegacyRouter() : useRouter();

  useIsomorphicLayoutEffect(() => {
    router.push(href);
  }, [href]);

  if (!href) throw new Error("Redirect href is required");
  return null;
};

export default Redirect;
