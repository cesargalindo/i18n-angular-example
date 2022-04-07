import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, RoutesRecognized, Params } from '@angular/router';

import { TitleService } from './services/title/title/title.service';

// export basePathArrays = []

export enum EContent {
    // Text / Heading
    US = 'en-US',
    FR = 'fr',
    DE = 'de',
    JA = 'ja',
}


export const Content: { [contentName: string]: boolean } = {
    // Text
    [EContent.US]: true,
    [EContent.FR]: true,
    [EContent.DE]: true,
    [EContent.JA]: true,
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    // Check first navigationStart
    private navStartCheck = false;

    // Select first tab
    tabSelected = 0;

    xmessage = $localize`:@@xmessage:Message X`;

    public constructor(
        public titleService: TitleService,
		private router: Router,
    ){

        // checks routes for data flags
		// this.router.events
        // .pipe(
        //     filter((event) => event instanceof NavigationEnd),
        //     tap(ev => this.tmpRouterEvent = ev),
        //     map(() => this.route),
        //     map((route1) => {
        //         // Check params
        //         route1.queryParams.subscribe((params: Params) => {
        //             // If url has domain, assume user came from SSO clicklet - autoredirect to Okta
        //             if (params['domain']) {
        //                 this.oktaChickletRedirect = true;
        //             }
        //         });

        //         while (route1.firstChild) {
        //             route1 = route1.firstChild;
        //         }
        //         return route1;
        //     }),
        //     mergeMap((route2) => route2.data))
        // .subscribe((data) => {
        //     // google analytics code for tracking each page navigation
        //     gtag('config', 'UA-7181233-4', {
        //         'page_path': this.tmpRouterEvent.urlAfterRedirects
        //     });
        //     this.whiteBackground = (data.whiteBackground && data.whiteBackground === true) ? true : false;
        //     this.hideHeader = (data.hideHeader && data.hideHeader === true) ? true : false;

        //     // If true do not check data, SSO domain param set it to true im map above
        //     if (this.oktaChickletRedirect) {
        //         this.hideFooter = true;
        //     }
        //     else {
        //         this.hideFooter = (data.hideFooter && data.hideFooter === true) ? true : false;
        //     }

        // });

        router.events.subscribe((event) => {
            console.log(event);
            let foo = event instanceof NavigationStart;
            console.log(foo);
            if (!this.navStartCheck && foo) {
                let moo = event['url'].split('/');
                console.log('======', event['url'], '0', moo[0], '1', moo[1], '=', Content[ moo[1]]);
                this.navStartCheck = true;
            }
          });

    }

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
