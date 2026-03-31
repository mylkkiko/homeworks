class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (!book.title) {
            throw new Error("Book haven't title");
        }
        if (!book.author) {
            throw new Error("Book haven't author");
        }
        if (typeof book.year !== "number") {
            throw new Error("Year must be number!");
        }
        this.books.push(book);
    };

    removeBook(title) {
        let rem = this.books.findIndex(book => book.title === title);
        if (rem === -1) {
            return "Book not found";
        }
        this.books.splice(rem, 1);
        return "Book removed";
    };

    findBookByTitle(title) {
        const findBook = this.books.find(book => book.title === title);
        if (findBook) {
            return findBook;
        } else {
            return null;
        }
    };

    findBooksByAuthor(authorName) {
        const findAuthorBooks = this.books.filter(book => book.author === authorName);
        return findAuthorBooks;
    };

    getAvailableBooks() {
        const availableBooks = this.books.filter(book => book.isAvailable === true);
        return availableBooks;
    };

    borrowBook(title) {
        const findBook = this.books.find(book => book.title === title);
        if (findBook) {
            return findBook.borrowBook();
        }
        else {
            return "Book is already taken";
        }
    };

    returnBook(title) {
        const findBook = this.books.find(book => book.title === title);
        if (findBook) {
            return findBook.returnBook();
        } else {
            return "Book not found"
        }
    };

    showAllBooks() {
        return this.books.forEach(book => {
            console.log(book.getInfo());
        });
    };

    countBooks() {
        return this.books.length;
    };

    countAvailableBooks() {
        return this.books.filter(book => book.isAvailable === true).length;
    };

    searchBooks(word) {
        return this.books.filter(book => book.title.includes(word));
    };

    getOldestBook() {
        return this.books.reduce((x, y) => (x > y) ? x : y);
    }
}

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }

    getInfo() {
        return `Book title: ${this.title}\nBook author: ${this.author}\nBook year: ${this.year}\n`;
    };

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
        } else {
            return "The book is already taken";
        }
    };

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
        } else {
            return this.getInfo();
        }
    };

    matchesAuthor(authorName) {
        if (this.author.toLowerCase() === authorName.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    };

    matchesTitle(word) {
        if (this.title.includes(word)) {
            return true;
        } else {
            return false;
        }
    };
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