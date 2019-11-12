// ES6 fetch API to send HTTP requests
// GOOD RESOURCE: https://javascript.info/promise-chaining

//1 GET Request
class EasyHTTP {
    get(url) {
        // the get() function returns a NEW Promise object with callback functions(resolve, reject)
        return new Promise((resolve,reject) => {
            fetch(url)
            // fetch returns a promise too. json() is part of it
            .then(response => response.json())
            // .then() function returns a promise too. so we can use .then() on the returned promise. In the .then() function, we call the resolve function to return the data  
            .then(data => resolve(data))
            // or use the reject() function to return the error.
            .catch(error => reject(error))
        });
    }

    //2 POST Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            // fetch takes two paramaters: url and an js object
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
        });
    }

    //3 PUT Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            // fetch takes two paramaters: url and an js object
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    //4 DELETE Request
    delete(url) {
        return new Promise((resolve, reject) => {
            // fetch takes two paramaters: url and an js object
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                // don't need the body because no data is sent
            })
                .then(response => response.json())
                .then(() => resolve('Deleted Successfully.'))
                .catch(error => reject(error));
        });
    }
}



/* My person notes in comment below
        |
        |
       \|/
NOTES About JavaScript Promise(my personal understanding and summarization):
Promise is an object in JavaScrpt ES6. It handles async operations such as a fetch() call for HTTP requests like the older technology AJAX(XMLHttpRequest object).

a Promise object is automatically created by JavaScript when we use fetch() to GET data from a file or Web API.
the returned promise attaches two callbacl funtions, usually called resolve and reject, as parameters. We can get the returned data from a file or API. Use the code above:
1, fetch(url): get the data from a url. It can be a string of file name or of url of a website.
2, fetch(url) returns a promise object which has two parameters/callback functions: resolve and reject
3, .then(): handle the returned object. Because the .then() function is operating on a promise object returned by the fetch() function, so we can pass a callback function to handle the response(it's a Promise object we name response). Here we can use the text() or json() function which is part of the promise object to get the content of the promise
4, 
*/