import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-date-examples',
    templateUrl: './date-examples.component.html',
    styleUrls: ['./date-examples.component.css']
})
export class DateExamplesComponent implements OnInit {

    date1: Date = new Date();

    constructor() { }

    ngOnInit(): void { }

}
