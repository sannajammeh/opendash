import React from "react";
import { createSSG } from "src/lib/trpc/ssg";
import { AppContainer } from "./components/AppContainer";

const Page = async () => {
  const ssg = createSSG();
  const data = await ssg.example.hello.fetch();

  return <AppContainer>{data.message}</AppContainer>;
};

export default Page;
