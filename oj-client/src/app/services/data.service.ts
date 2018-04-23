import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Problem } from '../models/problem.model'
import { PROBLEMS } from '../mock-problems';

@Injectable()
export class DataService {

  problems: Problem[] = PROBLEMS;
  // BehaviorSubject needs an initial value --> empty list
  private _problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private httpClient: HttpClient) { }

  // caller can subscribe to get problems
  getProblems(): Observable<Problem[]> {
    this.httpClient.get('api/v1/problems')
    .toPromise()
    .then((res: any) => {
      this._problemSource.next(res);
    })
    .catch(this.handleError);
    // hide Observer from caller
    return this._problemSource.asObservable();
  }


  getProblem(id: number): Promise<Problem> {
    return this.httpClient.get(`api/v1/problems/${id}`)
    .toPromise()
    .then((res: any) => res)
    .catch(this.handleError);
  }

  addProblem(problem: Problem) {
    // auto generate problem id
    const options = { headers: new HttpHeaders({
            'Content-type': 'application/json' })};
    this.httpClient.post('api/v1/problems', problem, options)
    .toPromise()
    .then((res: any) => {
      // update problem list
      this.getProblems();
      return res;
    })
    .catch(this.handleError);
  }


  buildAndRun(data) : Promise<any> {
    const options = { headers: new HttpHeaders({
            'Content-type': 'application/json' })};
    return this.httpClient.post('api/v1/build_and_run', data, options)
           .toPromise()
           .then(res => {
             console.log('DS Build_And_Run return: ' + res);
             return res;
           })
           .catch(this.handleError);

  }


  private handleError(err: any): Promise<any> {
    // console.error('an error occured, info:', err.stack)
    return Promise.reject(err.body || err);
  }

}
