import { notFound } from "next/navigation";
import React from "react";
import { FiSettings, FiTrash } from "react-icons/fi";
import { Button, classed, Flex, Spacer, Text } from "ui";
import { NextAppPage } from "../../../../next-types";
import { Back } from "../../components/Back";
import { connections } from "../data";
import { matchConnectionIcon } from "../utils";
import DisplayNameInput from "./DisplayNameInput";

const getConnection = async (id: string) => {
  const conn = connections.find((connection) => connection.id === Number(id));

  if (!conn) {
    return notFound();
  }

  return conn;
};

const Page: NextAppPage<
  {},
  {
    id: string;
  }
> = async ({ params }) => {
  const connection = await getConnection(params.id);

  return (
    <>
      <div className="h-full max-w-lg border-r border-radix-slate6">
        <Flex
          className="h-[46px] px-3 border-b border-radix-slate6"
          variant="horizontal"
          gap={3}
        >
          <Back href="/connections" />
          {matchConnectionIcon(connection)}
          <Text weight="medium">{connection.displayName}</Text>
        </Flex>
        <section className="max-w-lg  p-3">
          <Text weight="medium" size="2">
            Connection details
          </Text>
          <Spacer size="3" />
          <Flex direction="column" gap="3">
            <Flex variant="horizontal" justify="between" gap="6">
              <ConnectionLine className="whitespace-nowrap">
                Display Name
              </ConnectionLine>
              <DisplayNameInput displayName={connection.displayName} />
            </Flex>
            <Flex variant="horizontal" justify="between">
              <ConnectionLine>Connected</ConnectionLine>{" "}
              <input type="checkbox" />
            </Flex>
            <Flex variant="horizontal" justify="between">
              <ConnectionLine>Editable</ConnectionLine>{" "}
              <input type="checkbox" />
            </Flex>
          </Flex>
          <Spacer size="3" />
          <Flex direction="column" gap="2">
            <Button icon={<FiSettings />} space="start" variant="text">
              Manage credentials
            </Button>
            <Button icon={<FiTrash />} space="start" variant="text">
              Delete connection
            </Button>
          </Flex>
        </section>
      </div>
    </>
  );
};

export default Page;

const ConnectionLine = classed(Text, {
  defaultVariants: {
    color: "slate",
    size: "2",
  },
});
