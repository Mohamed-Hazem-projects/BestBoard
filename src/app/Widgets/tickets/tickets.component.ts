import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TicketsSettingsComponent } from './tickets-settings/tickets-settings.component';
import { CommonModule } from '@angular/common';
import { TicketSettingsModel } from '../../Models/ticket-settings-model';

@Component({
  selector: 'tickets-widget',
  standalone: true,
  imports: [TicketsSettingsComponent, CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {

  settingsOpen: Boolean = false;
  Tickets: TicketSettingsModel;

  constructor() {
    this.Tickets = {
      Total: 0,
      Pending: 0,
      Closed: 0,
      Deleted: 0
    }
  }

  ToggleSettings() {
    this.settingsOpen = !this.settingsOpen
  }

  CloseSettings(ev: Boolean) {
    this.settingsOpen = ev
  }

  changeSettings(event: TicketSettingsModel) {
    if (event.Total) { this.Tickets.Total = event.Total }
    if (event.Pending) { this.Tickets.Pending = event.Pending }
    if (event.Closed) { this.Tickets.Closed = event.Closed }
    if (event.Deleted) { this.Tickets.Deleted = event.Deleted }
  }

  animated: boolean = false;
  @ViewChild('s3') s3!: ElementRef;
  @HostListener('document:scroll')
  animationOnScroll() {
    if (window.innerHeight > this.s3.nativeElement.getBoundingClientRect().y && !this.animated) {
      this.animated = true;
      for (let i = 0; i <= 500; i++) {
        setTimeout(() => {
          this.Tickets.Total = i;
          if (i <= 250) { this.Tickets.Pending = i; }
          if (i <= 190) { this.Tickets.Closed = i; }
          if (i <= 100) { this.Tickets.Deleted = i; }
        }, i * 5);
      }
    }
  }
}
