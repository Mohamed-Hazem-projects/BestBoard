import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TargetsSettingsComponent } from './targets-settings/targets-settings.component';
import { CommonModule } from '@angular/common';
import { TargetSettingsModel } from '../../Models/target-settings-model';
import { AppearDirective } from '../../Directives/appear.directive';

@Component({
  selector: 'targets-widget',
  standalone: true,
  imports: [TargetsSettingsComponent, CommonModule, AppearDirective],
  templateUrl: './targets.component.html',
  styleUrl: './targets.component.scss'
})
export class TargetsComponent {
  animate: boolean = false;
  settingsOpen: Boolean = false;
  Targets: TargetSettingsModel;

  constructor() {
    this.Targets = {
      first: {
        Name: 'Money Earned',
        Value: '3520',
        Percentage: "100"
      },
      second: {
        Name: 'Clients Satisfied',
        Value: '14',
        Percentage: "100"
      },
      third: {
        Name: 'Projects Completed',
        Value: '27',
        Percentage: "100"
      }
    }
  }

  animationOnScroll() {
    this.Targets.first.Percentage = "80"
    this.Targets.second.Percentage = "40"
    this.Targets.third.Percentage = "60"
  }
  ToggleSettings() {
    this.settingsOpen = !this.settingsOpen
  }

  CloseSettings(ev: Boolean) {
    this.settingsOpen = ev
  }

  changeSettings(event: TargetSettingsModel) {
    for (const [keyx, valuex] of Object.entries(this.Targets)) {
      for (let [keyy, prop] of Object.entries(valuex)) {
        const firstkey = keyx as keyof TargetSettingsModel
        const secondkey = keyy as keyof TargetSettingsModel[typeof firstkey]
        if (event[firstkey][secondkey] != "") {
          this.Targets[firstkey][secondkey] = event[firstkey][secondkey]
        }
      }
    }
  }
}
