import { ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "./classed.config";
import { CgSpinner } from "react-icons/cg";
import clsx from "clsx";

export const ButtonBase = classed.button({
  base: "text-center flex items-center border border-solid border-transparent transition-all outline-none relative leading-none",
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
      1: "px-2 py-1 text-xs gap-1",
      2: "px-3 py-2 text-sm gap-2",
      3: "px-4 py-3 gap-3",
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

    space: {
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
    },

    loading: {
      true: "cursor-progress",
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
    rounded: "2",
    space: "center",
  },
});

export interface ButtonProps extends ComponentProps<typeof ButtonBase> {
  icon?: React.ReactNode;
}

export const Button = deriveClassed<typeof ButtonBase, ButtonProps>(
  ({ children, icon, loading, ...props }, ref) => {
    return (
      <ButtonBase loading={loading} {...props} ref={ref}>
        {icon && <span>{icon}</span>}
        <span
          className={clsx(
            "flex items-center gap-[inherit]",
            props.space === "center" && "mx-auto",
            !loading ? "visible" : "invisible"
          )}
        >
          {children}
        </span>
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            loading ? "" : "hidden"
          }`}
        >
          <CgSpinner className="animate-spin" />
        </span>
      </ButtonBase>
    );
  }
);
