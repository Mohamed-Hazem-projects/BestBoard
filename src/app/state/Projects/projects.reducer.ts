import { createReducer, on } from "@ngrx/store";
import { IProjectsState } from "./projects.state";
import { addProject, editProject, loadProjects, removeProject } from "./projects.actions";

export const initialState: IProjectsState = {
  projects: []
}

export const projectsReducer = createReducer(

  initialState,

  on(loadProjects, (state, { initialProjects }) => ({
    ...state,
    projects: initialProjects
  })),

  on(addProject, (state, { project }) => ({
    ...state,
    projects: [...state.projects, project]
  })),

  on(removeProject, (state, { projectNo }) => ({
    ...state,
    projects: state.projects.filter((_, i) => i !== projectNo)
  })),

  on(editProject, (state, { newProject, projectNo }) => ({
    ...state,
    projects: state.projects.map((project, i) => i === projectNo ? newProject : project)
  }))
)
