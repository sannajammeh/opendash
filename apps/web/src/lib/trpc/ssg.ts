import { appRouter } from "src/server/root";
import { createProxySSGHelpers } from "trpc-swr/ssg";

export const createSSG = () => {
  return createProxySSGHelpers({
    router: appRouter,
    ctx: {} as never,
  });
};
