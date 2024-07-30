import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TargetSettingsModel } from '../../../Models/target-settings-model';

@Component({
  selector: 'targets-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './targets-settings.component.html',
  styleUrl: './targets-settings.component.scss'
})
export class TargetsSettingsComponent {


  @Output() Submitted: EventEmitter<TargetSettingsModel> = new EventEmitter<TargetSettingsModel>();
  @Output() Close: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  getFormData(form: NgForm) {
    this.Submitted.emit({
      first: {
        Name: form.value.firstTargetName,
        Value: form.value.firstTargetValue,
        Percentage: form.value.firstTargetPerc
      },
      second: {
        Name: form.value.secondTargetName,
        Value: form.value.secondTargetValue,
        Percentage: form.value.secondTargetPerc
      },
      third: {
        Name: form.value.thirdTargetName,
        Value: form.value.thirdTargetValue,
        Percentage: form.value.thirdTargetPerc
      }
    })
    this.Close.emit(false)
  }
  CloseSettings() {
    this.Close.emit(false)
  }
}
