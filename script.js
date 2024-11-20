const myLibrary = [];
const container = document.querySelector(".container");
let init = false;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id;
}

Book.prototype.changeReadStatus = function(readingStatus) {
    if (readingStatus === "on") {
        this.read = true;
    } else {
        this.read = false;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    book.id = myLibrary.length;

    const div = document.createElement("div");
    div.classList.add(book.id);

    const paragraph = document.createElement("p");
    paragraph.textContent = `${book.id} : ${book.title} by ${book.author} : ${book.pages} pages in total. Read status : ${book.read}`;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete this book.";
    deleteButton.addEventListener("click", function() {
        container.removeChild(div);
    });

    const readStatusButton = document.createElement("button");

    function readStatusSetter() {
        if (book.read) {
            readStatusButton.textContent = "unread";
            readStatusButton.classList.add("unread");
            readStatusButton.classList.remove("read");
        } else {
            readStatusButton.textContent = "read";
            readStatusButton.classList.add("read");
            readStatusButton.classList.remove("unread");
        }
        book.read = !book.read;
    }

    readStatusSetter();
    readStatusButton.addEventListener("click", readStatusSetter);


    const breaker = document.createElement("br");
    
    div.appendChild(paragraph);
    div.appendChild(deleteButton);
    div.appendChild(readStatusButton);
    div.appendChild(breaker);
    container.appendChild(div);
}

addBookToLibrary("The Hobbit", "Tolkien", 450, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 200, false);
addBookToLibrary("Le Petit Prince", "Antoine de Saint-Exupéry", 140, true);

const addBook = document.getElementById("addBook");
const bookDialog = document.getElementById("bookDialog");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");
const bookTitle = document.getElementById("book_title");
const bookAuthor = document.getElementById("book_author");
const bookPages = document.getElementById("book_pages");
const bookRead = document.getElementById("read_status");

addBook.addEventListener("click", () => {
    bookDialog.showModal();
});

cancelBtn.addEventListener("click", (event) => {
    document.getElementById("bookForm").reset();
});

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
    document.getElementById("bookForm").reset();
    bookDialog.close();
});