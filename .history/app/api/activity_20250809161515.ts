import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.status(200).json({ message: "Activity fetched" });
  }

  if (req.method === "POST") {
    return res.status(201).json({ message: "Activity created" });
  }

  return res.status(405).end(); // Method Not Allowed
}
