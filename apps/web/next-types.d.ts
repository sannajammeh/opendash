import React, { PropsWithChildren } from "react";

export type NextAppProps<P = {}, Params = {}, SearchParams = {}> = P & {
  params: { [key: string]: string | string[] | undefined } & Params;
  searchParams?: {
    [key: string]: string | string[] | undefined;
  } & SearchParams;
};

type Awaitable<T> = T | Promise<T>;

export type NextAppPage<P = {}, Params = {}, SearchParams = {}> = (
  props: NextAppProps<P, Params, SearchParams>
) => Awaitable<React.ReactNode>;

export type NextAppLayout<P = {}, Params = {}, SearchParams = {}> = NextAppPage<
  PropsWithChildren<P>,
  Params,
  SearchParams
>;
