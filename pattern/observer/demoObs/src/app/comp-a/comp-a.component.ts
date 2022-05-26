import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  subscription: Subscription;
  message:number = 0;
  color: string;

  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.onMessage().subscribe(message => {
      this.message = message;
     });
     this.color = "red";
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Bye bye from comp B");
    this.subscription.unsubscribe();
  }

}
