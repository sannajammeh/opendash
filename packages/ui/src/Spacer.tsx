import { classed } from "./classed.config";

export const Spacer = classed.span("block", {
  variants: {
    size: {
      1: "h-1 w-1",
      2: "h-2 w-2",
      3: "h-3 w-3",
      4: "h-4 w-4",
      5: "h-5 w-5",
      6: "h-6 w-6",
      7: "h-7 w-7",
      8: "h-8 w-8",
      9: "h-9 w-9",
      10: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: 4,
  },
});
