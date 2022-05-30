const myPost = {
    title: 'A post about true facts',
    body: '42',
    userId: 2
  }
  
  const options = {
    method: 'POST',
    body: JSON.stringify(myPost),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(res => res.json())
    .then(res => console.log(res));