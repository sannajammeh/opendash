import { notFound } from "next/navigation";

interface Page {
  displayName: string;
  id: number;
  icon: string;
}

export interface Team {
  displayName: string;
  id: number;

  gradient: string;

  pages: Pick<Page, "displayName" | "id">[];
}

export const teams: Team[] = [
  {
    displayName: "Dragonsbreath",
    id: 1,
    gradient: "from-pink-500 via-red-500 to-yellow-500",
    pages: [
      {
        displayName: "Bookings",
        id: 1,
      },
      {
        displayName: "Stripe",
        id: 2,
      },
    ],
  },

  {
    displayName: "Transportproffen",
    id: 2,
    gradient: "from-green-500 via-blue-500 to-purple-500",
    pages: [
      {
        displayName: "Earnings",
        id: 1,
      },
      {
        displayName: "Users",
        id: 2,
      },
    ],
  },
];

export const getPage = async (appId: string, pageId: string) => {
  const app = await teams.find((team) => team.id === Number(appId));
  if (!app) {
    return notFound();
  }

  const page = await app.pages.find((page) => page.id === Number(pageId));
  if (!page) {
    return notFound();
  }

  return page;
};
