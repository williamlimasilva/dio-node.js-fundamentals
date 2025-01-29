import * as http from "http";

import { getPodcasts, getPodcastsFiltered } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import { HttpStatusCode } from "./utils/http-status-code";
import { HttpContentType } from "./utils/http-content-type";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
  //queryString
  const baseUrl = request.url?.split("?")[0];

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getPodcasts(request, response);
  } else if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getPodcastsFiltered(request, response);
  } else {
    response.writeHead(HttpStatusCode.NOT_FOUND, { "Content-Type": HttpContentType.APPLICATION_JSON });
    response.end(JSON.stringify({ message: "Route not found" }));
  }
};
