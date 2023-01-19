"use client";
import { Component1Icon, PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Select } from "ui";

const WorkspaceSelector = () => {
  return (
    <Select className={"w-full"} defaultValue="1">
      <Select.Item value="1">
        <Component1Icon /> Cartable's workspace
      </Select.Item>
      <Select.Separator />
      <Select.Button as={Link} href="/workspaces/new">
        <PlusIcon />
        New workspace
      </Select.Button>
    </Select>
  );
};

export default WorkspaceSelector;
