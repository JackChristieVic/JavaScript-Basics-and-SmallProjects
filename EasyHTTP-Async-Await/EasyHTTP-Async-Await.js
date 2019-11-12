// ES6 Async and Await to make HTTP requests

//1 GET Request
class EasyHTTP {
    async get(url) {
        const response = await fetch(url);
        const response_data = await response.json();
        return response_data;
    }
ß 
    //2 POST Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const response_data = await response.json();
        return response_data;
    } 


    //3 PUT Request
    async put(url, data) {
        const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
        });
        const response_data = await response.json();
        return response_data;
    }
 
    //4 DELETE Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            // don't need the body because no data is sent
        });
        
        const response_data = await "Data deleted";
        return response_data;
    }
}
