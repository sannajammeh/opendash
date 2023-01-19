import React from "react";
import { Card, Text } from "ui";
import { AppContainer } from "../components/AppContainer";
import { connections } from "./data";
import { matchConnectionIcon } from "./utils";

const Connections = () => {
  return (
    <AppContainer>
      <Card>
        <Card.Body size="medium">
          <ul>
            {connections.map((connection) => {
              return (
                <li className="flex items-center gap-2" key={connection.id}>
                  {matchConnectionIcon(connection)}
                  <Text weight="medium">{connection.displayName}</Text>
                </li>
              );
            })}
          </ul>
        </Card.Body>
      </Card>
    </AppContainer>
  );
};

export default Connections;
