const axios = require('axios').default;

axios.get('https://jsonplaceholder.typicode.com/posts/101')
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.error(err);
    });

