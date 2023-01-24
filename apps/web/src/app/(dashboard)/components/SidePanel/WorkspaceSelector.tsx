"use client";
import { Component1Icon, PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";
import { Select, SelectPrimitive } from "@opendash/ui";
import { api } from "src/lib/trpc";
import { CgSpinner } from "react-icons/cg";
import { appState, useWorkspaceId } from "src/context/AppState";

const WorkspaceSelector = () => {
  const workspaceId = useWorkspaceId();
  const { data, isLoading } = api.workspace.getAll.useSWR();

  return (
    <Select
      color="violet"
      className={"w-full"}
      onValueChange={(value) => (appState.workspaceId = Number(value))}
      value={
        workspaceId
          ? String(workspaceId)
          : data?.[0].id
          ? String(data?.[0].id)
          : "__default__"
      }
    >
      <Select.Item disabled value="__default__">
        <Component1Icon /> Select workspace
      </Select.Item>
      {isLoading && (
        <SelectPrimitive.Item disabled value="__loading__">
          <div className="w-full flex justify-center">
            <CgSpinner className="animate-spin" />
          </div>
        </SelectPrimitive.Item>
      )}
      {data?.map((workspace) => (
        <Select.Item key={workspace.id} value={String(workspace.id)}>
          <Component1Icon /> {workspace.name}
        </Select.Item>
      ))}
      <Select.Separator />
      <Select.Button as={Link} href="/workspaces/new">
        <PlusIcon />
        New workspace
      </Select.Button>
    </Select>
  );
};

export default WorkspaceSelector;
