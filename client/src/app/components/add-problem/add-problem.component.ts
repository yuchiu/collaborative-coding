import { Component, OnInit } from "@angular/core";
import { Problem } from "../../models/problem.model";

@Component({
  selector: "app-add-problem",
  templateUrl: "./add-problem.component.html",
  styleUrls: ["./add-problem.component.css"]
})
export class AddProblemComponent implements OnInit {
  public difficulties = ["easy", "medium", "hard", "super"];

  newProblem: Problem;
  constructor() {}

  ngOnInit() {}
}
