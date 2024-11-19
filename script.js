const myLibrary = [];
const container = document.querySelector(".container");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    newBook.id = myLibrary.length;
}

function populateLibrary() {
    for (book of myLibrary) {
        const div = document.createElement("div");
        div.classList.add(book.id);

        const paragraph = document.createElement("p");
        paragraph.textContent = `${book.id} : ${book.title} by ${book.author} : ${book.pages} pages in total. Read status : ${book.read}`;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete this book.";
        deleteButton.onclick = function() {
            container.removeChild(div);
        };

        const breaker = document.createElement("br");
        
        div.appendChild(paragraph);
        div.appendChild(deleteButton);
        div.appendChild(breaker);
        container.appendChild(div);
    }
}

addBookToLibrary("The Hobbit", "Tolkien", 450, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 200, false);
addBookToLibrary("Le Petit Prince", "Antoine de Saint-Exupéry", 140, true);
populateLibrary();