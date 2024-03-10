import { NextApiRequest, NextApiResponse } from "next";
import { tokens } from "@token-icons/core";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(tokens);
}
