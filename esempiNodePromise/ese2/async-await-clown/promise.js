async function hello() {
    return 'Hello Alligator!';
  }
  
  const b = hello();
  
  console.log(b); // [object Promise] { ... }

  b.then(x => console.log(x)); // Hello Alligator!
  
  hello().then(x => console.log(x)); // Hello Alligator!
