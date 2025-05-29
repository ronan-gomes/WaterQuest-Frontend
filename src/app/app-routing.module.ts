import { QuizScreenComponent } from './quiz/quiz-screen/quiz-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizInfoComponent } from './quiz/quiz-info/quiz-info.component';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizFormComponent } from './quiz/quiz-form/quiz-form.component';
import { QuizDeleteComponent } from './quiz/quiz-delete/quiz-delete.component';

const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "info", component:QuizInfoComponent},
  {path: "list", component:QuizListComponent},
  {path: "form", component:QuizFormComponent},
  {path: "edit/:id", component:QuizFormComponent},
  {path: "quiz/:id", component:QuizScreenComponent},
  {path: "delete/:id", component:QuizDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
