import { classed } from "ui";

export const AppContainer = classed.div("mx-auto container", "max-w-[1200px]", {
  variants: {
    padding: {
      none: "p-0",
      sm: "px-2 py-6",
      md: "px-2 py-8",
    },
  },
  defaultVariants: {
    padding: "sm",
  },
});
