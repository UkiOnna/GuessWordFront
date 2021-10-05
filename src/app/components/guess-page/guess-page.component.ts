import { Component, OnInit } from '@angular/core';
import { GuessService } from 'src/app/services/guess.service';
import { Message } from 'src/app/models/message';
import { Sender } from 'src/app/models/sender';

@Component({
  selector: 'app-guess-page',
  templateUrl: './guess-page.component.html',
  styleUrls: ['./guess-page.component.scss']
})
export class GuessPageComponent implements OnInit {
  history!: Message[];
  userMessage!: string;
  constructor(private guessService: GuessService,) { }

  ngOnInit(): void {
    this.guessService.getHistory().subscribe(r => {
      this.history = r;
    });
  }

  getSender(message: Message): string {
    if (message.sender == Sender.System) {
      return 'Система'
    }
    return 'Вы'
  }

  guessWord(): void {
    this.guessService.guessWord(this.userMessage).subscribe(r => {
      this.history = r;
      this.userMessage='';
    })
  }

}
