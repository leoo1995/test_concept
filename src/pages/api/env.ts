// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    COLOR: process.env.COLOR,
    TITLE: process.env.TITLE,
    NEXT_PUBLIC_PARAGRAPH: process.env.NEXT_PUBLIC_PARAGRAPH,
    IMAGE_DOMAIN: process.env.IMAGE_DOMAIN,
  });
}
