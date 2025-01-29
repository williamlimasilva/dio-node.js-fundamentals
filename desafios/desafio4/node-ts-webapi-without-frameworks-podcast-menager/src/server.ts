import * as http from "http";
import { app } from "./app";

const server = http.createServer(app);

const port = process.env.PORT || 3636;
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
