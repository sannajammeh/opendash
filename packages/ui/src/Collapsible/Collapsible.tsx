"use client";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ButtonBase } from "../Button";
import { classed } from "../classed.config";
import classes from "./Collapsible.module.scss";

const CollapsibleRoot = CollapsiblePrimitive.Root;

const CollapsibleTrigger = classed(
  CollapsiblePrimitive.Trigger,
  ButtonBase,
  {
    variants: {
      open: {
        true: "bg-radix-slate5",
      },
    },
    defaultVariants: {
      variant: "text",
      color: "secondary",
    } as any,
  },
  "!text-sm",
  classes.Trigger
);

const CollapsibleIndicator = classed(
  "span",
  "pointer-events-none",
  classes.Indicator
);

const CollapsibleContent = CollapsiblePrimitive.Content;

// Exports
export {
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleIndicator,
};
