import { Injectable } from "@angular/core";
import { Problem } from "../models/problem.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private _problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private httpClient: HttpClient) {}

  getProblems(): Observable<Problem[]> {
    this.httpClient
      .get("api/v1/problems")
      .toPromise()
      .then((res: any) => {
        this._problemSource.next(res);
      })
      .catch(this.handleError);
    return this._problemSource.asObservable();
  }
  getProblem(id: number): Promise<Problem> {
    return this.httpClient
      .get(`api/v1/problem/${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }
  addProblem(problem: Problem): Promise<Problem> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.httpClient
      .post("api/v1/problems", problem, httpOptions)
      .toPromise()
      .then(res => {
        this.getProblems();
        return res;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error("an error occurred", error);
    return Promise.reject(error.body || error);
  }
}
