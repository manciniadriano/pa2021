async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // ...cosa bisonga scrivere qui?
    // dobbiamo chiamare async wait() ed aspettare per ricevere 10
    // ricorda, non possiamo usare "await"
  }




  
  /*function f() {
  // shows 10 after 1 second
  wait().then(result => alert(result));
}

f();
*/