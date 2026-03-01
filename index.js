'use strict'

// Task 1
// function countSym(str) {
//     let count = 0;

//     if(typeof str === "string") {
//         for(let i = 0; i < str.length; i++) {
//             count++;
//         }
//         return count;
//     } else {
//         console.log("It should be string!");
//     }
// }
// console.log(countSym(6574));



// Task 2
// function uppercase(str) {
//     if(typeof str === "string") {
//         for(let i = 0; i < str.length; i++) {
//             return str.toUpperCase();
//         }
//     } else {
//         console.log("It should be string!");
//     }
// }
// console.log(uppercase("heLlo"));



// Task 3
// function sumNumber(a, b) {
//     return a + b;
// }

// let a = 5;
// let b = 7;

// console.log(sumNumber(a, b));



// Task 4
// function reverse(str) {
//     let line = "";
//     if(typeof str === "string") {
//         for(let i = 0; i <= str.length; i++) {
//             console.log(str[str.length - i]);
//         }
//     } else {
//         console.log("It should be string!");
//     }
// }
// console.log(reverse("hello"));



// Task 5
// let str = "Learn Javascript";
// if(str.includes("Java")) {
//     console.log("true");
// } else {
//     console.log("false");
// }


// Task 6
// function indexArr(list, elem) {
//     for(let i = 0; i < list.length; i++) {
//         if(list[i] == elem) {
//             console.log(i);
//         } else if(i == list.length - 1) {
//             console.log("Mistake");
//         }
//     }
// }

// let numList = [3, 6, 9, 12];
// indexArr(numList, 15);



// Task 7
// function sumElements(list) {
//     let sum = 0;
//     for(let i = 0; i < list.length; i++) {
//         sum += list[i];
//     }
//     return sum;
// }
// let expenses = [50, 75, 100];
// console.log(sumElements(expenses));



// Task 8
// function isSubstr(str, subStr) {
//     let count = 0;
//     if(typeof str === "string" && typeof subStr === "string") {
//         for(let i = 0, j = 0; i < str.length && j < subStr.length; i++, j++) {
//             if(str[i] == subStr[j]) {
//                 count++;
//             }
//         }
//         if(count == subStr.length) {
//             console.log("true");
//         } else {
//             console.log("false");
//         }
//     }
// }
// let arr = "Javascript";
// let arrSub = "qava";
// isSubstr(arr, arrSub);


// Task 9
// function sumElements(list) {
//     let sum = 0;
//     for(let i = 0; i < list.length; i++) {
//         sum += list[i];
//     }
//     return sum;
// }

// let numbers = [10, 20, 15, 55];
// console.log(sumElements(numbers));



// Task 10
// function oddEven(number) {
//     if(number % 2 == 0) {
//         console.log("Number is even");
//     } else {
//         console.log("Number is odd");
//     }
// }

// console.log(oddEven(142));



// Task 11
// function getExactType(value) {
//     if (value === null) return "null";
//     if (Array.isArray(value)) return "array";
//     if (typeof value === "function") return "function";
    
//     return typeof value;
// }

// console.log(getExactType(null));       
// console.log(getExactType([1, 2, 3]));  
// console.log(getExactType({}));         
// console.log(getExactType(42));          


// Task 12
// function isTrue(value) {
//     if(Number.isNaN(value)) {
//         console.log("true");
//         return;
//     }
    
//     switch(value) {
//         case 0:
//         case "":
//         case null:
//         case undefined:
//         case false:
//             console.log("true");
//             break;
//         default:
//             console.log("false");
//     }
// }

// isTrue(NaN);



// Task 13
// function comparison(variable1, variable2) {
//     if(variable1 == variable2) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }

//     if(variable1 === variable2) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }
// comparison(5, 5);
// comparison(NaN, NaN);
// comparison("5", 5);



// Task 14
// function isNum(number) {
//     if(typeof number === "number" && number == NaN) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }
// isNum(NaN);



// Task 15
// function ifNan(variable) {
//     let num = Number(variable);
//     if(Number.isNaN(num)) {
//         return null;
//     }
//     return num;
// }
// console.log(ifNan("a5"));


// Task 16
// function inBool(variable) {
//     let num = typeof variable;
//     switch(num) {
//         case "number":
//         case "string":
//         case "null":
//         case "object":
//         case "undefined":
//         case "array":
//             console.log(Boolean(variable));
//         break;
//     }
// }
// inBool(null);


// Task 17
// function isRefer(variable) {
//     let num = typeof variable;
//     switch(num) {
//         case "number":
//         case "string":
//         case "boolean":
//         case "symbol":
//         case "undefined":
//             console.log("true");
//         break;
//         default:
//             console.log("false");
//     }
// }
// let arr = [1, 2, 3];
// isPrimitive(arr);



// Task 18
// function isPrimitive(variable) {
//     let num = typeof variable;
//     switch(num) {
//         case "number":
//         case "string":
//         case "boolean":
//         case "symbol":
//         case "undefined":
//         case "null":
//             console.log("true");
//         break;
//         default:
//             console.log("false");
//     }
// }
// let arr = [1, 2, 3];
// isPrimitive(arr);


// Task 19
// function sumNumbers(n1, n2) {
//     if(typeof n1 === "number" && typeof n2 === "number") {
//         return n1 + n2;
//     } else {
//         console.log("Invalid input");
//     }
// }
// console.log(sumNumbers(5, "12"));