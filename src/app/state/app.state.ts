import { IUserListState } from "./userList/usersList.state";
import { ITasksState } from "./tasks/tasks.state";
import { IProjectsState } from "./Projects/projects.state";

export interface AppState {
  tasks: ITasksState
  projects: IProjectsState
  usersList: IUserListState
}
