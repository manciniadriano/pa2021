import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
    setInterval( () => {
      this.sendMessage(Math.random());
    }, 5000);
   }


  private subject = new Subject<number>();

    sendMessage(message: number) {
        this.subject.next( message);
    }

    clearMessages() {
        this.subject.next();
    }

    onMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
