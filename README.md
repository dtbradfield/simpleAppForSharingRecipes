# README
This is a simple recipe sharing app with a shopping-list to add ingredients from recipes.
This app is fully functional (a bit ugly as some of the bootstrap being used has since changed).
Users are able to register and login, delete, edit, add, and view recipes, as well as add ingredients from recipes to a shopping-list that can also be edited by the user.
I used firebase as the dummy back-end for this project, and it is simple to set it up to test this app I made.

!IMPORTANT!
I have hidden the API key and domain in a separate config file, instructions for how to get this app working with your firebase can be found below under '#Config'


# RecipeShoppingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

# CONFIG
First, remove the 'import {config} from ...' statement on line 3 of src/app/app.component.ts
Then remove the '//myKey = config....' and '//myDomain' lines that have been commented out in the same file.
Finally, edit the //apiKey and //authDomain commented-out lines in ngOnInit in the same file to reflect the apiKey and authdomain that firebase supplies you for the setup.

Be sure to remove the config import from app.module as well
Everything should function normally if you did this.
Check a simple tutorial on firebase to get your api key and authdomain, it is very simple

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
