import { classed } from "@tw-classed/react";

export const Separator = classed.hr("block", {
  variants: {
    color: {
      slate: "border-radix-slate6",
      blue: "border-radix-blue6",
    },

    size: {
      1: "my-1",
      2: "my-2",
      3: "my-3",
      4: "my-4",
    },
  },

  defaultVariants: {
    color: "slate",
  },
});
