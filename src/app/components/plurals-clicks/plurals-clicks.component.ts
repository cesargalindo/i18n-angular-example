import { Component, OnInit } from '@angular/core';

import { TitleService } from '../../services/title/title/title.service';
import { IButtons, ButtonNames } from '../../constants/index';

@Component({
    selector: 'app-plurals-clicks',
    templateUrl: './plurals-clicks.component.html',
    styleUrls: ['./plurals-clicks.component.css']
})
export class PluralsClicksComponent implements OnInit {

    minutes = 0;
    gender = 'female';
    fly = true;
    logo = 'https://angular.io/assets/images/logos/angular/angular.png';

    public changeMessageButton = IButtons[ButtonNames.CHANGE_MESSAGE].name;

    constructor(public titleService: TitleService) { }

    ngOnInit(): void { }

    inc(i: number) {
        this.minutes = Math.min(5, Math.max(0, this.minutes + i));
    }
    male() {
        this.gender = 'male';
    }
    female() {
        this.gender = 'female';
    }
    other() {
        this.gender = 'other';
    }

    messageYClick() {
        this.titleService.setMessageY(0);
    }

}
