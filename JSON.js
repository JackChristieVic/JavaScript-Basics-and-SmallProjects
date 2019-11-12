document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer() {
    // create XHR obj
    const xhr = new XMLHttpRequest();

    // open the file, true: async
    xhr.open('GET', 'JSON.json', true);

    // Get data and update the DOM
    xhr.onload = function () {
        if (this.status === 200) {

            // parse json file to a js object
            const customers = JSON.parse(this.responseText);

            let output = '';
            customers.forEach(function (customer) {
                output += `
                            <ul>
                                <li>Customer ID: ${customer.id}</li>
                                <li>Customer Name: ${customer.name}</li>
                                <li>Company Name: ${customer.company}</li>
                                <li>Phone Number: ${customer.phone}</li>
                            </ul>`;
            });
            
            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
    
}
