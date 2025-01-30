import fs from "fs/promises";
import path from "path";
import { ClubModel } from "../models/club-model";
import { Charset } from "../utils/charset-enum";
import { Database } from "../utils/database-enums";

const DATA_BASE = path.join(__dirname, Database.CLUBS);

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile(DATA_BASE, Charset.UTF8);
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs;
};
