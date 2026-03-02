"use strict"
// Task 1
// function isEven(number) {
//     number % 2 == 0 ? console.log (true) : console.log (false);
// }
// isEven(0);



// Task 2
// function sumUpTo(n) {
//     let res = 0;
//     for(let i = 0; i <= n; i++) {
//         res += i;
//     }
//     return res;
// }

// console.log(sumUpTo(25));



// Task 3
// function minInArray(nums) {
//     let min = nums[0];
//     for(let num of nums) {
//         if(num < min) 
//             min = num;
//     }
//     return min;
// }
// console.log(minInArray([45, 15, 5]));



// Task 4
// function countDigits(n) {
//     if (n === 0) return 1;
//     let count = 0; 
//     let i = Math.abs(n);
//     while (i >= 1) {
//         i = Math.floor(i / 10); 
//         count++;
//     } 
//     return count;
// }
// console.log(countDigits(-155));



// Task 5
// function sumArray(arr) {
//     let res = 0
//     for(let i = 0; i < arr.length; i++) {
//         res += arr[i];
//     }
//     return res;
// }
// console.log(sumArray([-1, 1]));



// Task 6
// function average(arr) {
//     if(arr.length === 0) return null;
//     let av = 0, sum = 0;;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     av = sum / arr.length;
//     return av;
// }
// console.log(average([5, 5]));



// Task 7
// function countChar(str, char) {
// if(typeof str === "string" || typeof char === "string") console.log("It should be string!");
//     let count = 0;
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === char) 
//             count++;
//     }
//     return count;
// }
// console.log(countChar("JavaScript", "a"));



// Task 8
// function removeFirstChar(str){
//     let newStr = str.slice(1);
//     return newStr;
// }
// console.log(removeFirstChar("Hello"));


// Task 9
// function power(base, exp) {
//     return base ** exp;
// } 
// console.log(power(5, 0));



// Task 10
// function contains(arr, value) {
//     for(let i of arr) {
//         if(arr[i] === value)
//             return true;
//         else
//             return false;
//     }
// }
// console.log(contains([1, 5, 3], 2));



// Task 11
// function repeatString(str, n) {
//     let newStr = "";
//     for(let i = 0; i < n; i++) {
//         newStr += str;
//     }
//     return newStr;
// }

// console.log(repeatString("hi", 5));



// Task 12
function firstAndLast(arr) {
    if(arr === 0){return 1};
    let newArr=[];
    newArr[0] = arr[0];
    newArr[1] = arr[arr.length - 1];
    return newArr;
}

console.log(firstAndLast([1, 2, 3]));