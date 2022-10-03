'use strict'

//MAP AND SET

//filter unique values from array
// function unique(arr) {
//     return Array.from(new Set(arr))
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

//filter anagrams from array
// function removeAnagram(arr){
//     let map = new Map();
//     for (let element of arr){
//        const sorted = element.toLowerCase().split("").sort().join("");
//        map.set(sorted, element)
//     }
//     return Array.from(map.values());
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//---------------------------------

//WEAKMAP AND WEAKSET

//How to track unread messages
//
// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];
// let readMessages = new WeakSet();
// // alert("Read message 0: " + readMessages.has(messages[0])); // true
// messages.shift();

//---------------------------------


//OBJECT METHODS

//Sum all Salaries
// function sumSalaries(obj){
//     let sum = 0;
//     for (let salary of Object.values(obj)){
//         sum+= salary
//     }
//     return sum;
// }
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// find all object properties
// function propCount(obj){
//     return Object.keys(obj).length
// }
// let user = {
//     name: 'John',
//     age: 30
// };
// alert( propCount(user) ); // 2

//---------------------------------

//DECONSTRUCTION

//deconstruct an object
// let userDec = {
//     name: "John",
//     years: 30
// };
// let {name, years: age, isAdmin = false} = userDec

//find employee with max salary
// function  topSalary(salaries){
//     let max = 0;
//     let maxName = null;
//     for(const [name, salary] of Object.entries(salaries)) {
//         if (max < salary) {
//             max = salary;
//             maxName = name;
//         }
//     }
//     return maxName;
// }
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

//---------------------------------

//DATES

//get week day
// function getWeekDay(date){
//     const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
//     return days[date.getDay()]
//
// }let date = new Date(2012, 0, 3);
// alert( getWeekDay(date) );

//get week day Europe
// function getWeekDay(date) {
//     let day = date.getDay();
//     if (day === 0) {
//         day = 7;
//     }
//     return day;
// }
// let date = new Date(2012, 0, 3);
// alert( getWeekDay(date) );

//---------------------------------

//RECURSION

//sum all numbers to given number
// function sumToRec(n){
//     if(n === 0){
//         return n
//     }
//     return n + sumToRec(n - 1)
// }

//factorial
// function factorial(n){
//     return (n !== 1) ? n * factorial(n - 1) : 1;
// }

//---------------------------------
//LINKED LIST

//return elements
// function printList(list) {
//     alert(list.value);
//     if (list.next) {
//         printList(list.next);
//     }
// }
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//

//---------------------------------

//CLOSURES

//sum function
// function sum(a){
//    return  function (b){
//         return a + b;
//     }
// }
// console.log( sum(5)(-1))

//array filter functions
// function inBetween(a,b){
//     return function(x){
//         return x >= a && x <= b;
//     }
// }
// function inArray(arr){
//     return function(x){
//         return arr.includes(x)
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inBetween(3, 6))); // 3,4,5,6
// alert( arr.filter(inArray([1, 2, 10]))); // 1,2

//sort object by field
// function byField(fieldName){
//     return (a,b) => {return a[fieldName] > b[fieldName]  ? 1: -1}
// }
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// users.sort(byField('name'));
// users.forEach(user => console.log(user.name)); // Ann, John, Pete
//
// users.sort(byField('age'));
// users.forEach(user => console.log(user.name)); // Pete, Ann, John

//army of functions, return id of function
// function makeArmy() {
//     let shooters = [];
//     for (let i = 0; i < 10; i++) {
//         function shooter() {
//             alert( i );
//         }
//         shooters.push(shooter);
//     }
//     return shooters;
// }
//
// let army = makeArmy();
// army[0]() //return 0
// army[5]() //return 5

//---------------------------------

//NAMED FUNCTION EXPRESSIONS, NFE

//create function call counter
// function makeCounter() {
//     let count = 0;
//     function counter() {
//         return count++;
//     }
//     counter.set = value => count = value;
//     counter.decrease = () => count--;
//     return counter;
// }
//
// let counter = makeCounter()
// console.log(counter());
// console.log(counter.set(3));
// console.log(counter.decrease());


