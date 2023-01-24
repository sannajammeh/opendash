import { classed } from "./classed.config";

export const Skeleton = classed(
  "div",
  "bg-radix-slate5 animate-pulse leading-none",
  {
    variants: {
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
      },
    },

    defaultVariants: {
      rounded: "md",
    },
  }
);
