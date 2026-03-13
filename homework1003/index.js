// Task 1
// let person1 = {
//     name1: "John",
//     lastName1: "Dorian"
// };
// let person2 = {
//     name2: "Ivan",
//     lastName2: "Ivanov"
// };
// const mergedPerson = Object.assign({}, person1, person2);
// console.log(mergedPerson);


// Task 2
// const student = {
//     name: "John",
//     group: "1521-3",
//     age: 19
// };
// Object.freeze(student);
// student.age = 23;
// console.log(student);


// Task 3
// let isAvailable = true; 
// let movie = {
//     id: 1,
//     title: "It"
// };
// if (isAvailable) {
//     movie.status = true;
// }
// console.log(movie); 


// Task 4
// const film = ["title", "genre"];
// const obj = {};
// film.forEach(value => {
//     obj[value] = "text";
// });
// console.log(obj);


// Task 5
// let film = {
//     1: "one", 
//     2: "two"
// };
// for (let i of Object.keys(film)) {
//     console.log(i);
// }


// Task 6
// const film = {
//     title: "It",
//     year: 2017,
//     genre: "horror"
// };
// let filmProperies = Object.entries(film);
// let filterProperties = filmProperies.filter(([key, value]) => typeof value === 'number');
// const convObj = Object.fromEntries(filterProperties);
// console.log(convObj); 


// Task 7
let film1 = {
    title: "It",
    genre: "horror",
    year: 2017
};

let film2 = {
    title: "It",
    genre: "horror",
    year: 2017
};

console.log(JSON.stringify(film1) === JSON.stringify(film2));