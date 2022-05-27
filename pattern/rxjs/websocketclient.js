import { Observable, merge, map , filter} from 'rxjs';
import { WebSocketSubject, webSocket,  } from 'rxjs/webSocket';

const formatMsg = function(data){
    return {"value": data, "timestamp": Date.now()};
}

const subjectA = webSocket('ws://localhost:8081');

/*
subjectA.subscribe({
  next: msg => console.log('message received A: ' + msg), // Called whenever there is a message from the server.
  error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
  complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
 });
 */

const subjectB = webSocket('ws://localhost:8082');

/*subjectB.subscribe({
  next: msg => console.log('message received B: ' + msg), // Called whenever there is a message from the server.
  error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
  complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
 });
 */

 console.log("hello");

 merge(subjectA, subjectB).pipe(filter(x => x < 0.5), map( x => formatMsg("pippo" + x)), map(x => console.log(JSON.stringify(x)+ "bla"))).subscribe();
