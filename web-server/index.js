import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("hello express ");
});

app.listen(3000, () => {
  console.log("app listening on 3000");
});
