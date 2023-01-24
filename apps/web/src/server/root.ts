import { authRouter, workspaceRouter } from "./routes";
import { appsRouter } from "./routes/appsRouter";
import { t } from "./trpc";

export const appRouter = t.router({
  auth: authRouter,
  workspace: workspaceRouter,
  apps: appsRouter,
});

/**
 * AppRouter - The root router for the app TRPC
 */
export type AppRouter = typeof appRouter;
