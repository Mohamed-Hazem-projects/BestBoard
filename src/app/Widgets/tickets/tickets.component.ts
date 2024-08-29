import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TicketsSettingsComponent } from './tickets-settings/tickets-settings.component';
import { CommonModule } from '@angular/common';
import { TicketSettingsModel } from '../../Models/ticket-settings-model';
import { AppearDirective } from '../../Directives/appear.directive';

@Component({
  selector: 'tickets-widget',
  standalone: true,
  imports: [TicketsSettingsComponent, CommonModule, AppearDirective],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {

  settingsOpen: Boolean = false;
  tickets: TicketSettingsModel;
  ticketsFinal: TicketSettingsModel;

  constructor() {
    this.tickets = {
      Total: 0, Pending: 0, Closed: 0, Deleted: 0
    }
    this.ticketsFinal = {
      Total: 534, Pending: 223, Closed: 135, Deleted: 103
    }
  }

  ToggleSettings() {
    this.settingsOpen = !this.settingsOpen
  }

  CloseSettings(ev: Boolean) {
    this.settingsOpen = ev
  }

  changeSettings(event: TicketSettingsModel) {
    if (event.Total) { this.tickets.Total = event.Total }
    if (event.Pending) { this.tickets.Pending = event.Pending }
    if (event.Closed) { this.tickets.Closed = event.Closed }
    if (event.Deleted) { this.tickets.Deleted = event.Deleted }
  }

  animationOnScroll() {
    for (let i = 0; i <= this.ticketsFinal.Total; i++) {
      setTimeout(() => {
        this.tickets.Total = i;
        if (i <= this.ticketsFinal.Pending) { this.tickets.Pending = i; }
        if (i <= this.ticketsFinal.Closed) { this.tickets.Closed = i; }
        if (i <= this.ticketsFinal.Deleted) { this.tickets.Deleted = i; }
      }, i * 5);
    }
  }
}
