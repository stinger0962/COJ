import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';


const DEFAULT_PROBLEM: Problem = Object.freeze({
  id: 0,
  name: '',
  desc: '',
  difficulty: 'easy'
})

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);
  difficulties: string[] = ['easy', 'medium', 'hard', 'super' ];

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
  }

  addProblem() {
    this.dataService.addProblem(this.newProblem);

    // reset newProblem instance to avoid overwriting the lastest added problem next time addProblem() is called
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    // redirect to problem list component

    this.router.navigateByUrl('/problems');
  }

}
