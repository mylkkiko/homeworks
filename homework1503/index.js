// Task 1
// function curry(cb) {
//     let sizeOfCallback = cb.length;
//     let callbackArgs = [];
//     return function cruied(...args) {
//         callbackArgs.push(...args);
//         if(callbackArgs.length >= sizeOfCallback) {
//             let res = cb(...callbackArgs);
//             callbackArgs.length = 0;
//             return res;
//         }
//         return cruied;
//     }
// }
// const sum = (a, b, c) => a + b + c;
// const product = (a, b, c, d) => a * b * c * d;
// const sumFunc = curry(sum);
// const prodFunc = curry(product);
// console.log(sumFunc(1)(2, 3)); 
// console.log(sumFunc(1, 2)(3));
// console.log(sumFunc(1, 2, 3)); 
// console.log(prodFunc(1, 2, 3, 4)); 
// console.log(prodFunc(1)(2, 3, 4));  
// console.log(prodFunc(1, 2)(3, 4));  
// console.log(prodFunc(1, 2, 3)(4)); 


// Task 2
// function memoize(cb) {
//     const cache = {};
//     return function(n) {
//         if (n in cache) {
//             return cache[n];
//         }
//         const result = cb(n);
//         cache[n] = result;
//         return result;
//     };
// }
// function factorial(a) {
//     let res = 1;
//     for (let i = 2; i <= a; ++i) {
//         res *= i;
//     }
//     return res;
// }
// const foo = memoize(factorial);
// console.log(foo(5));
// console.log(foo(5)); 


// Task 3
// function pipe(...funcs) {
//     return function(initialValue) {
//         return funcs.reduce((currValue, currFunc) => {
//             return currFunc(currValue);
//         }, initialValue); 
//     };
// }
// const add5 = a => a + 5;
// const double = a => 2 * a;
// const sub4 = a => a - 4;
// const func = pipe(add5, add5, double, sub4); 
// console.log(func(2));


// Task 4
function trace(cb) {
    function wrapped(...args) {
        let result = cb(...args);
        let entry = {
            args: args,    
            output: result
        };
        wrapped.history.push(entry);
        return result;
    }
    wrapped.history = [];
    return wrapped;
}
function foo(a, b) {
    return a + b;
}

const tracedFunc = trace(foo);
console.log(tracedFunc(1, 2));    
console.log(tracedFunc(2, 4, 6)); 
console.log(tracedFunc.history); 