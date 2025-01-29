import * as fs from "fs";
import * as path from "path";
import { CharSet } from "../utils/charset";
import { Podcast } from "../models/podcast-model";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { HttpStatusCode } from "../utils/http-status-code";

const filePath = path.resolve(__dirname, "../repositories/podcasts.json");

export const podcastService = async (name: string = ""): Promise<FilterPodcastModel> => {
  const data = fs.readFileSync(filePath, CharSet.UTF8);
  const podcasts: Podcast[] = JSON.parse(data);

  let filteredPodcasts = podcasts;
  if (name) {
    filteredPodcasts = podcasts.filter((podcast) => podcast.name.toLowerCase() === name.toLowerCase());
  }

  const responseFormat: FilterPodcastModel = {
    statusCode: filteredPodcasts.length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT,
    body: filteredPodcasts,
  };

  return responseFormat;
};
