import { IncomingMessage } from "http";
import { repoPodcasts } from "../repositories/podcasts-repository";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { HttpStatusCode } from "../utils/http-status-code";

export const filterEpisodesService = async (podcastName: IncomingMessage): Promise<FilterPodcastModel> => {
  let responseFormat: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName.url?.split("?name=")[1];
  const data = await repoPodcasts(queryString);

  responseFormat.statusCode = data.length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT;

  responseFormat.body = data;

  return responseFormat;
};
