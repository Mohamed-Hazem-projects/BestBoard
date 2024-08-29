import { IUserListState } from "./userList/usersList.state";
import { ITasksState } from "./tasks/tasks.state";

export interface AppState {
  usersList: IUserListState
  tasks: ITasksState
}
