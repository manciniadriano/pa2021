import { interval, map, filter, pipe, take, merge, Observable } from 'rxjs';
/*
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
 
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));
*/

const timerA = new Observable( function subscribe(subscriber){
    let count = 0;
    let id = setInterval(() => {
        subscriber.next("A|"+count++); // happens asynchronously
        if(count > 10)
            clearInterval(id);
      }, 333);
});

const timerB = new Observable( function subscribe(subscriber){
    let count = 0;
    let id = setInterval(() => {
        subscriber.next("B|"+count++); // happens asynchronously
        if(count > 10)
            clearInterval(id);
      }, 1000);
});

const merged = merge(timerA, timerB);
//merged.subscribe(x => console.log(x));
merged.pipe(map(x => x+"pappo"),filter(x => x == "B|4pappo")).subscribe(x => console.log(x));