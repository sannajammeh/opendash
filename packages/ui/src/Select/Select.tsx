"use client";
import { forwardRef } from "react";
import { classed } from "../classed.config";
import classes from "./Select.module.scss";
import { CheckIcon } from "@radix-ui/react-icons";

import * as SelectPrimitive from "@radix-ui/react-select";
import clsx from "clsx";
import { deriveClassed } from "@tw-classed/react";

const SelectTrigger = classed(SelectPrimitive.Trigger, classes.SelectTrigger);
const SelectIcon = classed(SelectPrimitive.Icon, classes.SelectIcon);
const SelectValue = SelectPrimitive.Value;
const SelectContent = classed(SelectPrimitive.Content, classes.SelectContent);
const SelectItemIndicator = classed(
  SelectPrimitive.ItemIndicator,
  classes.SelectItemIndicator
);
const SelectItemText = classed(SelectPrimitive.ItemText, "flex gap-2");
const SelectViewport = classed(
  SelectPrimitive.Viewport,
  classes.SelectViewPort
);
const SelectLabel = classed(SelectPrimitive.Label, classes.SelectLabel);
const SelectSeparator = classed(
  SelectPrimitive.Separator,
  classes.SelectSeparator
);

const SelectScrollupButton = classed(
  SelectPrimitive.ScrollUpButton,
  classes.SelectScrollUpButton
);

const SelectScrolldownButton = classed(
  SelectPrimitive.ScrollDownButton,
  classes.SelectScrollDownButton
);
const SelectPortal = SelectPrimitive.Portal;
const SelectRoot = SelectPrimitive.Root;

const SelectItem = forwardRef<HTMLDivElement, SelectPrimitive.SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className={clsx(classes.SelectItem, className)}
        {...props}
        ref={forwardedRef}
      >
        <SelectItemText>
          <span className="flex items-center gap-2">{children}</span>
        </SelectItemText>
        <SelectItemIndicator>
          <CheckIcon />
        </SelectItemIndicator>
      </SelectPrimitive.Item>
    );
  }
);

const ButtonItem = classed(
  "button",
  classes.SelectItem,
  classes.SelectButton,
  "w-full"
);

const SelectButton = deriveClassed<typeof ButtonItem>(
  ({ children, ...props }, ref) => {
    return (
      <ButtonItem {...props} ref={ref}>
        <span className="flex items-center gap-2">{children}</span>
      </ButtonItem>
    );
  }
);

interface SelectProps extends SelectPrimitive.SelectProps {
  className?: string;
  color?: keyof typeof colors;
}

const colors = {
  blue: classes.blue,
  violet: classes.violet,
};

const _Select = ({ children, className, color, ...props }: SelectProps) => {
  return (
    <SelectRoot {...props}>
      <SelectTrigger className={clsx(className, color && colors[color])}>
        <SelectValue />
        <SelectIcon />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent
          className={clsx(color && colors[color])}
          position="popper"
          sideOffset={5}
        >
          <SelectScrollupButton />
          <SelectViewport>{children}</SelectViewport>
          <SelectScrolldownButton />
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  );
};

_Select.Item = SelectItem;
_Select.Separator = SelectSeparator;
_Select.Group = SelectPrimitive.Group;
_Select.Label = SelectLabel;
_Select.Button = SelectButton;

export const Select = _Select;

export { SelectPrimitive };
