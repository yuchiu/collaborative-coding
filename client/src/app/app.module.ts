import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { routing } from "./app.routes";
import { DataService } from "./services/data.service";
import { AppComponent } from "./app.component";
import { ProblemListComponent } from "./components/problem-list/problem-list.component";
import { ProblemDetailComponent } from "./components/problem-detail/problem-detail.component";
import { AddProblemComponent } from "./components/add-problem/add-problem.component";

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    AddProblemComponent
  ],
  imports: [BrowserModule, routing, FormsModule],
  providers: [{ provide: "data", useClass: DataService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
