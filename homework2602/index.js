'use strict'

// Task 1
// function countSym(str) {
//     let count = 0;
//     for(let i = 0; i < str.length; ++i) {
//         count++;
//     }
//     return count;
// }
// console.log(countSym("Hello"));


// Task 2
// function upper(str) {
//     return str.toUpperCase();
// }
// console.log(upper("hello"));


// Task 3
// function sumNums(num1, num2) {
//     return num1 + num2;
// }
// console.log(sumNums(15, 12));


// Task 4
// function reverseString(str) {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
    
//     return newStr;
// }
// console.log(reverseString("hello")); 


// Task 5
// let str = "Learn Javascript";
// console.log(str.includes("qava"));


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
// let arrSub = "Java";
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
//     return {
//         strict: variable1 === variable2,
//         non_strict: variable1 == variable2
//     };
// }
// console.log(comparison(5, 5));
// console.log(comparison("5", 5));


// Task 14
// function isNum(number) {
//     if(typeof number === "number" && !Number.isNaN(number)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isNum(NaN));


// Task 15
// function ifNan(variable) {
//     let num = Number(variable);
//     if(Number.isNaN(num)) {
//         return null;
//     }
//     return num;
// }
// console.log(ifNan([5]));


// Task 16
// function inBool(variable) {
//     let type = typeof variable;
//     switch(type) {
//         case "number":
//         case "string":
//         case "undefined":
//         case "object":
//             console.log(Boolean(variable));
//             break;
//         case Array.isArray(variable):
//             console.log(Boolean(variable));
//             break;
//         default:
//             console.log("Other type:", Boolean(variable));
//     }
// }
// inBool([]);    
// inBool(0);    
// inBool(NaN); 


// Task 17
// function isRefer(variable) {
//     let num = typeof variable;
//     switch(num) {
//         case "number":
//         case "string":
//         case "boolean":
//         case "symbol":
//         case "undefined":
//             return true;
//         default:
//             return false;
//     }
// }
// let arr = [1, 2, 3];
// console.log(isRefer(arr));


// Task 17
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


// Task 18
// function isPrimitive(variable) {
//     if (variable === null) return true;
//     let type = typeof variable;

//     switch(type) {
//         case "number":
//         case "string":
//         case "boolean":
//         case "symbol":
//         case "undefined":
//         case "bigint":
//             return true;
//         default:
//             return false;
//     }
// }
// let a = undefined;
// console.log(isPrimitive(null));


// Task 19
// function sumNumbers(n1, n2) {
//     if(typeof n1 === "number" && typeof n2 === "number") {
//         return n1 + n2;
//     } else {
//         return "Invalid input";
//     }
// }
// console.log(sumNumbers(5, "12"));