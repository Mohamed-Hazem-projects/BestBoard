import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProject } from '../../state/Projects/projects.state';
import { loadProjects } from '../../state/Projects/projects.actions';
import { Observable } from 'rxjs';
import { selectProjects } from '../../state/Projects/projects.selectors';
import { CommonModule } from '@angular/common';
import { DeleteProjectComponent } from "./delete-project/delete-project.component";
import { addProjectComponent } from './add-project/add-project.component';

@Component({
  selector: 'projects-widget',
  standalone: true,
  imports: [CommonModule, DeleteProjectComponent, addProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  initialProjects: IProject[];
  team: string[];
  projects: Observable<IProject[]>;

  addProjectFlag: Boolean;
  editedProject: IProject | undefined;
  editedProjectIndex: number;
  deleteProjectFlag: Boolean;
  projectToBeDeleted: { project: string, index: number };

  constructor(private store: Store) {
    this.team = [
      "assets/avatar1.png", "assets/avatar2.png", "assets/avatar3.png",
      "assets/avatar4.png", "assets/avatar5.png", "assets/avatar6.png"
    ]
    this.initialProjects = [
      {
        name: "E-commerce App Development", client: "AFS Company", Profit: 2500, status: "In Progress"
        , team: [this.team[0], this.team[1], this.team[2], this.team[3], this.team[5]]
      },
      {
        name: "Website Optimization", client: "Tech Solutions Ltd.", Profit: 1400, status: "In Progress"
        , team: [this.team[1], this.team[2], this.team[5]]
      },
      {
        name: "Data Analytics Dashboard", client: "Data Insights Co.", Profit: 850, status: "Pending"
        , team: [this.team[0], this.team[3]]
      },
      {
        name: "Custom CRM System", client: "LMV Corporation", Profit: 2250, status: "Rejected"
        , team: [this.team[0], this.team[1], this.team[2], this.team[3], this.team[4], this.team[5]]
      },
      {
        name: "E-learning Platform	", client: "Academy Learning", Profit: 700, status: "Completed"
        , team: [this.team[0]]
      },
      {
        name: "AI Chatbot Integration", client: "AI Solutions Ltd.", Profit: 1800, status: "Completed"
        , team: [this.team[1], this.team[2], this.team[3], this.team[4]]
      }]

    this.store.dispatch(loadProjects({ initialProjects: this.initialProjects }))
    this.projects = this.store.select(selectProjects)

    this.addProjectFlag = false;
    this.editedProject = undefined;
    this.editedProjectIndex = 99;
    this.deleteProjectFlag = false;
    this.projectToBeDeleted = { project: "", index: 0 }
  }

  toggleAddProject(selectedProject: IProject | undefined, index: number) {
    this.addProjectFlag = !this.addProjectFlag;
    this.editedProject = this.addProjectFlag ? selectedProject : undefined;
    this.editedProjectIndex = this.addProjectFlag ? index : 99;
  }

  closeAddProject() {
    this.editedProject = undefined;
    this.addProjectFlag = false;
  }

  openDeleteProject(project: string, index: number) {
    this.projectToBeDeleted.index = index;
    this.projectToBeDeleted.project = project;
    this.deleteProjectFlag = !this.deleteProjectFlag;
  }

  closeDeleteProject() {
    this.deleteProjectFlag = false;
  }
}
