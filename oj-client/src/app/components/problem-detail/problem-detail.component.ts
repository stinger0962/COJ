import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  problem: Problem;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getProblem();
  }

  // subscribe to route.params, call getProblem on new params
  // route.params : Observable
  getProblem() {
    this.route.params.subscribe(params => {
      this.dataService.getProblem(+params['id'])
      .then(problem => this.problem = problem)
      .catch(err => Promise.reject(err));
    });
  }

  goBack() {
    this.location.back();
  }

}
