import { IncomingMessage, ServerResponse } from "http";
import { podcastService } from "../services/podcasts-service";
import { HttpContentType } from "../utils/http-content-type";
import { FilterPodcastModel } from "../models/filter-podcast-model";

export const getPodcasts = async (request: IncomingMessage, response: ServerResponse) => {
  const content: FilterPodcastModel = await podcastService();

  response.writeHead(content.statusCode, { "Content-Type": HttpContentType.APPLICATION_JSON });
  response.write(JSON.stringify(content.body));
  response.end();
};

export const getPodcastsFiltered = async (request: IncomingMessage, response: ServerResponse) => {
  const content: FilterPodcastModel = await podcastService(request.url?.split("?name=")[1]);
  response.writeHead(content.statusCode, { "Content-Type": HttpContentType.APPLICATION_JSON });
  response.write(JSON.stringify(content.body));
  response.end();
};
