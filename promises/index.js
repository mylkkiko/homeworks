// Task 1
// function print () {
//     setTimeout(() => {console.log("Hello after 2 seconds")}, 2000);
// }
// print();


// Task 2
// let count = 5;
// for(let i = count; i > 0; --i) {
//     setTimeout(() => {
//         console.log(i);
//         if(i === 1) {
//             console.log("Go!");
//         }
//     }, (count - i) * 1000);
// }


// Task 3
// const timer = setInterval(() => {
//     console.log("Executed");
// }, 5000);
// setTimeout(() => {
//     clearTimeout(timer);
//     console.log("No");
// }, 2000);


// Task 4
// function recTime(count) {
//     console.log(count);
//     setTimeout(() => {
//         recTime(count + 1);
//     }, 1000);
// };
// recTime(1);


// Task 5
// console.log("Start"); // Попадает в call stack и выводится первым
// setTimeout(() => { // Попадает в macrotask и выводится последним
//  console.log("Timeout");
// }, 0);
// console.log("End"); // Попадает в call stack и выводится вторым


// Task 6
// setTimeout(() => console.log("A"), 1000); // Попадает в macrotask и выводится последним 
// setTimeout(() => console.log("B"), 0); // Попадает в macrotask и выводится вторым из-за количества миллисекунд 0
// console.log("C"); // Попадает в call stack и выводится первым


// Task 7
// function delay(message, time) {
//     setTimeout(() => {
//         console.log(message);
//     }, time);
// }
// delay("Hello", 3000);


// Task 8
// let promise = new Promise((resolve) => {
//     setTimeout(() => resolve("Data loaded"), 2000);
// }).then(res => {
//     console.log(res);
// })


// Task 9
// let myPromise = new Promise((reject) => {
//     reject("Server Error");
// }).catch((error) => {
//     console.log(error);
// }) 


// Task 10
// function pay(balance, amount) {
//     return new Promise((resolve, reject) => {
//         if(amount <= balance) {
//             resolve("Payment successful");
//         } else {
//             reject("Error");
//         }
//     });
// }
// pay(1000, 300)
//     .then(res => console.log(res))
//     .catch(error => console.log(error));


// Task 11
// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "Anna" });
//         }, 1000);
//     });
// }
// function getPosts(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ userId: user.id, post: "Hellon world!!!"})
//         });
//     }, 1000);
// }
// function getComment(post) {
//     return new Promise((resolve) => {
//         resolve({ post: post.post, comments: ["beautiful", "bad"] })
//     }, 1000);
// }
// getUser()
//     .then(user => getPosts(user))
//     .then(post => getComment(post))
//     .then(res => console.log(res));


// // Task 12
// console.log("1"); // Выполняется первым, так как это синхронный код
// // Выполняется последним, так как попадает в макротаск, и приоритетом ниже остальных
// setTimeout(() => {
//     console.log("2");
// }, 0);
// // Выполняется третьим, так как попадает в микротаски, которые по приоритету выше чем макротаски
// Promise.resolve().then(() => { 
//     console.log("3");
// });
// console.log("4"); // Выполняется вторым, так как это синхронный код


// // Task 13
// console.log("A"); // Выполняется первым, так как это синхронный код
// // Промисы выполнятся последовательно, так как попадают в микротаски и приоритетом после синхронного кода
// Promise.resolve().then(() => {
//     console.log("B");
// });
// Promise.resolve().then(() => {
//     console.log("C");
// });
// // Выполняется последним, так как попадает в макротаски, и ниже по приоритету, чем остальные
// setTimeout(() => {
//     console.log("D");
// }, 0);
// console.log("E"); // Выполняется вторым, так как это синхронный код


// // Task 14
// // попадает в call stack и выполняется первым
// console.log("Start");
// // попадает в макротаски
// setTimeout(() => {
//     // попадает в call stack и выполняется четвертым
//     console.log("Timeout 1");
//     // выполняется последним, так как находится внутри setTimeout
//     Promise.resolve().then(() => {
//         console.log("Promise inside timeout");
//     });
// }, 0);
// // попадает в микротаски, а после в call stack (3 вывод)
// Promise.resolve().then(() => {
//     console.log("Promise 1");
// });
// // сначала проверяются все глобальные сущности, поэтому переходим к setTimeout
// // попадает в макротаски, после в call stack и выполняется пятым
// setTimeout(() => {
//     console.log("Timeout 2");
// }, 0);
// // попадает в call stack и выполняется вторым
// console.log("End");


// Task 15
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });
// }
// async function startTrafficLight() {
//     while(true) {
//         console.log("Yellow");
//         await delay(1000);
//         console.log("Green");
//         await delay(2000);
//         console.log("Red");
//         await delay(3000);
//     }
// }
// startTrafficLight();


// Task 16
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// async function downloadFile(fileName) {
//     console.log(`Start download: ${fileName}...`);
//     await delay(2000); 
//     console.log(`File ${fileName} download!`);
//     return "raw_image_data"; 
// }
// async function resizeImage(data) {
//     await delay(1000);
//     console.log("Image resized.");
//     return data + "_resized";
// }
// async function uploadFile(processedData) {
//     console.log(`Upload ${processedData} on server...`);
//     await delay(1500); 
//     console.log("File uploaded!");
// }
// async function runImageProcess() {
//     try {
//         const file = await downloadFile("vacation.jpg");
//         const resizedFile = await resizeImage(file);
//         await uploadFile(resizedFile);
        
//     } catch (error) {
//         console.error("Error in process", error);
//     }
// }
// runImageProcess();


// Task 17
// Вопрос 1
// Это структура данных, которая работает по принципу LIFO(last input, first output). 
// Если мы вызываем функцию, она попадает в стек. 
// когда функция завершается, она удаляется из стека.

// Вопрос 2
// Это дополнительные инструменты, которые предоставляет браузер. 
// JavaScript может делегировать им задачи, которые занимают время, чтобы не 
// блокировать основной поток.

// Вопрос 3
// Когда Web API заканчивает работу (таймер истек или данные с сервера пришли), 
// колбэк этой задачи попадает в очередь Macrotasks.

// Вопрос 4
// Очередь с более высоким приоритетом выполнения, чем Macrotasks

// Вопрос 5
// Это бесконечный цикл, во время которого как раз проверяется call stack и queue и при наличии функций
// они выполняются