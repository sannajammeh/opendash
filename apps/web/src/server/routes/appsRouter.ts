import { teams } from "src/app/(dashboard)/apps/data";
import { t } from "../trpc";

export const appsRouter = t.router({
  getApps: t.procedure.query(() => teams),
});
