import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class InputService {
  // BehaviorSubject needs an initialized value
  private inputSubject$ = new BehaviorSubject<string>('');
  private diffSubject$ = new BehaviorSubject<string>('');

  constructor() { }

  // push data to stream
  changeInput(term: string): void {
    this.inputSubject$.next(term);
  }

  changeDifficulty(diff: string): void {
    this.diffSubject$.next(diff);
  }

  // return as Observable
  getInput(): Observable<string> {
    return this.inputSubject$.asObservable();
  }

  getDifficulty(): Observable<string> {
    return this.diffSubject$.asObservable();
  }

}
