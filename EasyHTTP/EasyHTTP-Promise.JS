function EasyHTTP(){
    this.http = new XMLHttpRequest();
}

// make an HTTP GET request
EasyHTTP.prototype.get = function(url, callback){

    // console.log('get function is called')
    this.http.open('GET', url, true);

    let self = this;

    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, self.http.responseText);
        }else{
            callback('Error: ' + self.http.status)
        }
    }

    this.http.send();
}

// make an HTTP POST request

EasyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;

    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// make an HTTP PUT request
EasyHTTP.prototype.post = function(url, data, callback){
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;

    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// make an HTTP DELETE request
EasyHTTP.prototype.delete = function(url, callback){

    // console.log('get function is called')
    this.http.open('DELETE', url, true);

    let self = this;

    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, 'post deleted successfully.');
        }else{
            callback('Error: ' + self.http.status)
        }
    }

    this.http.send();
}


