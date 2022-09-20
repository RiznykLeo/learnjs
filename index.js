// Map and Set


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
console.log(removeAnagram(arr))
