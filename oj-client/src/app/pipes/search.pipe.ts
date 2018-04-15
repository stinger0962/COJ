import { Pipe, PipeTransform } from '@angular/core';

import { Problem } from '../models/problem.model'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  // add a filter to problems on search term and an optional difficulty
  transform(problems: Problem[], terms: string, difficulty: string): Problem[] {
    console.log(`term: ${terms}, diff: ${difficulty} `);
    if (difficulty != '') {
      return problems.filter(
        problem => { return (problem.difficulty === difficulty) && (problem.name.toLowerCase().includes(terms) || problem.desc.toLowerCase().includes(terms)); }
      );
    } else {
      return problems.filter(
        problem => { return problem.name.toLowerCase().includes(terms) || problem.desc.toLowerCase().includes(terms); }
      );
    }

  }

}
