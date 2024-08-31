import { createReducer, on } from "@ngrx/store";
import { ITasksState } from "./tasks.state";
import { addTask, finishTask, loadTasks, removeTask } from "./tasks.actions";

export const initialState: ITasksState = {
  tasks: [],
  noOfTasks: 5,
  noOfFinishedTasks: 2
}

export const tasksReducer = createReducer(

  initialState,

  on(loadTasks, (state, { initialTasks }) => ({
    ...state,
    tasks: initialTasks
  })),

  on(addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
    noOfTasks: state.noOfTasks + 1
  })),

  on(removeTask, (state, { taskNo }) => ({
    ...state,
    noOfTasks: state.noOfTasks - 1,
    noOfFinishedTasks:
      state.tasks[taskNo].finished ? state.noOfFinishedTasks - 1 : state.noOfFinishedTasks,
    tasks: state.tasks.filter((_, i) => i !== taskNo)
  })),
  on(finishTask, (state, { taskNo }) => ({
    ...state,
    tasks: state.tasks.map((task, i) => {
      return i === taskNo ? { ...task, finished: !task.finished } : task
    }),
    noOfFinishedTasks:
      state.tasks[taskNo].finished ? state.noOfFinishedTasks - 1 : state.noOfFinishedTasks + 1
  }))
)
