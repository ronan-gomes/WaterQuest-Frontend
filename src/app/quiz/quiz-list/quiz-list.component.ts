import { Router } from '@angular/router';
import { Quiz } from './../quiz';
import { QuizService } from '../../services/quiz.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrl: './quiz-list.component.css',
    standalone: false
})
export class QuizListComponent {

  quizzes!: Quiz[]
  filter!: Quiz[]

  constructor(private QuizService: QuizService, private router: Router){}

  ngOnInit():void{
    this.QuizService.readQuizzes().subscribe(quizzes =>{
      this.quizzes = quizzes
      this.filter = quizzes
      console.log(quizzes);
    })

  }
  openQuizForm(){
    this.router.navigate(['form'])
  }

  startQuiz(id: any){
    this.router.navigate(['quiz', id]);
  }

  onEdit(id: any){
    this.router.navigate(['edit', id]);

  }
  onDelete(id: any){
    this.router.navigate(['delete', id]);

  }
  search(e: Event){
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    this.quizzes = this.filter.filter((quiz)=>{
      return quiz.name?.toLowerCase().includes(value);
    });
  }
}
