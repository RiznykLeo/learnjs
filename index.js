//MAP AND SET

//filter unique values from array
function unique(arr) {
    return Array.from(new Set(arr))
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//filter anagrams from array
function removeAnagram(arr){
    let map = new Map();
    for (let element of arr){
       const sorted = element.toLowerCase().split("").sort().join("");
       map.set(sorted, element)
    }
    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//---------------------------------


//WEAKMAP AND WEAKSET

//How to track unread messages

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
let readMessages = new WeakSet();
// alert("Read message 0: " + readMessages.has(messages[0])); // true
messages.shift();
//---------------------------------


//OBJECT METHODS

//Sum all Salaries
function sumSalaries(obj){
    let sum = 0;
    for (let salary of Object.values(obj)){
        sum+= salary
    }
    return sum;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// find all object properties
function propCount(obj){
    return Object.keys(obj).length
}
let user = {
    name: 'John',
    age: 30
};
// alert( propCount(user) ); // 2

