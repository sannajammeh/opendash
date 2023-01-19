"use client";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import {
  Button,
  classed,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleRoot,
  CollapsibleTrigger,
  Flex,
} from "ui";
import { teams } from "../../apps/data";
import { connections } from "../../connections/data";

const PanelActions = () => {
  return (
    <Flex gap="2" direction="column">
      <Teams />
      <Connections />
    </Flex>
  );
};

export default PanelActions;

const Teams = () => {
  return (
    <CollapsibleRoot>
      <CollapsibleTrigger space="start" className="w-full">
        <CollapsibleIndicator>
          <ChevronRightIcon />
        </CollapsibleIndicator>
        Teams
      </CollapsibleTrigger>
      <CollapsibleContent>
        <List>
          {teams.map((team) => (
            <TeamItem
              key={team.id}
              displayName={team.displayName}
              id={team.id}
            />
          ))}
        </List>
      </CollapsibleContent>
    </CollapsibleRoot>
  );
};

const Connections = () => {
  return (
    <CollapsibleRoot>
      <CollapsibleTrigger space="start" className="w-full">
        <CollapsibleIndicator>
          <ChevronRightIcon />
        </CollapsibleIndicator>
        Connections
      </CollapsibleTrigger>
      <CollapsibleContent>
        <List>
          {connections.map((connection) => (
            <ConnectionItem
              key={connection.id}
              displayName={connection.displayName}
              id={connection.id}
            />
          ))}
        </List>
      </CollapsibleContent>
    </CollapsibleRoot>
  );
};

const ConnectionItem = ({
  displayName,
  id,
}: {
  displayName: string;
  id: string | number;
}) => (
  <Button space="start" variant="text" as={Link} href={`/connections/${id}`}>
    {displayName}
  </Button>
);

const TeamItem = ({
  displayName,
  id,
}: {
  displayName: string;
  id: string | number;
}) => (
  <Button space="start" variant="text" as={Link} href={`/apps/${id}`}>
    {displayName}
  </Button>
);

const List = classed(
  "div",
  Flex,
  {
    defaultVariants: {
      direction: "column",
      gap: 2,
    },
  },
  "pt-1 pl-3"
);
