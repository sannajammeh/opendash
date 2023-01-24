import { classed } from "@opendash/ui";

export const AppContainer = classed.div(
  "mx-auto container",
  "lg:max-w-[960px] max-w-[1200px]",
  {
    variants: {
      padding: {
        none: "p-0",
        sm: "px-2 py-6",
        md: "px-2 py-8",
      },

      elevated: {
        true: "bg-radix-slate2",
      },
    },
    defaultVariants: {
      padding: "sm",
    },
  }
);
