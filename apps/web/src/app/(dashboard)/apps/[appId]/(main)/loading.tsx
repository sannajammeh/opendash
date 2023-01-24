import { AppContainer } from "src/app/(dashboard)/components/AppContainer";
import React from "react";
import { FiPackage, FiFolder } from "react-icons/fi";
import { Flex, Spacer, Input, Card, Button, Text } from "@opendash/ui";

const Loading = () => {
  return (
    <div className="relative">
      <div className="h-[275px] absolute top-0 left-0 w-full bg-radix-slate4 animate-pulse" />

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
              ssssssssssssssss
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
                  {0}
                </Text>
              </span>
            </Flex>
            <ul className="flex flex-col gap-2">
              {Array.from({ length: 2 })
                .fill(null)
                .map((page, index) => (
                  <li className="w-full" key={index}>
                    <Button
                      as="span"
                      rounded="3"
                      space="start"
                      className="w-full font-medium !bg-radix-slate5 animate-pulse"
                      variant="text"
                    >
                      <span className="invisible">a</span>
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

export default Loading;
