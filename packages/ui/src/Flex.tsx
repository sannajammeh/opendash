import { classed } from "./classed.config";

export const Flex = classed.div("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
    },

    variant: {
      horizontal: "flex-row items-center",
      vertical: "flex-col items-start",
    },

    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      7: "gap-7",
      8: "gap-8",
      9: "gap-9",
      10: "gap-10",
    },
  },
});
