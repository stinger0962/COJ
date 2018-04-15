import { Component, OnInit, OnDestroy } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';
import { InputService } from '../../services/input.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit, OnDestroy {

  subscriptionProblems: Subscription;
  subscriptionSearchTerm: Subscription;
  subscriptionDifficulty: Subscription;
  problems: Problem[];
  searchTerm: string = '';
  difficulty: string = '';

  constructor(private dataService: DataService,
              private inputService: InputService) { }

  // subscribe to both problems and filter conditions
  ngOnInit() {
    this.getProblems();
    this.getSearchTerm();
    this.getDifficulty();
  }

  ngOnDestroy() {
      this.subscriptionProblems.unsubscribe();
  }

  // service getProblems return Observable
  getProblems() {
    this.subscriptionProblems = this.dataService.getProblems()
    .subscribe(problems => this.problems = problems);
  }

  getSearchTerm() {
    this.subscriptionSearchTerm = this.inputService.getInput()
    .subscribe(terms => this.searchTerm = terms);
  }

  getDifficulty() {
    this.subscriptionDifficulty = this.inputService.getDifficulty()
    .subscribe(difficulty => this.difficulty = difficulty);
  }

}
