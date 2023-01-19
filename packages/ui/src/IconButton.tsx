import { classed } from "./classed.config";

export const IconButton = classed.button({
  base: "text-center flex items-center justify-center border border-solid border-transparent transition-all outline-none relative leading-none",
  variants: {
    color: {
      secondary:
        "bg-radix-slate12 text-radix-slate1 focus:outline-radix-slate9",
      blue: "bg-radix-blue9 text-white focus:outline-radix-blue9",
    },
    variant: {
      flat: "focus:outline",
      filled: "focus:outline",
      ghost: "focus:outline",
      text: "focus:outline",
    },

    size: {
      1: "px-1 py-1 text-sm",
      2: "px-2 py-2 text-sm",
      3: "px-3 py-3",
    },

    rounded: {
      none: "rounded-none",
      1: "rounded",
      2: "rounded-sm",
      3: "rounded-md",
      4: "rounded-lg",
      5: "rounded-xl",
      full: "rounded-full",
    },
  },

  compoundVariants: [
    {
      variant: "flat",
      color: "secondary",
      class: `
          bg-radix-slate3 
          text-radix-slate11 
          border-radix-slate6 
          hover:border-radix-slate7 
          hover:bg-radix-slate4
          active:bg-radix-slate5
          active:border-radix-slate8
  `,
    },
    {
      variant: "flat",
      color: "blue",
      class: `
          bg-radix-blue3 
          text-radix-blue11 
          border-radix-blue6 
          hover:border-radix-blue7 
          hover:bg-radix-blue4
          active:bg-radix-blue5
          active:border-radix-blue8
  `,
    },

    // Ghost
    {
      variant: "ghost",
      color: "secondary",
      class: `
          hover:bg-transparent
          hover:border-radix-slate12 
          hover:text-radix-slate12
          active:bg-radix-slate4  
          `,
    },

    {
      variant: "ghost",
      color: "blue",
      class: `
            hover:bg-transparent
            hover:border-radix-blue9
            hover:text-radix-blue11   
            active:bg-radix-blue3  
            `,
    },
    // Text
    {
      variant: "text",
      color: "secondary",
      class: `
          bg-transparent
          text-radix-slate12
          hover:bg-radix-slate5
        `,
    },
    {
      variant: "text",
      color: "blue",
      class: `
          bg-transparent
          text-radix-blue11
          hover:bg-radix-blue5
        `,
    },
  ],

  defaultVariants: {
    color: "secondary",
    size: 1,
    variant: "flat",
    rounded: "3",
  },
});
