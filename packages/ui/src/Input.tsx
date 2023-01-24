import { classed, VariantProps } from "@tw-classed/react";
import { forwardRef, HTMLProps, useId } from "react";
import { Flex } from "./Flex";
import { Text } from "./Text";

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
      red: "border-radix-slate6 hover:border-radix-red7 focus:border-radix-red6 focus:text-radix-red11 focus:outline-radix-red8",
    },

    state: {
      error: "!border-radix-red9 text-radix-red11 focus:outline-radix-red8",
    },
  },

  defaultVariants: {
    size: 1,
    rounded: 1,
    color: "slate",
  },
});

export const Label = classed("label", Flex, Text, {
  base: "whitespace-nowrap",
  defaultVariants: {
    color: "slate",
    size: 2,
    gap: 1,
  },
});

export type TextFieldProps = HTMLProps<HTMLInputElement> &
  Omit<VariantProps<typeof Label>, "color" | "size"> &
  VariantProps<typeof Input> & { label?: string; error?: string };

export const TextField = forwardRef<
  HTMLInputElement,
  Omit<TextFieldProps, "as">
>(
  (
    {
      variant = "vertical",
      direction,
      gap,
      justify,
      label,
      error,
      id,
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const _id = id || generatedId;

    if (!label) return <Input {...props} ref={ref} />;

    return (
      <Label
        {...{
          variant,
          direction,
          gap,
          justify,
          className,
          color: error ? "red" : undefined,
        }}
        htmlFor={_id}
      >
        <span>{error ? error : label}</span>

        <Input
          state={error ? "error" : undefined}
          id={id}
          {...props}
          ref={ref}
        />
      </Label>
    );
  }
);
