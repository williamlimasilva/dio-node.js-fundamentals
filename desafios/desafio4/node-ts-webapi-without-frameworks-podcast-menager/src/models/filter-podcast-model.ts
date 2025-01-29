import { HttpStatusCode } from "../utils/http-status-code";
import { Podcast } from "./podcast-model";

export interface FilterPodcastModel {
  statusCode: number;
  body: Podcast[];
}
