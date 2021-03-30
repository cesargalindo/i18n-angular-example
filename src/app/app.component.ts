import { Component, OnInit } from '@angular/core';

import { TitleService } from './services/title/title/title.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    // Select first tab
    tabSelected = 0;

    xmessage = $localize`:@@xmessage:Message X`;

    public constructor(public titleService: TitleService) { }

    public ngOnInit(): void {
        // Initilize text on app.component.html for first tab
        this.titleService.setTitle($localize`:@@root-c_puralsTitle:Dynamic Plurals Text`);
    }

    newTabSelected(e: number) {
        if (e === 0) {
            this.titleService.setTitle($localize`:@@root-c_puralsTitle:Dynamic Plurals Text`);
        }
        else if (e === 1) {
            this.titleService.setTitle($localize`:@@root-c_pipesTitle:Custom Pipes Text`);
        }
        else if (e === 2) {
            this.titleService.setTitle($localize`:@@root-c_dateTitle:Date Pipes Text`);
        }
    }


}
