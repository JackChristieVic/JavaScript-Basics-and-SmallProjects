const http = new EasyHTTP();

// the parameter response is returned from the callback function in the get() function in EasyHTTP object
http.get('https://jsonplaceholder.typicode.com/posts', function (error, response) {
    if (!error) {
        // console.log(response);
    } else {
        console.log(error);

    }
});

// Make a json object as data for the post method
const data = {
    title: 'Custom Post',
    body: 'Fake post body message'
};
http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, response) {
    if (!error) {
        console.log(response);
    } else {
        console.log(error);
    }
});