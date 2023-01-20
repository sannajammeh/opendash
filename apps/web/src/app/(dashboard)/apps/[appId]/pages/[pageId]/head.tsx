import { getPage } from "src/app/(dashboard)/apps/data";
import { NextAppLayout } from "next-types";

const Head: NextAppLayout<{}, { appId: string; pageId: string }> = async ({
  params,
}) => {
  const page = await getPage(params.appId, params.pageId);
  return (
    <>
      <title>{`${page.displayName} | OpenDash`}</title>
    </>
  );
};

export default Head;
