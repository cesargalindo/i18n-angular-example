import { LOCALE_ID } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// NOTE: allows LOCALE_ID to work with Angular pipes - WARN: still works without this??
// platformBrowserDynamic().bootstrapModule(AppModule, {
//     providers: [{provide: LOCALE_ID, useValue: 'en-US' }]
// });
