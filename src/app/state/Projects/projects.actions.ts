import { createAction, props } from "@ngrx/store";
import { IProject } from "./projects.state";

export const loadProjects = createAction(
  '[projects-widget] initiate projects',
  props<{ initialProjects: IProject[] }>()
);
export const addProject = createAction(
  '[projects-widget] add a project',
  props<{ project: IProject }>()
);
export const removeProject = createAction(
  '[projects-widget] remove a project',
  props<{ projectNo: number }>()
);
export const editProject = createAction(
  '[projects-widget] edit a project',
  props<{ newProject: IProject, projectNo: number }>()
);

