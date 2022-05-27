import { Observable } from 'rxjs';
 
//create...
const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(200);
  setInterval(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
});
 
console.log('before');
//subscribe....
foo.subscribe(x => {
  console.log(x);
});
console.log('after');