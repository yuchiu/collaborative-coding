import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";

import { restRouter, indexRouter } from "./routes";

mongoose.connect(
  "mongodb://user01:user01@ds149069.mlab.com:49069/collaborative-coding",
  { useNewUrlParser: true }
);
// remove cors in production env
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200
};
const app = express();

// remove cors in production env
app.use(cors(corsOptions));
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
