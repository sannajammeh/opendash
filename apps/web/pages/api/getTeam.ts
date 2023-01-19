import { NextApiHandler } from "next";
import { teams } from "../../app/(dashboard)/apps/data";

const getTeam: NextApiHandler = (req, res) => {
  const { team } = req.query;
  return res.json(teams.find((t) => t.id === Number(team)) || null);
};

export default getTeam;
