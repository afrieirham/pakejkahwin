import { ServiceResponse } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
import queryString from "query-string";

const apiUrl = "https://api.pakejkahwin.com/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceResponse[]>,
) {
  const query = req.query;
  const url = queryString.stringifyUrl(
    { url: apiUrl, query },
    { skipNull: true, skipEmptyString: true },
  );

  const data = await fetch(url).then((r) => r.json());
  res.status(200).json(data as ServiceResponse[]);
}
