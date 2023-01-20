import { t } from "../trpc";

export const exampleRouter = t.router({
  hello: t.procedure.query(() => ({
    message: "Hello World",
  })),
});
