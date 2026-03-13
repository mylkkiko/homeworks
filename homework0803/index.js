// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i, array);
//     }
//     return undefined;
// }
// const nums = [1, 2];
// const result = myForEach(nums, (currentValue) => {});
// console.log(result);


// Task 2
// function myMap(array, mapCall) {
//     let result = [];
//     for(let i = 0; i < array.length; ++i) {
//         let value = mapCall(array[i], i, array);
//         result.push(value);
//     }
//     return result;
// }
// let arr = [1, 3, 5, 6];
// let funcMap = myMap(arr, (name, index) => {
//     return name * index;
// });
// console.log(funcMap);


// Task 3
// function myFilter(arr, filterCall) {
//     let result = [];
//     for(let i = 0; i < arr.length; ++i) {
//         if(filterCall(arr[i], i, arr)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let a = [5, 4, 3, 2, 1];
// console.log(myFilter(a, x => (x < 3)));


// Task 4
// function mySome(arr, someCall) {
//     for(let i = 0; i < arr.length; ++i) {
//         if(someCall(arr[i], i, arr)) {
//             return true;
//         }
//     }
//     return false;
// }
// let a = [1, 2, 3, 4, 5];
// console.log(mySome(a, x => x % 2 === 0));


// Task 5
// function myEvery(arr, everyCall) {
//     for(let i = 0; i < arr.length; ++i) {
//         if(everyCall(arr[i], i, arr) && i === arr.length - 1) {
//             return true;
//         }
//     }
//     return false;
// }
// let a = [1, 2, 3, 4, 5];
// console.log(myEvery(a, x => x < 10));


// Task 6
// function myIndexOf(arr, searchElement) {
//     for(let i = 0; i < arr.length; ++i) {
//         if(arr[i] === searchElement(arr[i], i, arr)) {
//             return i;
//         }
//     }
//     return -1;
// }
// const a = ["html", "css", "js"];
// console.log(myIndexOf(a, x => "js"));