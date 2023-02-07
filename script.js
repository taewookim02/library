let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? 'read already' : 'not read yet'
    }`;
  };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.title);


function addBookToLibrary(book) {
  // Add Book object to myLibrary array
  myLibrary.push(book);
}

addBookToLibrary(theHobbit);
console.log(myLibrary);

////////////////////////


