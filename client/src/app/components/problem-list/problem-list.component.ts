import { Component, OnInit, Inject } from "@angular/core";
import { Subscription } from "rxjs";

import { Problem } from "../../models/problem.model";

@Component({
  selector: "app-problem-list",
  templateUrl: "./problem-list.component.html",
  styleUrls: ["./problem-list.component.css"]
})
export class ProblemListComponent implements OnInit {
  problems: Problem[] = [];
  subscriptionProblems: Subscription;

  constructor(@Inject("data") private data) {}

  ngOnInit() {
    this.getProblems();
  }
  getProblems(): void {
    this.subscriptionProblems = this.data
      .getProblems()
      .subscribe(problems => (this.problems = problems));
  }
}
