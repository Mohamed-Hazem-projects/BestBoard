import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardHoverDirective } from '../../../../Directives/card-hover.directive';
import { IUser } from '../../../../Models/user';

@Component({
  selector: 'card',
  standalone: true,
  imports: [RouterLink, CardHoverDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() User!: IUser;

}
