// function myInstanceOf(obj, constructor) {
//     if(obj === null || typeof obj !== "object") {
//         return false;
//     }
//     let tmp = Object.getPrototypeOf(obj);
//     while(tmp) {
//         if(tmp === constructor.prototype) {
//             return true;
//         }
//         tmp = Object.getPrototypeOf(tmp);
//     }
//     return false;
// }
// function Animal() {}
// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// const dog = new Dog();
// console.log(myInstanceOf(dog, Dog)); 
// console.log(myInstanceOf(dog, Animal));
// console.log(myInstanceOf(dog, Array));
// console.log(myInstanceOf(null, Object)); 
// console.log(myInstanceOf(123, Number)); 
// console.log(myInstanceOf("hello", String)); 


// function myNew(constructor, ...args) {
//     let obj = Object.create(Object.prototype);
//     obj.__proto__ = constructor.prototype;
//     let result = constructor.call(this.constructor.prototype, ...args);
//     if(typeof result === "object" || typeof result === "function") {
//         return result;
//     }
//     return obj;
// }
// function User(name) {
//     this.name = name;
// }

// function Car(model) {
//     this.model = model;
//     return { custom: "returned object" };
// }

// const user = myNew(User, "Alex");
// console.log(user.name); // Alex
// console.log(Object.getPrototypeOf(user) === User.prototype); // true
// console.log(user.constructor === User); // true

// const car = myNew(Car, "BMW");
// console.log(car.model);
// console.log(car.custom); // returned object
// function Empty() {}
// const obj = myNew(Empty);
// console.log(Object.getPrototypeOf(obj) === Empty.prototype); // true
// function Test() {
//     return 123;
// }
// const test = myNew(Test);
// console.log(Object.getPrototypeOf(test) === Test.prototype); // true


// function checkProperty(obj, key) {
//     if(Object.hasOwn(obj, key)) {
//         return "Own";
//     } else if(key in obj) {
//         return "Inherited";
//     } else {
//         return "Not found";
//     }
// }
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.name = "Rex";
// console.log(checkProperty(dog, "name")); 
// console.log(checkProperty(dog, "eats")); 
// console.log(checkProperty(dog, "age"));
// const obj = Object.create(null);
// obj.value = 10;
// console.log(checkProperty(obj, "value")); 
// console.log(checkProperty(obj, "toString")); 
// console.log(checkProperty({}, "toString"));


// function getPrototypeMethods(obj) {
//     let property = Object.getPrototypeOf(obj);
//     if(!property || property === Object.prototype) {
//         return [];
//     }
//     return Object.getOwnPropertyNames(property).filter(elem => typeof property[elem] === "function");
// }

// function User(name) {
//     this.name = name;
// }

// User.prototype.sayHi = function () {
//     return `Hi, ${this.name}`;
// };

// User.prototype.getName = function () {
//     return this.name;
// };

// const user = new User("Alex");
// console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] order may vary
// console.log(getPrototypeMethods({ a: 1 })); // []
// console.log(getPrototypeMethods([]).includes("push")); // true
// const base = {
//     x: 10,
//     print() {
//         return "hello";
//     }
// };
// const obj = Object.create(base);
// console.log(getPrototypeMethods(obj)); // ["print"]
// console.log(getPrototypeMethods(Object.create(null))); // []


// Array.prototype.mySum = function() {
//     let sum = 0;
//     this.forEach(elem => {
//         if(typeof elem !== "number" || isNaN(elem)) {
//             throw new Error("It should be number");
//         }
//         sum += elem;
//     })
//     return sum;
// }
// console.log([1, 2, 3].mySum()); 
// console.log([10, -5, 4].mySum()); 
// console.log([].mySum()); 
// console.log([1, "2", 3].mySum()); 
// console.log([1, NaN].mySum()); 
// console.log([true, 2].mySum()); 