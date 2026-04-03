// Task 1 
// class Employee {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const empl = new Employee("Milena", "Mkrtchyan");
// console.log(empl.fullName);


// Task 2
// class Account {
//     constructor(password) {
//         this.password = password;
//     }
//     get pass() {
//         return this.password;
//     }
//     set password(value) {
//         if(value.length > 6) {
//             this._password = value;
//         } else {
//             console.log("Password too short");
//         }
//     }
// }
// const acc = new Account("1234");


// Task 3
// class Temperature {
//     constructor(celcius) {
//         this._celcius = celcius;
//     }
//     get fharenheit() {
//         return (this._celcius * 1.8) + 32;
//     }
//     set celc(value) {
//         if(typeof value !== "number") {
//             console.log("Value should be number!");
//             return;
//         }
//         this._celcius = value;
//     }
// }
// let temp = new Temperature(10);
// console.log(temp.fharenheit);


// Task 4
// class Counter {
//     _count = 0;
//     get count() {
//         return this._count;
//     }
//     increment() {
//         this._count++;
//     }
// }
// let c = new Counter();
// c.increment();
// c.increment();
// console.log(c.count);


// Task 5
// class Product {
//     constructor(price) {
//         this._price = price;
//     }
//     get price() {
//         return this._price * 0.9;
//     }
//     set setPrice(value) {
//         if(typeof value !== "number" || value < 0) {
//             console.log("Value cannot be negative or non-numeric");
//         }
//         this._price = value;
//     }
// }
// const prod = new Product(100);
// prod.setPrice = 200;
// console.log(prod.price);


// Task 6
// class BankAccount {
//     constructor(balance) {
//         this._balance = balance;
//     }
//     set addMoney(value) {
//         if(typeof value !== "number" || value < 0) {
//             console.log("Value cannot be negative or non-numeric");
//             return;
//         }
//         if(this._balance < 0) {
//             console.log("The balance cannot be negative");
//             return;
//         }
//         this._balance += value;
//     }
//     get balance() {
//         return this._balance;
//     }
// }
// const account = new BankAccount(-100);
// account.addMoney = 15;
// console.log(account.balance);


// Task 7
// class Rectangle {
//     constructor(width, height) {
//         this._width = width;
//         this._height = height;
//     }
//     get area() {
//         return this._width * this._height;
//     }
//     set width(value) {
//         if(typeof value !== "number" || value < 0) {
//             console.log("Value cannot be negative or non-numeric");
//             return;
//         }
//         this._width = value;
//     }
//     set height(value) {
//         if(typeof value !== "number" || value < 0) {
//             console.log("Value cannot be negative or non-numeric");
//             return;
//         }
//         this._height = value;
//     }
// }
// const rec = new Rectangle(10, 15);
// rec.width = 2;
// rec.height = 3;
// console.log(rec.area);


// Task 8
// class Email {
//     constructor(email) {
//         this._email = email;
//     }
//     get email() {
//         return this.email;
//     }
//     set validEmail(value) {
//         if(!(value.includes("@"))) {
//             this._email = value;
//         } else {
//             console.log("Invalid email");
//         }
//     }
// }
// const email = new Email("mkppgmail.com");
// email.validEmail = "mkpp@gmail.com";
// email.validEmail;


// Task 9
// class Cart {
//     _total = 0;
//     set addItem(value) {
//         this._total += value;
//     }
//     get total() {
//         return this._total;
//     }
// }
// const cart = new Cart();
// cart.addItem = 20;
// cart.addItem = 20;
// console.log(cart.total);


// Task 10
// class Car {
//     constructor(speed) {
//         this.speed = speed;
//     }
//     get speed() {
//         return this._speed;
//     }
//     set speed(value) {
//         if(value > 200) {
//             console.log("Too fast");
//         } else {
//             this._speed = value;
//         }
//     }
// }
// const car = new Car(250);
// car.sp = 205;