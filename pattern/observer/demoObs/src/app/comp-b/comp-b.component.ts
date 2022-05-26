import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  subscription: Subscription;
  messages:number[];

  constructor(private messageService: MessageService) {
    this.messages = [];
    // subscribe to home component messages
    this.subscription = this.messageService.onMessage().subscribe(message => {
      this.messages.push(message);
      });
    }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Bye bye from comp B");
    this.subscription.unsubscribe();
  }

}
