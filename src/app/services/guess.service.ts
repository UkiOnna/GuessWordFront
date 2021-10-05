import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

const baseUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class GuessService {

  constructor(private http: HttpClient) { }

  guessWord(guess: string): Observable<any> {
    const request = { guess } as GuessWordRequest;
    return this.http.post(`${baseUrl}/guess`, request);
  }

  getHistory(): Observable<Message[]> {
    return this.http.get<Message[]>(`${baseUrl}/guess/history`);
  }

}

export class GuessWordRequest {
  guess!: string;
}