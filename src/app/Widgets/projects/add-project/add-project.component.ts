import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DragDirective } from '../../../Directives/drag.directive';
import { Store } from '@ngrx/store';
import { IProject } from '../../../state/Projects/projects.state';
import { CommonModule } from '@angular/common';
import { addProject, editProject } from '../../../state/Projects/projects.actions';

@Component({
  selector: 'add-edit-project',
  standalone: true,
  imports: [FormsModule, DragDirective, CommonModule],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class addProjectComponent implements AfterViewInit {

  project: IProject;
  team: string[];
  teamIndexArr: number[];
  @Input() projectToEdit!: IProject | undefined;
  @Input() index!: number;
  @Output() Close: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('form') form!: NgForm;

  constructor(private store: Store) {
    this.project = {} as IProject
    this.team = [
      "assets/avatar1.png", "assets/avatar2.png", "assets/avatar3.png",
      "assets/avatar4.png", "assets/avatar5.png", "assets/avatar6.png"
    ]
    this.teamIndexArr = [...Array(this.team.length).keys()]
  }
  ngAfterViewInit(): void {
    if (this.projectToEdit) {
      setTimeout(() => {
        this.form.setValue({
          name: this.projectToEdit?.name,
          client: this.projectToEdit?.client,
          Profit: this.projectToEdit?.Profit,
          status: this.projectToEdit?.status,
          team: {
            "0": this.projectToEdit?.team.includes(this.team[0]),
            "1": this.projectToEdit?.team.includes(this.team[1]),
            "2": this.projectToEdit?.team.includes(this.team[2]),
            "3": this.projectToEdit?.team.includes(this.team[3]),
            "4": this.projectToEdit?.team.includes(this.team[4]),
            "5": this.projectToEdit?.team.includes(this.team[5]),
          }
        })
      }, 1);

    }
  }
  getFormData(form: NgForm) {
    this.project.Profit = form.value.Profit
    this.project.client = form.value.client
    this.project.name = form.value.name
    this.project.status = form.value.status
    let finalTeam: string[] = [];
    for (const [index, checked] of Object.entries(form.value.team)) {
      if (checked) {
        finalTeam.push(this.team[+index])
      }
    }
    this.project.team = finalTeam;
    if (this.projectToEdit) {
      this.store.dispatch(editProject({ projectNo: this.index, newProject: this.project }))
    }
    else {
      this.store.dispatch(addProject({ project: this.project }))
    }

    this.Close.emit()
  }
  CloseSettings() {
    this.Close.emit()
  }
}
