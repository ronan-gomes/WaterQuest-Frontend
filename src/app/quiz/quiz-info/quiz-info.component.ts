import { Component } from '@angular/core';

@Component({
    selector: 'app-quiz-info',
    templateUrl: './quiz-info.component.html',
    styleUrl: './quiz-info.component.css',
    standalone: false
})
export class QuizInfoComponent {
  infos: string[]=[
    'A Batalha do Saber é uma ferramenta criadora de quiz, crie e jogue com seu quiz!',
    'Você também pode buscar um quiz na sua lista. Além de poder editá-lo ou removê-lo',
    'Na criação, escolha se seu quiz terá 5 ou 10 questões. Cada questão terá no mínimo 2 e no máximo 4 alternativas.',
    'E atenção na criação de cada questão: A primeira resposta sempre será a correta, use os campos das demais respostas incorretas.',
    'Mas não se preocupe com a ordem" Ao jogar as alternativas virão aleatóriamente',
    '-Espero que goste!',
  ];


}
