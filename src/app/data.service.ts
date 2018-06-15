import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

// created from ng generate service data 


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject(['The initial goal', 'Another silly lifegoal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal); 
  }
}
