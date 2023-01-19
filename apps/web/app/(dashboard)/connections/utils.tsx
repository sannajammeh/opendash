import { FiDatabase } from "react-icons/fi";
import { match } from "ts-pattern";
import { Connection } from "./data";

export const matchConnectionIcon = (type: Connection) => {
  return match(type)
    .with({ type: "postgres" }, () => <FiDatabase />)
    .exhaustive();
};
