import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITasksState } from "./tasks.state";

export const selectTasksFromState = createFeatureSelector<ITasksState>('tasks')

export const selectTasks = createSelector(
  selectTasksFromState,
  (state: ITasksState) => state.tasks
)

export const selectNoOfTasks = createSelector(
  selectTasksFromState,
  (state: ITasksState) => state.noOfTasks
)
export const selectNoOfFinishedTasks = createSelector(
  selectTasksFromState,
  (state: ITasksState) => state.noOfFinishedTasks
)



