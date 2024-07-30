import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'draft-widget',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.scss'
})
export class DraftComponent {
  getFormData(form: NgForm) {
    //console.log(form.value)
    //write your logic here
  }
}
