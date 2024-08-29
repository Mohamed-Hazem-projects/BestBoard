import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ITask } from './ITask';
import { Store } from '@ngrx/store';
import { finishTask, loadTasks } from '../../state/tasks/tasks.actions';
import { selectNoOfFinishedTasks, selectNoOfTasks, selectTasks } from '../../state/tasks/tasks.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasks-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  initialTasks: ITask[];
  tasks: Observable<ITask[]>;
  noOfTasks: Observable<number>;
  noOfFinishedTasks: Observable<number>;

  constructor(private store: Store) {

    this.initialTasks = [
      { task: "Integrate NgRx for State Management", taskDetails: "Create actions, reducers, effects, and selectors", finished: false },
      { task: "Implement Routing", taskDetails: "define routes, lazy load modules, and implement route guards", finished: true },
      { task: "Implement Dark Mode", taskDetails: "implement a dark mode theme for all pages", finished: true },
      { task: "Ensure Responsive Design ", taskDetails: "Make sure each page is fully responsive", finished: false },
      { task: "Optimize Application Performance", taskDetails: "Analyze the application's performance using Angular's built-in tools", finished: false }
    ]

    store.dispatch(loadTasks({ initialTasks: this.initialTasks }))
    this.tasks = this.store.select(selectTasks)
    this.noOfTasks = this.store.select(selectNoOfTasks)
    this.noOfFinishedTasks = this.store.select(selectNoOfFinishedTasks)
  }
  finishTask(index: number) {
    this.store.dispatch(finishTask({ taskNo: index }))
  }
}
