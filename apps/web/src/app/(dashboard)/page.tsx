import { Card, Spacer, Text } from "@opendash/ui";
import React, { Suspense } from "react";
import { AppContainer } from "./components/AppContainer";
import AppsList, { AppsListSkeleton } from "./components/AppsList";

const Page = async () => {
  return (
    <AppContainer>
      <Card bordered>
        <Card.Body>
          <Text size="7" weight="bold" as="h1">
            Welcome to Opendash
          </Text>
        </Card.Body>
      </Card>

      <Spacer size="10" />

      <AppsList />
    </AppContainer>
  );
};

export default Page;
