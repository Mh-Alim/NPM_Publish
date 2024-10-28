import express, { Request, Response } from "express";
import { signInInput } from "@mh-alim/zod-inference";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/signIn", (req: any, res: any) => {
  console.log(req.body);
  const parsedRes = signInInput.safeParse(req.body);
  if (!parsedRes.success) {
    return res.status(200).json({
      message: parsedRes.error.name,
    });
  }
  return res.json({ message: "User signed in successfully" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
