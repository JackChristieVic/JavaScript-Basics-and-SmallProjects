// Creat a class with just one xmlhttprequest object
function EasyHTTP() {
    // XMLHttpRequest object is used to exchange data with servers
    this.http = new XMLHttpRequest();
}

// CREATE 4 METHODS FOR 4 HTTP REQUESTS: GET, POST, PUT ,DELETE
// --1, Method to make a GET request
EasyHTTP.prototype.get = function (url, callback) {
    // open method is part oF XMLHttpRequest object
    // it takes 3 params: the method, the url where the file is, async(true or false)
    this.http.open('GET', url, true);

    // lexical scope reason to assign this to self in ES5
    let self = this;

    this.http.onload = function () {
        if (self.http.status === 200) {
            //return error and the response
            callback(null, self.http.responseText);
        } else {
            callback("error: " + self.http.status);
        }
    }

    // Send the request to the server. It doesn't need a para for GET request.
    this.http.send();
}

// --2, Method to make a POST request
EasyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    // Must call this after open() method but before send() method
    this.http.setRequestHeader('Content-type', 'application/json');

    // lexical scope reason to assign this to self in ES5
    let self = this;

    this.http.onload = function () {
        //return error and the response
        callback(null, self.http.responseText);
    }
    // Convert JS obj data to JSON data type
    this.http.send(JSON.stringify(data));
}