//create sum function that will sum all calls
// function sum(a) {
//     let currentSum = a;
//
//     function f(b) {
//         currentSum += b;
//         return f;
//     }
//
//     f.toString = function () {
//         return currentSum;
//     };
//     return f;
// }
// alert(sum(4)(6)(-5))

//---------------------------------

//SETTIMEOUT SETINTERVAL

//call counter with nested timeout
// function printNumbers(from, to) {
//     let number = from;
//     let timer = setTimeout(printNumbers, 1000)
//
//     function printNumbers() {
//         console.log(number);
//         number++;
//         timer = setTimeout(printNumbers, 1000)
//         if (number === to) {
//             clearTimeout(timer)
//         }
//     }
// }

//timer counter with interval
// function printNumbers(from, to) {
//     let number = from;
//     let timer = setInterval(() => {
//         console.log(number);
//         number++;
//         if (number === to) {
//             clearInterval(timer)
//         }
//     }, 1000)
// }
// printNumbers(0, 5)

//---------------------------------


//DECORATORS,BIND,CALL,APPLY

//spy function which returns calls of another
// function work(a, b) {
//     alert(a + b);
// }
//
// function spy(func) {
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args)
//     }
//     wrapper.calls = [];
//     return wrapper
// }
// work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9
// for (let args of work.calls) {
//     alert('call:' + args.join());
// }

//delaying function
// function delay(func, ms) {
//     return function () {
//         setTimeout(() => func.apply(this, arguments), ms)
//     }
// }
//
// let f1000 = delay(alert, 1000);
//
// f1000("test");

//---------------------------------

//PROTOTYPAL INHERITANCE, PROTOTYPE

//add defer method to all functions
// Function.prototype.defer = function (ms) {
//     setTimeout(this, ms)
// }
// function f() {
//     alert("Hello!");
// }
// f.defer(1000);

//add defer decorator for functions
// Function.prototype.defer = function (ms) {
//     let f = this
//     return function (...args) {
//         setTimeout(() => f.apply(f, args), ms)
//     }
// }
//
// function f(a, b) {
//     alert(a + b);
// }
// f.defer(1000)(1, 2);


//CLASSES

//console clock
//
// class Clock {
//     constructor({template}) {
//         this.template = template
//     }
//
//     render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
//
//         console.log(output);
//     }
//
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
//
//     stop() {
//         clearInterval(this.timer);
//     }
// }
//
//
// let clock = new Clock({template: 'h:m:s'});
// clock.start();

//extended clock, with precision
//
// class ExtClock extends Clock {
//     constructor(options) {
//         super(options);
//         let {precision = 1000} = options;
//         this.precision = precision;
//     }
//
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), this.precision);
//     }
// }
//
// let extc = new ExtClock({template: 'h:m:s', precision: 5000})
// extc.start()


//ERROR HANDLING, TRY CATCH

//create your own error class
// class FormatError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "FormatError"
//     }
// }
//
// let err = new FormatError("Format error");
//
// alert(err.message);
// alert(err.name);
// alert(err.stack);
//
// alert(err instanceof FormatError);
// alert(err instanceof SyntaxError);

// ASYNCHRONOUS JS

//async/await
// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }
//
// async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status == 200) {
//         return response.json();
//     } else {
//         throw new HttpError(response);
//     }
// }
//
// async function demoGithubUser() {
//
//     let user;
//     while (true) {
//         let name = prompt("Login", "iliakan");
//
//         try {
//             user = await loadJson(`https://api.github.com/users/${name}`);
//             alert(`full name: ${user.name}.`);
//             break;
//         } catch (err) {
//             if (err instanceof HttpError && err.response.status === 404) {
//                 alert("This user doesn't exists");
//             } else {
//                 throw err;
//             }
//         }
//     }
//     return user;
// }
//
// demoGithubUser();

//JSON

//convert to json and to object
// let user = {
//     name: "Albert Einstein",
//     age: 35
// };
// const json = JSON.stringify(user);
// const newUser = JSON.parse(json);

//GENERATORS

//create seed based random generation
// function* rand(seed) {
//     let value = seed;
//
//     while (true) {
//         value = value * 16807 % 2147483647
//         yield value;
//     }
// }
// let gen = rand(1)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
//
