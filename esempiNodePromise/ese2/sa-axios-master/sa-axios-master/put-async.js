const axios = require('axios').default;

const sendPutRequest = async () => {
    try {
        const resp = await axios({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            data: {
                userId: 1,
                title: 'New post title',
                body: 'This is the new body of the post'
            }
        });

        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
}

//alternativa


const updatedPost = {
    id: 1,
    userId: 1,
    title: 'A new title',
    body: 'Update this post'
};

const sendPutRequest = async () => {
    try {
        const resp = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendPutRequest();