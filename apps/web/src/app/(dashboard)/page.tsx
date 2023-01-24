import { Card, Spacer, Text } from "@opendash/ui";
import Link from "next/link";
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

      <Suspense fallback={<AppsListSkeleton />}>
        <AppsList />
      </Suspense>
    </AppContainer>
  );
};

export default Page;
