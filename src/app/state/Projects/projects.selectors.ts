import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProjectsState } from "./projects.state";

export const selectTasksFromState = createFeatureSelector<IProjectsState>('projects')

export const selectProjects = createSelector(
  selectTasksFromState,
  (state: IProjectsState) => state.projects
)




