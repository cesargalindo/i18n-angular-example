import { Component, OnInit } from '@angular/core';

import { IButtons, ButtonNames } from '../../../constants/index';

@Component({
    selector: 'app-other',
    templateUrl: './other.component.html',
    styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

    public IButtons = IButtons;
    public ButtonNames = ButtonNames;

    count = 1;
    title = $localize`:@@Other-RegComplete:Registration Complete`;

    constructor() { }

    ngOnInit(): void { }

    switchStatement() {
        if (this.count > 4) {
            this.count = 0;
        }

        this.count++;

        // Set title
        switch (this.count) {

            // New complete registration
            case 1:
                this.title = $localize`:@@Other-RegComplete:Registration Complete`;
                break;

            // Updating completed registration
            case 2:
                this.title = $localize`:@@Other-RegUpdated:Registration Updated`;
                break;

            // Creating draft registration
            case 3:
                this.title = $localize`:@@Other-RegDraftSaved:Registration Draft Saved`;
                break;

            // Updating draft registration
            case 4:
                this.title = $localize`:@@Other-RegDraftUpdated:Registration Draft Updated`;
                break;
        }
    }


}
