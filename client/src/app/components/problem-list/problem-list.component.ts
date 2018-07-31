import { Component, OnInit } from "@angular/core";

import { Problem } from "../../models/problem.model";

const PROBLEMS: Problem[] = [
  {
    id: 1,
    name: "fortnite",
    desc: "aloha guys",
    difficulty: "easy"
  },
  {
    id: 2,
    name: "new problem2",
    desc: "aloha alohaalohaaloha",
    difficulty: "medium"
  },
  {
    id: 3,
    name: "new problem3",
    desc: "aloha guysguysguys",
    difficulty: "hard"
  }
];

@Component({
  selector: "app-problem-list",
  templateUrl: "./problem-list.component.html",
  styleUrls: ["./problem-list.component.css"]
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];

  constructor() {}

  ngOnInit() {
    this.problems = PROBLEMS;
  }
}
