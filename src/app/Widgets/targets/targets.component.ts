import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TargetsSettingsComponent } from './targets-settings/targets-settings.component';
import { CommonModule } from '@angular/common';
import { TargetSettingsModel } from '../../Models/target-settings-model';

@Component({
  selector: 'targets-widget',
  standalone: true,
  imports: [TargetsSettingsComponent, CommonModule],
  templateUrl: './targets.component.html',
  styleUrl: './targets.component.scss'
})
export class TargetsComponent {
  animate: boolean = false;
  settingsOpen: Boolean = false;
  Targets: TargetSettingsModel;
  @ViewChild('green') green!: ElementRef;

  constructor() {
    this.Targets = {
      first: {
        Name: 'Money Earned',
        Value: '3520',
        Percentage: "80"
      },
      second: {
        Name: 'Clients Satisfied',
        Value: '14',
        Percentage: "40"
      },
      third: {
        Name: 'Projects Completed',
        Value: '27',
        Percentage: "60"
      }
    }
  }

  @HostListener('document:scroll')
  animationOnScroll() {

    //console.log(window.innerHeight) this is the window's height
    //window.scrollY this is how much you scrolled
    //console.log(this.green.nativeElement.getBoundingClientRect().y)
    //this if how far the element is from the top of the screen

    if (this.animate == false && window.innerHeight > this.green.nativeElement.getBoundingClientRect().y) {
      this.animate = true;
    }
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
