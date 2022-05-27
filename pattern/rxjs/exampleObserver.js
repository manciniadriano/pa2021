import { Observable } from 'rxjs';

const observerAlpha = {
    next: x => console.log('Observer alpha got a next value: ' + x),
    error: err => console.error('Observer alpha got an error: ' + err),
    complete: () => console.log('Observer alpha got a complete notification'),
  };

  const observerBeta = {
    next: x => console.log('Observer beta got a next value: ' + x),
    error: err => console.error('Observer beta got an error: ' + err),
    complete: () => console.log('Observer beta got a complete notification'),
  };

const observable = new Observable(function subscribe(subscriber){
    subscriber.next(Math.random());
    subscriber.next(Math.random());
    subscriber.next(Math.random());
    //subscriber.complete();
    });

observable.subscribe(observerAlpha);
console.log("next observer...");
observable.subscribe(observerBeta);