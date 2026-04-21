// Task 1
// let myRange = {
//     from: 0,
//     to: 5,
//     [Symbol.iterator]() {
//         let current = this.to;
//         let last = this.from;
//         return {
//             next() {
//                 return (last <= current) ? {
//                     value: current--,
//                     done: false
//                 } : {
//                     done: true
//                 };
//             }
//         };
//     }
// }
// for(let x of myRange) {
//     console.log(x);
// }


// Task 2
// let digits = [1, 2, 3];
// let bonus = [4, 5];
// bonus[Symbol.isConcatSpreadable] = false;
// let extraNumbers = {
//     0: "xnjnj",
//     1: "nfv",
//     length: 2,
//     [Symbol.isConcatSpreadable]: true
// };
// console.log(digits.concat(extraNumbers));
// console.log(digits.concat(bonus));
// Поскольку мы поставили bonus[Symbol.isConcatSpreadable] = false, 
// метод concat видит этот флаг и не разворачивает массив

// Task 3
const oddValidator = {
    [Symbol.hasInstance](instance) {
        return Number.isInteger(instance) && instance % 2 !== 0;
    }
};
console.log(5 instanceof oddValidator);
console.log(10 instanceof oddValidator);
console.log("7" instanceof oddValidator);
// Благодаря Symbol.hasInstance расширяются границы возможности 
// использования instanceof, то есть его можно использовать не только чтобы 
// проверить принадлежность объекта к классу. Это делает instanceof универсальным
// в применении с классами


// Task 4
// const account = {
//     balance: 1000,
//     currensy: "AMD",

//     [Symbol.toPrimitive](hint) {
//         if(hint === "number" || hint === "default") {
//             return this.balance;
//         } else if(hint === "string") {
//             return `Account Balance: ${this.balance} ${this.currensy}`;
//         }
//     }
// }
// console.log(+account); // значние благодаря унарному плюсу преобразовалось в число
// с помощью функции String explicit преобразовали объект в строку, прошли проверку и вернули строку с данными
// console.log(String(account)); 
// здесь из-за бинарного плюса и второго операнда числа произойдет сложение двух чисел
// console.log(account + 500);