// Task 1
// function sumInArray(a, b, c) {
//     return a + b + c;
// }
// const sum = sumInArray.apply(null, [10, 20, 30]);
// console.log(sum);


// Task 2
// const student1 = {name: "Anna", score: 80};
// const student2 = {name: "Mark", score: 90};
// function printResult() {
//     return `${this.name} scored ${this.score}`;
// }
// let st1 = printResult.call(student1);
// let st2 = printResult.apply(student2);
// console.log(st1, st2);


// Task 3
// const user = {
//     name: "Alex",
//     greet() { 
//         return "Hello " + this.name;
//     }
// };
// const admin = {
//     name: "Admin"
// };
// const result = user.greet.call(admin);
// console.log(result);


// Task 4
// const numbers = [5, 12, 8, 20, 3];
// console.log(Math.max.apply(null, numbers));


// Task 5
// const obj1 = {
//     value: 10,
//     getValue() {
//         return this.value;
//     }
// };
// const obj2 = {
//     value: 50
// }
// console.log(obj1.getValue.call(obj2));


// Task 6
// function total(a, b, c) {
//     return a + b + c;
// }
// const args = [7, 8, 9];
// console.log(total.apply(null, args));


// Task 7
// function show() {
//     return this.name;
// }
// const obj = { name: "Test" };
// const bound = show.bind(obj);
// console.log(bound.call({ name: "Wrong" }));
/* Выводом будет Test, поскольку при использовании bind привязывание контекста 
происходит навсегда, и изменить его через call или apply нельзя */


// Task 8
// function hasPoints() {
//     return `${this.name} has ${this.points} points`;
// }
// const p1 = { name: "Anna", points: 10 };
// const p2 = { name: "Mark", points: 25 };
// console.log(hasPoints.call(p1));
// console.log(hasPoints.call(p2));


// Task 9
// function sum(a, b, c) {
//     return a + b + c;
// }
// function execute(fn, arr) {
//     return fn(...arr);
// }
// console.log(execute(sum, [2, 4, 6]));


// Task 10
// function show() {
//     return this.name;
// }
// const a = { name: "A" };
// const b = { name: "B" };
// const fn = show.bind(a);
// console.log(fn.call(b));
/* Выведет А, так как bind привязывает навсегда */


// Task 11
// const obj = {
//     value: 100,
//     get() {
//         const inner = () => {
//             console.log(this.value);
//         }
//         inner();
//     }
// };
// obj.get();


// Task 12
// const obj = {
//     value: 1,
//     add(x) {
//         this.value += x;
//         return this
//     }
// };
// const res = obj.add(5).add(10);
// console.log(res.value);

