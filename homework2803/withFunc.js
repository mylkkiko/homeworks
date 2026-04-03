function Library(name) {
    this.name = name;
    this.books = [];
}

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
}

Book.prototype.getInfo = function() {
    return `Book title: ${this.title}\nBook author: ${this.author}\nBook year: ${this.year}\n`;
}

Book.prototype.borrowBook = function() {
    if (this.isAvailable) {
        this.isAvailable = false;
    } else {
        return "The book is already taken";
    }
}

Book.prototype.returnBook = function() {
    if (!this.isAvailable) {
        this.isAvailable = true;
    } else {
        return this.getInfo();
    }
}

Book.prototype.matchesAuthor = function(authorName) {
    if (this.author.toLowerCase() === authorName.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

Book.prototype.matchesTitle = function(word) {
    if (this.title.includes(word)) {
        return true;
    } else {
        return false;
    }
}

Library.prototype.addBook = function(book) {
    if(!book.title) {
        return "Book haven't title";
    }
    if(!book.author) {
        return "Book haven't author";
    }
    if(typeof book.year !== "number") {
        return "Year must be number!";
    }
    this.books.push(book);
}

Library.prototype.removeBook = function(title) {
    let del = this.books.findIndex(book => book.title === title);
    if(del === -1) {
        return "Book not found";
    }
    return this.books.splice(del, 1);
}

Library.prototype.findBookByTitle = function(title) {
    let res = this.books.find((book) => book.title === title);
    if(res) {
        return res;
    } else {
        return "Title not found";
    }
}

Library.prototype.findBooksByAuthor = function(author) {
    const authorBooks = this.books.filter(book => book.author === author);
    if(authorBooks.length > 0) {
        return authorBooks;
    } else {
        return "Books not found";
    }
}

Library.prototype.getAvailableBooks = function() {
    const availableBooks = this.books.filter(book => book.isAvailable === true);
    if(availableBooks) {
        return availableBooks;
    }
}

Library.prototype.borrowBook = function(title) {
    const findBook = this.books.find(book => book.title === title);
    if (findBook) {
        return findBook.borrowBook();
    }
    else {
        return "Book not found";
    }
}

Library.prototype.returnBook = function(title) {
    const findBook = this.books.find(book => book.title === title);
    if (findBook) {
        return findBook.returnBook();
    } else {
        return "Book not found";
    }
}

Library.prototype.showAllBooks = function() {
    this.books.forEach(book => {
        console.log(book.getInfo());
    });
}

Library.prototype.countBooks = function() {
    return this.books.length;
}

Library.prototype.countAvailableBooks = function() {
    return this.books.filter(book => book.isAvailable === true).length;
}

Library.prototype.searchBooks = function(word) {
    return this.books.filter(book => book.title.includes(word));
}

Library.prototype.getOldestBook = function() {
    if (this.books.length === 0) return null;
    return this.books.reduce((oldest, current) => 
        (current.year < oldest.year) ? current : oldest
    );
}

const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();