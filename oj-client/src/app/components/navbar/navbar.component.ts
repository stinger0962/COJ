import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { InputService } from '../../services/input.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  title = "COOJ";
  difficulties: string[] = ['easy', 'medium', 'hard', 'super' ];
  selectedDiff: string = '';
  searchBox: FormControl = new FormControl();
  subscription: Subscription;
  constructor(private input: InputService,
              private router: Router) { }

  // subscribe to searchbox value change, on change, call input service
  ngOnInit() {
    this.subscription = this.searchBox.valueChanges.debounceTime(200)
                        .subscribe(terms => this.input.changeInput(terms));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filterDiff(diff: string): void {
    // trigger difficulty on/off
    this.selectedDiff = this.selectedDiff === diff ? '' : diff;
    // console.log("selected diff: " + this.selectedDiff);
    this.input.changeDifficulty(this.selectedDiff);
  }

}
