import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NameValidatorDirective } from './name-validator.directive';
import { CustomValidatorDirective } from './custom-validator.directive';
import { EmailValidatorDirective } from './email-validator.directive';
import { CranBerryPage1Component } from './cran-berry-page1/cran-berry-page1.component';
import { CranBerryPage2Component } from './cran-berry-page2/cran-berry-page2.component';
import { CranBerryPage2Child1Component } from './cran-berry-page2-child1/cran-berry-page2-child1.component';
import { CranBerryPage1ReactiveFormComponent } from './cran-berry-page1-reactive-form/cran-berry-page1-reactive-form.component';
import {GetDataService} from "./cran-berry-page2/get-data.service";
import { NgBookReeditExerciseComponent } from './ng-book-reedit-exercise/ng-book-reedit-exercise.component';
import { NgBookRedditExerciseLinkItemComponent } from './ng-book-reddit-exercise-link-item/ng-book-reddit-exercise-link-item.component';
import { TwitterUserListObservable1Component } from './twitter-user-list-observable1/twitter-user-list-observable1.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'CranBerryPage1',
    component: CranBerryPage1Component
  },
  {
    path: 'CranBerryPage1Reactive',
    component: CranBerryPage1ReactiveFormComponent
  },
  {
    path: 'CranBerryPage2',
    component: CranBerryPage2Component
  },
  {
    path: 'ngBookReddit',
    component: NgBookReeditExerciseComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NameValidatorDirective,
    CustomValidatorDirective,
    EmailValidatorDirective,
    CranBerryPage1Component,
    CranBerryPage2Component,
    CranBerryPage2Child1Component,
    CranBerryPage1ReactiveFormComponent,
    NgBookReeditExerciseComponent,
    NgBookRedditExerciseLinkItemComponent,
    TwitterUserListObservable1Component
  ],
  imports: [
    RouterModule.forRoot(
      routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
