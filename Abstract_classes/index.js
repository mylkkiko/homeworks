// class Shape {
//     constructor() {
//         if (new.target === Shape) {
//             throw new Error("Cannot instantiate abstract class");
//         }
//     }
//     getArea() {
//         throw new Error("Method not implemented");
//     }
// }
// class Rectangle extends Shape {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }
// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     getArea() {
//         return Math.PI * this.radius * this.radius;
//     }
// }
// const shape = new Shape();
// const rect = new Rectangle(10, 5);
// console.log(rect.getArea());


// class StorageProvider {
//     constructor() {
//         if(new.target === StorageProvider) {
//             throw new Error("Cannot instantiate interface class");
//         }
//     }
//     upload(file) {
//         throw new Error("Error");
//     }
//     download(filename) {
//         throw new Error("Error");
//     }
// }
// class LocalStorageProvider extends StorageProvider {
//     constructor() {
//         super();
//     }
//     upload(file) {}
//     download(filename) {}
// }
// class CloudStorageProvider extends StorageProvider {
//     constructor() {
//         super();
//     }
//     upload(file) {}
//     download(filename) {}
// }
// function useStorage(provider) {
//     if(!(typeof provider.upload === "function") || !(typeof provider.download === "function")) {
//         throw new Error("Invalid storage provider");
//     }
//     else {
//         console.log("Works");
//     }
// }
// useStorage(new LocalStorageProvider());
// // useStorage({});


// class Animal {
//     constructor() {
//         if(new.target === Animal) {
//             throw new Error("Cannot instantiate abstract class");
//         }
//     }
//     speak() {
//         console.log("Animal makes a sound");
//     }
// }
// class Dog extends Animal {
//     constructor() {
//         super();
//     }
//     speak() {
//         super.speak();
//         console.log("Dog barks");
//     }
// }
// const d = new Dog();
// d.speak();