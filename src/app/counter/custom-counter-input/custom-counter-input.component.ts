import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeTitle, customIncrement } from '../state/counter.actions';
import { getTitle } from '../state/counter.selectors';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value: number =0;
  title$!: Observable<string>;
  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit(): void {
    this.title$ = this.store.select(getTitle);
  }

  onCustomIncrement(){
    this.store.dispatch(customIncrement({value: this.value}));
    this.value=0;
  }

  changeTitle(){
    this.store.dispatch(changeTitle());
  }
}
