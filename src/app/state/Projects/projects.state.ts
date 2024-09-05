export interface IProjectsState {
  projects: IProject[];
}
export interface IProject {
  name: string;
  client: string;
  Profit: number;
  team: string[];
  status: "In Progress" | "Completed" | "Pending" | "Rejected"
}
