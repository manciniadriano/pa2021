const axios = require('axios').default;

const sendDeleteRequest = async () => {
    try {
        const resp = await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendDeleteRequest();