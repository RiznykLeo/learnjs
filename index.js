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

