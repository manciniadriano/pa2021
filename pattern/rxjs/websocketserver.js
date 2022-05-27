import { Observable } from 'rxjs';
import {WebSocketServer} from 'ws';
import * as http from 'http'; 

console.log(process.env.port);

//create...
const foo = new Observable(subscriber => {
    setInterval(() => {
      subscriber.next(Math.random()); // happens asynchronously
    }, 1000);
  });

const wss = new WebSocketServer({ port: process.env.port | 8080 });

wss.on('connection', function connection(ws) {
    foo.subscribe( value => {ws.send(value); console.log("sent...")});
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
});