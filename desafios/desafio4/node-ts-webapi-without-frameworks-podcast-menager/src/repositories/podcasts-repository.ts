import fs from "fs/promises";
import path from "path";
import { Podcast } from "../models/podcast-model";
import { CharSet } from "../utils/charset";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcasts = async (name?: string): Promise<Podcast[]> => {
  const rawData = await fs.readFile(pathData, CharSet.UTF8);
  let jsonFile = JSON.parse(rawData);

  if (name) {
    const data = jsonFile.filter((podcast: Podcast) => podcast.name === name);
  }

  return jsonFile;
};
