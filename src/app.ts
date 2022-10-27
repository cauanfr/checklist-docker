import express, { json, Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entities/User";

const app = express();

app.use(json());

app.get("/users", async (req: Request, res: Response) => {
  const userRepo = AppDataSource.getRepository(User);

  return res.status(200).json({ user: await userRepo.find() });
});

app.post("/users/register", async (req: Request, res: Response) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = userRepo.create({ ...req.body });

  await userRepo.save(user);

  return res.status(201).json({ user });
});

export default app;
