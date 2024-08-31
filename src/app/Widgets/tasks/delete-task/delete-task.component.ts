import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { removeTask } from '../../../state/tasks/tasks.actions';

@Component({
  selector: 'delete-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.scss'
})
export class DeleteTaskComponent {
  @Input() task!: { task: string, index: number };
  @Output() Close: EventEmitter<void> = new EventEmitter<void>();
  animate: Boolean;
  changeIcon: Boolean;
  runOnce: Boolean;

  constructor(private store: Store) {
    this.animate = false;
    this.changeIcon = false;
    this.runOnce = false;
  }

  close(ev: MouseEvent) {
    ev.stopPropagation();
    this.Close.emit();
  }
  startAnimation() {
    //next part is just to animate the icon then delete the task
    if (!this.runOnce) {
      this.runOnce = true;
      this.animate = true;
      setTimeout(() => {
        this.changeIcon = true;
        setTimeout(() => {
          this.animate = false;
          setTimeout(() => {
            this.deleteTask()
          }, 250);
        }, 5);
      }, 150);
    }
  }
  deleteTask() {
    this.store.dispatch(removeTask({ taskNo: this.task.index }))
    this.Close.emit();
  }
}
