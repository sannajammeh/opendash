import { classed } from "@tw-classed/react";

export const Input = classed("input", {
  base: "inline-block w-full border bg-transparent focus:outline focus:outline-1 transition-all",
  variants: {
    size: {
      1: "px-2 py-1 text-sm",
      2: "px-3 py-2 text-sm",
      3: "px-4 py-3",
    },

    rounded: {
      1: "rounded",
      2: "rounded-sm",
      3: "rounded-md",
      4: "rounded-lg",
    },

    color: {
      slate:
        "border-radix-slate6 hover:border-radix-slate7 focus:outline-radix-slate8",
      blue: "border-radix-slate6 hover:border-radix-blue7 focus:border-radix-blue6 focus:text-radix-blue11 focus:outline-radix-blue8",
    },
  },

  defaultVariants: {
    size: 1,
    rounded: 1,
    color: "slate",
  },
});
