// myCall
Function.prototype.myCall = function (thisArg, ...args) {
    thisArg = thisArg ?? globalThis; // проверяем контекст на null или undefined
    const key = Symbol(); // свойство объекта создаем через Symbol для того, чтобы оно было гарантированно уникальным
    thisArg[key] = this; // передача функции в объект
    const result = thisArg[key](...args); // вызываем функцию как метод объекта
    delete thisArg[key]; // удаляем свойство key, так как оно является временным
    return result; // возвращаем результат выполнения 
};

// example 1
function showInfo(city, country) {
    return `${this.name} lives in ${city}, ${country}`;
}
const user = { name: "Joe Doe" };
console.log(showInfo.myCall(user, "New-York", "USA"));

// example 2
function sumArray(a, b, c) {
    return a + b + c;
}
const array = [10, 20, 30];
const result = sumArray.myCall(null, ...array);
console.log(result);

// // example 3
const student1 = { name: "Anna", score: 80 };
const student2 = { name: "Mark", score: 95 };
function printResult() {
    console.log(this.name + " scored " + this.score);
}
// const res = printResult.myCall(student1);


// myApply работает также, как myCall, но в виде аргумента берется массив значений, соответственно rest оператор не нуждается в использовании
Function.prototype.myApply = function(thisArg, args) {
    thisArg = thisArg ?? globalThis;
    const key = Symbol();
    thisArg[key] = this;
    let result;
    if (args == null) {
        result = thisArg[key]();
    } else {
        result = thisArg[key](...args);
    }
    delete thisArg[key];
    return result;
}

// example 1
function showInfo(city, country) {
    return `${this.name} lives in ${city}, ${country}`;
}
const userJ = { name: "Joe Doe" };
console.log(showInfo.myApply(userJ, ["New-York", "USA"]));

// example 2
function sumArray(a, b, c) {
    return a + b + c;
}
const array1 = [10, 20, 30];
const res = sumArray.myApply(null, array1);
console.log(res);

// example 3
function printResult() {
    console.log(this.name + " scored " + this.score);
}
const res2 = printResult.myApply(student2);


// myBind берет в качестве аргумента функцию и возвращает ее, также навчегда привязывает контекст
Function.prototype.myBind = function(thisArg, ...args) {
    const fn = this; // функция, которая ссылается на thisArg, чтобы не потерять контекст внутри возвращаемой функции
    return function(...laterArgs) { // в возвращаемую функцию передаем аргументы, которые могут добавится после привязки функции
        const allArgs = [...args, ...laterArgs]; // сохраняем в общий массив все аргументы, то есть указанные как до, так и после привязки функции
        return fn.myCall(thisArg, ...allArgs); // возвращаем функцию с уже сделанной привязкой к контексту
    }
}

// example 1
function showInfo(city, country) {
    return `${this.name} lives in ${city}, ${country}`;
}
const user3 = { name: "Joe Doe" };
const boundShowInfo = showInfo.myBind(user3, "New York");
console.log(boundShowInfo("USA"));

// example 2
function multiply(a, b) {
  return a * b;
}
const multy = multiply.myBind(null, 2, 3);
console.log(multy());

// example 3
const person = {
  name: "Alex",
  sayHi() {
    return `Hi, I'm ${this.name}`;
  }
};

const fn = person.sayHi;
const personName = fn.myBind(person, null);
console.log(personName());