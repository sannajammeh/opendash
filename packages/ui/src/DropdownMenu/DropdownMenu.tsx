"use client";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ComponentProps } from "@tw-classed/react";
import { forwardRef } from "react";

import { classed } from "../classed.config";
import classes from "./DropdownMenu.module.scss";

const ClassedDropdownMenuContent = classed(
  DropdownMenuPrimitive.Content,
  classes.content
);
const DropdownMenuSubContent = classed(
  DropdownMenuPrimitive.SubContent,
  classes.content
);

const DropdownMenuArrow = classed(DropdownMenuPrimitive.Arrow, classes.arrow);

const DropdownMenuItem = classed(DropdownMenuPrimitive.Item, classes.item);
const DropdownMenuCheckboxItem = classed(
  DropdownMenuPrimitive.CheckboxItem,
  classes.item
);
const DropdownMenuRadioItem = classed(
  DropdownMenuPrimitive.RadioItem,
  classes.item
);

const DropdownMenuSubTrigger = classed(
  DropdownMenuPrimitive.Trigger,
  classes.subTrigger,
  classes.item
);

const DropdownMenuLabel = classed(
  DropdownMenuPrimitive.Label,
  "pl-6 text-sm leading-[25px] text-radix-slate11"
);

const DropdownMenuSeparator = classed(
  DropdownMenuPrimitive.Separator,
  "h-[1px]",
  "bg-radix-slate6",
  "my-2"
);

const DropdownMenuItemIndicator = classed(
  DropdownMenuPrimitive.ItemIndicator,
  "absolute left-0 w-6 inline-flex justify-center items-center"
);

export const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof ClassedDropdownMenuContent>
>((props, ref) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <ClassedDropdownMenuContent {...props} ref={ref} />
    </DropdownMenuPrimitive.Portal>
  );
});

export const DropdownMenu = Object.assign(DropdownMenuPrimitive.Root, {
  Trigger: DropdownMenuPrimitive.Trigger,
  Content: DropdownMenuContent,
  Group: DropdownMenuPrimitive.Group,
  RadioGroup: DropdownMenuPrimitive.RadioGroup,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioItem: DropdownMenuRadioItem,
  Sub: DropdownMenuPrimitive.Sub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
  ItemIndicator: DropdownMenuItemIndicator,
  Arrow: DropdownMenuArrow,
});
