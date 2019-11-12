//1,  When button1 is clicked, getText() function is called
document.getElementById('button1').addEventListener('click', getText);

//1.1, Create the getText() function to retrieve text data in the fetchAPI.txt file
//   Using fetch, then, catch changing methods
function getText(){
    // using fetch function, pass in the file name as a string
    // fetch() function returns a Promise object, so use .then() function after it
    fetch('fetchAPI.txt')

    // a Promise object is returned, so we HAVE to use .then()
    .then(function(response){
        // response is also a Promise object, it has a text() function
        // response.text() returns another Promise object
        return response.text();
    })

    // use .then() function again, pass data as a parameter.
    // data is returned by the response.text() function.
    .then(function(data){
        // console.log(data);
        document.getElementById('output').innerText = data;
    })

    // use .catch() to get error messages.
    .catch(function(error){
        // console.log(error);
        document.getElementById('output').innerHTML = "<h4>Error Message: </h4>" + error;
    });
}

//2,  When button2 is clicked, getJson() function is called
document.getElementById('button2').addEventListener('click', getJson);
//2.1, Create the getJson() function to retrieve JSON data in the fetchAPI.json file
//   Using fetch, then, catch changing methods
function getJson(){
    // using fetch function, pass in the file name as a string
    // fetch() function returns a Promise object, so use .then() function after it
    // fetchAPI.json is copied from jsonplaceholder site: https://jsonplaceholder.typicode.com/posts/
    fetch('fetchAPI.json')

    // a Promise object is returned, so we HAVE to use .then()
    .then(function(response){
        // response is also a Promise object, it has a json() function
        // response.json() returns another Promise object
        return response.json();
    })

    // use .then() function again, pass data as a parameter.
    // data is a json object now, returned by the response.json() function.
    .then(function(data){
        // console.log(data);
        // need to loop through the json array object using forEach() function
        let output = '';
        data.forEach(function(post){
            output += `<li><span style='font-weight: bold'>Post ${post.id} - </span> ${post.title}: <br> ${post.body}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })

    // use .catch() to get error messages.
    .catch(function(error){
        // console.log(error);
        document.getElementById('output').innerHTML = "<h4>Error Message: </h4>" + error;
    });
}


//2,  When button2 is clicked, getJson() function is called
document.getElementById('button3').addEventListener('click', getAPI);
//2.1, Create the getJson() function to retrieve JSON data in the fetchAPI.json file
//   Using fetch, then, catch changing methods
function getAPI(){
    
    // site: https://jsonplaceholder.typicode.com/users
    fetch('https://jsonplaceholder.typicode.com/users')

    // a Promise object is returned, so we HAVE to use .then()
    .then(function(response){
        // response is also a Promise object, it has a json() function
        // response.json() returns another Promise object
        return response.json();
    })

    // use .then() function again, pass data as a parameter.
    // data is a json object now, returned by the response.json() function.
    .then(function(data){
        console.log(data);
        // need to loop through the json array object using forEach() function
        let output = '';
        data.forEach(function(user){
            output += `<li><span style='font-weight: bold'>User ID:</span> ${user.id}
                       <br><span style='font-weight: bold'>User Name: </span>${user.name}
                       <br><span style='font-weight: bold'>Email: </span> ${user.email}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })

    // use .catch() to get error messages.
    .catch(function(error){
        console.log(error);
        document.getElementById('output').innerHTML = "<h4>Error Message: </h4>" + error;
    });
}




