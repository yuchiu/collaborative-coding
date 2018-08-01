import express from "express";
import mongoose from "mongoose";
import path from "path";

import { restRouter, indexRouter } from "./routes";

mongoose.connect(
  "mongodb://user01:user01@ds149069.mlab.com:49069/collaborative-coding",
  { useNewUrlParser: true }
);

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", indexRouter).use("/api/v1", restRouter);

app.listen(3200, () => {
  console.log("app listening on PORT 3200");
});

// kill nodemon process manually on exit
process.on("SIGINT", () => {
  console.log("Stopped nodemon manually");
  process.exit(0);
});
