const myLibrary = [];
const container = document.querySelector(".container");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    const div = document.createElement("div");
    const breaker = document.createElement("br");
    div.textContent = `${title} by ${author} : ${pages} pages in total. Read status : ${read}`;
    container.appendChild(div);
    container.appendChild(breaker);
}


addBookToLibrary("The Hobbit", "Tolkien", 450, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 200, false);
console.log(myLibrary);