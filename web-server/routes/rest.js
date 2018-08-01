// get problems
// post problem
// get problem by id

import express from "express";
import { problemService } from "../services";

const router = express.Router();

router.get("/problems", (req, res) => {
  problemService.getProblems().then(problems => res.json(problems));
});

export default router;
