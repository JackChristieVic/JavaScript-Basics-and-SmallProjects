document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create XHR obj
    const xhr = new XMLHttpRequest();

    // open the file, true: async
    xhr.open('GET', 'AJAX.txt', true);

    // Get data and update the DOM
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = this.responseText;
        }
    }

    xhr.send();
    
}
