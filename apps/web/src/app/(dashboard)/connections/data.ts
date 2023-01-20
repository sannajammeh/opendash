export type PostgresCredentials = {
  host: string;
  port: number;
  user: string;
  password: string;
  hashedConnection?: string;
};

export interface BaseConnection {
  id: number;
  tableCount: number;
  type: string;
  displayName: string;
  credentials: Record<string, any>;
}

export interface PostgresConnection extends BaseConnection {
  type: "postgres";
  credentials: PostgresCredentials;
}

export type Connection = PostgresConnection;

export const connections: Connection[] = [
  {
    id: 1,
    tableCount: 12,
    type: "postgres",
    displayName: "Postgres API",
    credentials: {
      host: "localhost",
      port: 5432,
      user: "post****",
      password: "*********",
      // Partially hashed connection with most sensitive data ***ed out
      hashedConnection: "postgres://post****:*********@localhost:5432/postgres",
    },
  },
];
