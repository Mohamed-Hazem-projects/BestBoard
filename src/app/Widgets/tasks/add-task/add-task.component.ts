import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TargetSettingsModel } from '../../../Models/target-settings-model';
import { DragDirective } from '../../../Directives/drag.directive';
import { Store } from '@ngrx/store';
import { ITask } from '../ITask';
import { addTask } from '../../../state/tasks/tasks.actions';

@Component({
  selector: 'add-task',
  standalone: true,
  imports: [FormsModule, DragDirective],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class addTaskComponent {

  task: ITask;
  @Output() Close: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store: Store) {
    this.task = {} as ITask
  }
  getFormData(form: NgForm) {

    if (form.value.task !== "") {
      this.task = {
        task: form.value.task,
        taskDetails: form.value.taskDetails,
        finished: false
      }
      this.store.dispatch(addTask({ task: this.task }))
    }
    this.Close.emit()
  }
  CloseSettings() {
    this.Close.emit()
  }
}
