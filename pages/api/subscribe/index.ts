import { NextApiRequest, NextApiResponse } from "next";

const { SENDINBLUE_API_KEY } = process.env;
if (!SENDINBLUE_API_KEY) {
  throw new Error("SENDINBLUE_API_KEY is not set");
}

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (_req.method === "POST") {
      const { email } = _req.body;
      console.log("toto", email);
      await fetch("https://api.sendinblue.com/v3/contacts", {
        method: "POST",
        body: JSON.stringify({ email, listIds: [3] }),
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "api-key": SENDINBLUE_API_KEY,
        },
      }).then((response) => response.json());
      res.status(200).json({ ..._req.body });
    } else {
      res.status(501).json({ statusCode: 501, message: "Not implemented" });
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: "error" });
  }
};

export default handler;
