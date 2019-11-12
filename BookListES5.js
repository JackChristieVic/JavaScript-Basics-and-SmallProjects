// Book Constructor to create book objects using function method
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI Constructor to show alerts, leave it empty for now.
function UI() { }

// add a method called 'addBookToList' using prorotype and now the method is part of the UI class
UI.prototype.addBookToList = function (book) {
    // get the table body(tbody tag) with the id called book-list 
    const list = document.getElementById('book-list');

    // create a new element called tr(table row)
    const row = document.createElement('tr');

    // insert collumns by putting: 1), <td> tags as innerHTML; 2), book object as textContent of the innerHTML;
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">Delete</a></td>
    `;

    // append the row element to the list(which is the element tbody with id='book-list')
    list.appendChild(row);
}

// delete book method
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// create a function to clear the fields when user clicks submit so that all the input boxes are empty after the info are added to the list below
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// show alert to use for success or failure of adding book to list
UI.prototype.showAlert = function(message, className){
    // create a div to hold the message and show it. This div tag wraps all other tags in associated with the message element
    const div = document.createElement('div');

    // add a class name to the above-created div tag
    div.className = `alert ${className}`;
    // add text to the div by appendign a child node
    div.appendChild(document.createTextNode(message));

    // get the element with class name of container by using queryselector
    // querySelector only returns the 1st element of the class, NOT all elements
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    // insert div element into the container element, but before the form element. so the HTML is like this:
    /* <div class="container">
        <div class="success">...textNode...</div>
        <form>
        ...     
        </form>
    </div> */
    container.insertBefore(div, form);

    //disappear after 3 sec
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);

    // fade out the alert message box after 2 seconds using the following two methods:
    // method 1:
    /* var alert = document.querySelector('.alert').style;
    alert.opacity = 1;
    (function fade() {
        (alert.opacity -= 0.1) < 0 ? alert.display = "none" : setTimeout(fade, 200)
    })(); */

    // method 2:
    /* (function fadeOutEffect() {
        var fadeTarget = document.querySelector('.alert');
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 200);
    })(); */
}


//event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    
    // when the submit button is clicked, get the 3 input values and store them in 3 variables for later use
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // use the 3 variables to create a book object
    const book = new Book(title, author, isbn);

    const ui = new UI();

    // check input boxes to make sure they are not empty
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // add book to list below the input fields
        ui.addBookToList(book);
        // clear all the input boxes after submission
        ui.showAlert('book added', 'success')
        ui.clearFields();
    }
    e.preventDefault();
})

// event listener to delete books from the list
document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteBook(e.target);

    // show alert
    ui.showAlert('book removed', 'success');
    e.preventDefault();
    
})


