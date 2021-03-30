import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss']
})
export class FormFieldErrorComponent {
  // FormControl element
  @Input() public formElement: AbstractControl;

  // Flag to indicate whether or not the form has been submitted
  @Input() public isFormSubmitted = false;

  // Field name
  @Input() public fieldName: string;

}
