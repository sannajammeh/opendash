import { classed } from "./classed.config";

export const Text = classed("span", {
  variants: {
    size: {
      1: "text-xs",
      2: "text-sm",
      3: "text-base",
      4: "text-lg",
      5: "text-xl",
      6: "text-2xl",
      7: "text-3xl",
      8: "text-4xl",
      9: "text-5xl",
      heading: "text-4xl font-medium",
      title: "text-xl",
    },

    color: {
      slate: "text-radix-slate11",
      blue: "text-radix-blue11",
      red: "text-radix-red11",
    },

    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
      "semi-bold": "font-semibold",
      black: "font-black",
    },

    block: {
      true: "block",
    },

    center: {
      true: "text-center",
    },
  },

  defaultVariants: {
    size: 3,
  },
});
