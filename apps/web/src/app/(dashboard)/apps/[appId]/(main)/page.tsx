import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { FiFolder, FiPackage } from "react-icons/fi";
import { Button, Card, Flex, Input, Spacer, Text } from "ui";
import { NextAppPage } from "../../../../../../next-types";
import { AppContainer } from "../../../components/AppContainer";
import { Team, teams } from "../../data";

const getApp = async (id: number) => {
  const team = teams.find((team) => team.id === id);
  if (!team) return notFound();
  return team as Team;
};

const AppPage: NextAppPage<
  {},
  {
    appId: string;
  }
> = async ({ params }) => {
  const app = await getApp(Number(params.appId));
  return (
    <div className="relative">
      <div className="h-[275px] absolute top-0 left-0 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />

      <AppContainer className="relative z-10">
        <Flex className="mt-14" variant="horizontal" gap="6">
          <div className="rounded-md w-16 h-16 bg-radix-slate1 flex justify-center items-center shadow-md">
            <FiPackage size={32} />
          </div>
          <h2>
            <Text
              size="heading"
              weight="bold"
              className="text-white filter drop-shadow-md"
            >
              {app.displayName}
            </Text>{" "}
          </h2>
        </Flex>
        <Spacer />
        <Input
          placeholder="Search for a page..."
          className="w-full bg-radix-slate1"
        />
        <Spacer />
        <Card bordered>
          <Card.Body size="large">
            <Flex variant="horizontal" gap="2">
              <FiFolder />
              <h1 className="font-medium">Pages</h1>
              <span>
                <Text color="slate" size="1" weight="medium">
                  {app.pages.length}
                </Text>
              </span>
            </Flex>
            <ul>
              {app.pages.map((page) => (
                <li className="w-full" key={page.id}>
                  <Button
                    as={Link}
                    href={`/apps/${app.id}/pages/${page.id}`}
                    rounded="3"
                    space="start"
                    className="w-full font-medium"
                    variant="text"
                  >
                    {page.displayName}
                  </Button>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </AppContainer>
    </div>
  );
};

export default AppPage;
