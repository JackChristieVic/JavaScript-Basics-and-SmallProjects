const http = new EasyHTTP();
/* 
// GET Data from the web API
http.get('https://jsonplaceholder.typicode.com/users')
    // data is returned by the .then() function in the promise.
    .then(data => console.log(data))
    .then(error => console.log(error));

 */
// fake data to test the post() methodß

const data = {
    "name": "Fake Name",
    "username": "Fake User Name",
    "email": "Sincere@april.biz",
    "address": "Apt. 556, Gwenborough, 92998-3874",
};

// POST the data to an API using the post method in EasyHTTP-ES6 class
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));
 
/* 
// Update/PUT the data to an API using the PUT method in EasyHTTP-ES6 class
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(error => console.log(error));
 */
// DELETE the data to an API using the PUT method in EasyHTTP-ES6 class
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then((data) => console.log(data))
.catch(error => console.log("Error Message: " + error));
