# IRhythm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Extract Translation Files; 
The main message.xlf file is generated in /src/app/locale/ directory by executing:

> npm run extract

The default message.xlf file is provided to the translator team/service which in turn provide the individual *.xlf file per language.

## Configuration
Make sure localize = true in angular.json file to enable localization and launch non English language version.

"architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "localize": true,   // NOTE: enable localization,
             ..
           }
        }
}

## Launching a specific language
Launch a specific localized version of angular application. German and Japanese command are listed here:

> npm run start:de
> npm run start:jp

## Development server
Set  localize = false to disable localization and launch default English language with "npm start" within your local development environment

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
