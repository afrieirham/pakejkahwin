import { ServiceResponse } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

const apiUrl = "https://api.pakejkahwin.com/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceResponse[]>,
) {
  const data = await fetch(`${apiUrl}`).then((r) => r.json());
  res.status(200).json(data as ServiceResponse[]);
}
