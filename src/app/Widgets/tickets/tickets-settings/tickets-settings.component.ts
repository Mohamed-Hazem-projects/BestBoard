import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DragDirective } from '../../../Directives/drag.directive';
import { TicketSettingsModel } from '../../../Models/ticket-settings-model';

@Component({
  selector: 'tickets-settings',
  standalone: true,
  imports: [FormsModule, DragDirective],
  templateUrl: './tickets-settings.component.html',
  styleUrl: './tickets-settings.component.scss'
})
export class TicketsSettingsComponent {

  @Output() Submitted: EventEmitter<TicketSettingsModel> = new EventEmitter<TicketSettingsModel>();
  @Output() Close: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  getFormData(form: NgForm) {
    this.Submitted.emit({
      Total: form.value.Total,
      Pending: form.value.Pending,
      Closed: form.value.Closed,
      Deleted: form.value.Deleted
    })
    this.Close.emit(false)
  }
  CloseSettings() {
    this.Close.emit(false)
  }
}
