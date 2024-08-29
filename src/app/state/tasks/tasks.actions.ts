import { createAction, props } from "@ngrx/store";
import { ITask } from "../../Widgets/tasks/ITask";

export const loadTasks = createAction(
  '[tasks-widget] initiate tasks',
  props<{ initialTasks: ITask[] }>()
);
export const addTask = createAction(
  '[tasks-widget] add a task',
  props<{ task: ITask }>()
);
export const removeTask = createAction(
  '[tasks-widget] remove a task',
  props<{ taskNo: number }>()
);
export const finishTask = createAction(
  '[tasks-widget] finish a task',
  props<{ taskNo: number }>()
);
