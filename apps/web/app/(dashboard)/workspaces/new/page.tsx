"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Card, Flex, Input, Spacer, Text } from "ui";

const NewWorkspace = () => {
  return (
    <div className="container max-w-2xl lg:max-w-3xl mx-auto pt-12">
      <form>
        <Text size="2">
          Each workspace has its own databases, collaborators, permissions, and
          billing.
        </Text>
        <Card className="mt-4" bordered>
          <Card.Body size="small">
            <Flex
              className="lg:justify-evenly whitespace-nowrap"
              as="label"
              gap="4"
              htmlFor="workspaceName"
              variant="horizontal"
            >
              <Text color="slate" size="2">
                Workspace name
              </Text>
              <Input
                color="blue"
                name="workspaceName"
                id="workspaceName"
                placeholder="Cartable Nordic.."
              />
            </Flex>
          </Card.Body>
        </Card>
        <Spacer size={4} />
        <Button variant="flat" color="blue" rounded="3">
          Create workspace <ArrowRightIcon />
        </Button>
      </form>
    </div>
  );
};

export default NewWorkspace;
