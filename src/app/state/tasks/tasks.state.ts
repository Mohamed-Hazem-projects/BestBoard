import { ITask } from "../../Widgets/tasks/ITask";

export interface ITasksState {
  tasks: ITask[];
  noOfTasks: number;
  noOfFinishedTasks: number;
}
