import { prismaEdge } from "db/edge";
export const getEdgeSession = async () => {
  const session = await prismaEdge.session.findFirst({
    where: {
      userId: 1,
    },
    include: {
      user: true,
    },
  });
  return session;
};
