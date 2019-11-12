// Book Constructor to create book objects using function method
class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// LocalStorage class
class LocalStorage {
    static getBooks() {
        let books;

        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
            // console.log("18 - " + books);
        }
    
        return books;
    }

    static displayBooks() {
        const books = LocalStorage.getBooks();
        books.forEach(function(book) {
            const ui = new UI();
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = LocalStorage.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = LocalStorage.getBooks();

        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// UI Constructor to show alerts, leave it empty for now.
class UI{
    addBookToList(book) {
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
    
    showAlert(message, className) {
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

    } 

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}


// DOM Load event
document.addEventListener('DOMContentLoaded', LocalStorage.displayBooks);


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

        // add to local storage
        LocalStorage.addBook(book);
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

    //remove from local storage
    LocalStorage.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // show alert
    ui.showAlert('book removed', 'success');
    e.preventDefault();
})


