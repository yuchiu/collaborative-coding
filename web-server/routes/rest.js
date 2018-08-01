// get problems
// post problem
// get problem by id

import express from "express";
import bodyParser from "body-parser";

import { problemService } from "../services";

const jsonParser = bodyParser.json();

const router = express.Router();

router.get("/problems", (req, res) => {
  problemService.getProblems().then(problems => res.json(problems));
});

router.get("/problems/:id", (req, res) => {
  const { id } = req.params;
  problemService.getProblem(+id).then(problem => res.json(problem));
});

router.post("/problems", jsonParser, (req, res) => {
  problemService.addProblem(req.body).then(
    problem => {
      res.json(problem);
    },
    err => {
      res.status(400).send("problem name already exists");
    }
  );
});

export default router;
