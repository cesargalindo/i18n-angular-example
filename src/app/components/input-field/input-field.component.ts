import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl, FormGroupDirective } from '@angular/forms';

import { IButtons, ButtonNames } from '../../constants/index';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

    mainForm: FormGroup;

    genderList: string[] = ['Male', 'Female', 'Other'];

    get fullName() { return this.mainForm.get('fullName') as FormControl; }
    get gender() { return this.mainForm.get('gender') as FormControl; }
    get favoriteSeason() { return this.mainForm.get('favoriteSeason') as FormControl; }

    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

    public loginButton = IButtons[ButtonNames.LOGIN].name;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.mainForm = this.formBuilder.group({
            fullName: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
            gender: this.formBuilder.control('', [Validators.required]),
            favoriteSeason: this.formBuilder.control('', [Validators.required]),
          });
    }


    submit() {
        console.log('form submitted', this.mainForm.value);
    }

}
