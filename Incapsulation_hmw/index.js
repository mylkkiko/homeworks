class Book {
    #title;
    #author;
    #year;
    #isAvailable;

    constructor(title, author, year) {
        this.title = title;
        this.author = author; 
        this.year = year;
        this.#isAvailable = true;
    };

    get title() {
        return this.#title;
    };
    
    set title(value) {
        if(typeof value !== "string" || value.trim() === "") {
            console.log("The title of the book cannot be empty");
        }
        return this.#title = value;
    };
 
    get author() {
        return this.#author;
    };

    set author(value) {
        if(typeof value !== "string" || value.trim() === "") {
            console.log("The author of the book cannot be empty");
        }
        return this.#author = value;
    };

    get year() {
        return this.#year;
    };

    set year(value) {
        if(value < 0) {
            console.log("The year of publication cannot be a negative number");
        }
        return this.#year = value;
    };

    get isAvailable() {
        return this.#isAvailable;
    };

    borrowBook() {
        if(!this.#isAvailable) {
            return "Book is already borrowed";
        }
        return this.#isAvailable = false;
    };

    returnBook() {
        if(this.#isAvailable) {
            return "Book is already available";
        } 
        return this.#isAvailable = true;
    };

    matchesTitle(word) {
        return this.title.includes(word);
    };

    getInfo() {
        return `Book title: ${this.title} Book author: ${this.author} Book year: ${this.year}`;
    };
}

class Reader {
    #name;
    #borrowedBooks;

    constructor(name) {
        this.name = name;
        this.#borrowedBooks = [];
    };

    get name() {
        return this.#name;
    };

    set name(value) {
        if(typeof value !== "string" || value.trim() === "") {
            console.log("The name of the reader cannot be empty");
        }
        return this.#name = value;
    };

    get borrowedBooks() {
        return this.#borrowedBooks;
    };

    get borrowedBooksCount() {
        return this.#borrowedBooks.length;
    };

    takeBook(book) {
        if(book.isAvailable) {
            this.#borrowedBooks.push(book);
            book.borrowBook();
        } else {
            return `Book "${book.title}" is not available`;
        }
    };

    giveBackBook(book) {
        let index = this.#borrowedBooks.findIndex(x => x === book);
        if(index === -1) {
            return "Book not found";
        }
        book.returnBook();
        this.#borrowedBooks.splice(index, 1);
    };

    hasBook(book) {
        if(this.#borrowedBooks.some(x => x === book)) {
            return true;
        } else {
            return false;
        }
    };

    showBorrowedBooks() {
        return this.#borrowedBooks.map(book => book.title);
    };

    getInfo() {
        return `${this.name} has a ${this.#borrowedBooks.length} books`;
    }
}

class Library {
    #name;
    #books;
    #readers;

    constructor(name) {
        this.name = name;
        this.#books = [];
        this.#readers = [];
    };

    get name() {
        return this.#name;
    };

    set name(value) {
        if(typeof value !== "string" || value.trim() === "") {
            console.log("The name of the library cannot be empty");
        }
        return this.#name = value;
    };

    get books() {
        return this.#books;
    };

    get readers() {
        return this.#readers;
    };

    addBook(book) {
        if (!(book instanceof Book)) {
            return "Book haven't title";
        }
        this.#books.push(book);
    };

    registerReader(reader) {
        this.#readers.push(reader);
    };

    findBookByTitle(title) {
        let found = this.#books.find(book => book.title === title);
        if(found) {
            return found;
        } else {
            return null;
        }
    };

    findBooksByAuthor(authorName) {
        let found = this.#books.filter(book => book.author === authorName);
        return found;
    };

    giveBookToReader(title, reader) {
        let book = this.#books.find(book => book.title === title);
        if(book) {
            reader.takeBook(book);
        } else {
            return "Book not found";
        }
    };

    acceptBookFromReader(title, reader) {
        let book = this.#books.find(book => book.title === title);
        if(book) {
            reader.giveBackBook(book);
        } else {
            return "Book not found";
        }
    };

    showAvailableBooks() {
        return this.#books.filter(book => book.isAvailable === true);
    };

    showAllBooks() {
        return this.#books.map(book => book.getInfo());
    };

    getLibraryInfo() {
        return `${this.name}: ${this.#books.length}, ${this.#readers.length}`;
    };
}

const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());