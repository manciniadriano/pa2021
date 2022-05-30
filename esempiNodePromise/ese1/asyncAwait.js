/*async function hello(){
    console.log('hello')
}

let prom = hello()
*/
/*
async function hello(){
    return 'hello';
}

let prom = hello().then((value) => {
    console.log(value);
})
*/

//const { response } = require("express");
import fetch from 'node-fetch';

//await
/*async function hello(){
    return greeting = await Promise.resolve('hello');
}

hello().then((value) => {
    console.log(value);
})
*/
//inserire in package.json -> ,
  //"type":"module"
//recupero dati album per ogni autore
async function fetchAlbum(){
    //await attende il completamento della richiesta fetch la quale restituisce una Promise
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data =  await response.json();
    return data;

}

fetchAlbum().then((value) =>{
    console.log(value);
});