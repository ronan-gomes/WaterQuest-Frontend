import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizInfoComponent } from './quiz/quiz-info/quiz-info.component';
import { BtnHomeComponent } from './components/btn-home/btn-home.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizFormComponent } from './quiz/quiz-form/quiz-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { QuizScreenComponent } from './quiz/quiz-screen/quiz-screen.component';
import { QuizDeleteComponent } from './quiz/quiz-delete/quiz-delete.component';


@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        QuizInfoComponent,
        BtnHomeComponent,
        QuizListComponent,
        QuizFormComponent,
        AlertComponent,
        QuizScreenComponent,
        QuizDeleteComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        NgbModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ModalModule.forRoot()], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
