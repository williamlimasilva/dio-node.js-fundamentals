import cors from "cors";
import express from "express";
import router from "../routes/routes";

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", router);

  const corsOptions = {
    origin: ["*"],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS", "HEAD"],
  };

  app.use(cors(corsOptions));

  return app;
}

export default createApp;
