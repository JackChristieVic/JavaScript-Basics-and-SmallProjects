document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes() {

    const number = document.querySelector('input[type=number]').value;
    
    // create XHR obj
    const xhr = new XMLHttpRequest();

    // open the file, true: async
    xhr.open('GET', `http://api.icndb.com/jokes/${number}`, true);

    // Get data and update the DOM
    xhr.onload = function () {
        if (this.status === 200) {

            // parse json file to a js object
            const response = JSON.parse(this.responseText);
            console.log(response);
            let output = '';

            // if (response.type === 'success') {
            //     response.forEach(function (joke) {
            //         output += `
            //                     <ul>
            //                         <li>Joke: ${joke.joke}</li>
                                   
            //                     </ul>`;
            //     });
                
            // } else {
            //     output += `<li>Something went wrong</li`;
            // }
            
            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
    
}
