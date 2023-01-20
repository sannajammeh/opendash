import { exampleRouter } from "./routes";
import { t } from "./trpc";

export const appRouter = t.router({
  example: exampleRouter,
});

/**
 * AppRouter - The root router for the app TRPC
 */
export type AppRouter = typeof appRouter;
