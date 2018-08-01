import express from "express";
import mongoose from "mongoose";

import { restRouter } from "./routes";

mongoose.connect(
  "mongodb://user01:user01@ds149069.mlab.com:49069/collaborative-coding"
);

const app = express();

app.use("/api/v1", restRouter);

app.listen(3200, () => {
  console.log("app listening on PORT 3200");
});

// kill nodemon process manually on exit
process.on("SIGINT", () => {
  console.log("Stopped nodemon manually");
  process.exit(0);
});
