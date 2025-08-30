import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

// load env
dotenv.config();
const PORT = process.env.PORT || 4000;
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

// TODO: import and use route modules

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});