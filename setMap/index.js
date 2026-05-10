// // Task 1
// function getUniqueUsers(users) {
//     const userMap = new Map();
//     users.forEach(user => {
//         userMap.set(user.id, user);
//     });
//     return Array.from(userMap.values());
// }
// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Anna' },
//     { id: 1, name: 'John' } // duplicate
// ];
// console.log(getUniqueUsers(users));


// // Task 2
// function mapToJson(map) {
//     let arr = Array.from(map);
//     return JSON.stringify(arr);
// }
// function jsonToMap(jsonStr) {
//     let arr = JSON.parse(jsonStr);
//     let m = new Map();
//     arr.forEach(e => {
//         m.set(e[0], e[1]);
//     });
//     return m;
// }
// const myMap = new Map([['a', 1], ['b', 2]]);
// const jsonStr = mapToJson(myMap);
// const restoredMap = jsonToMap(jsonStr);
// console.log(restoredMap); 


// // Task 3
// function groupByGroup(students) {
//     let m = new Map();
//     students.forEach(element => {
//         m.set(element.group, students.filter(x => x.group === element.group).map(x => x.name));
//     });
//     return m;
// }
// const students = [
//     { name: 'John', group: 'A' },
//     { name: 'Anna', group: 'B' },
//     { name: 'Max', group: 'A' }
// ];
// console.log(groupByGroup(students));


// // Task 4
// let wm = new WeakMap();
// function addLike(post, user) {
//     let likes = wm.get(post);
//     if (!likes) {
//         likes = [];
//         wm.set(post, likes);
//     }
//     if (!likes.includes(user)) {
//         likes.push(user);
//     }
// }
// function getLikes(post) {
//     return wm.get(post);
// }
// let post1 = { title: 'JS is awesome' };
// let post2 = { title: 'Node.js event loop' };
// addLike(post1, 'John');
// addLike(post1, 'Anna');
// console.log(getLikes(post1)); 
// console.log(getLikes(post2)); 


// // Task 5
// function filterSpam(text, _badWordsArray) {
//     let s = new Set();
//     s.set(text)
// }
// const text = "buy our new cheap product";
// const badWords = ["cheap", "buy"];
// console.log(filterSpam(text, badWords));


// // Task 6
// function intersection(set1, set2) {
//     let s = new Set();
//     for(let value of set1) {
//         if(set1.has(value) && set2.has(value)) {
//             s.add(value);
//         }
//     }
//     return s;
// }
// function difference(set1, set2) {
//     let s = new Set();
//     for(let value of set1) {
//         if(!(set1.has(value) && set2.has(value))) {
//             s.add(value);
//         }
//     }
//     return s;
// }
// const setA = new Set(['reading', 'games', 'music']);
// const setB = new Set(['games', 'sports']);
// console.log(intersection(setA, setB)); 
// console.log(difference(setA, setB)); 


// // Task 7
// function processNotification(notif) {
//     let ws = new WeakSet();
//     if(ws.has(notif)) {
//         return "Already processed, ignoring";
//     }
//     ws.add(notif);
// }

// const notif1 = { id: 1, text: 'Message 1' };
// const notif2 = { id: 2, text: 'Message 2' };

// // Expected Output
// console.log(processNotification(notif1)); // "Processed: Message 1"
// console.log(processNotification(notif1)); // "Already processed, ignoring"
// console.log(processNotification(notif2)); // "Processed: Message 2"