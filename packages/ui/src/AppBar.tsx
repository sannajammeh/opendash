import { classed } from "./classed.config";

export const AppBar = classed.header(
  "border-b border-radix-slate6 flex gap-2 items-center px-3 leading-none",
  {
    variants: {
      size: {
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
