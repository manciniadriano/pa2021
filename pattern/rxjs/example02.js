/*This code creates an observable called clock$ that: 
1) announces data is coming from the observable
2) emits a series of “ticks” once a second
3) stops emitting at 7 seconds.
*/

import {Observable} from 'rxjs';
const clock$ = new Observable((subject) => {
    console.log('In Observable');
    const interval = setInterval(() => {
        subject.next('tick');
    }, 1000);
    setTimeout(() => clearInterval(interval), 7 * 1000);
 });
 const subscription = clock$.subscribe(console.log);
  
 setTimeout(() => subscription.unsubscribe(), 10 * 1000);