/*
A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.
*/
const myMap = new Map(); // Creates a new Map object

// set()    Sets the value for a key in a Map.
myMap.set("Fruts", 200);
myMap.set("Vegitables", 300);
myMap.set("Fish", 500);

console.log(myMap); // Map(3) { 'Fruts' => 200, 'Vegitables' => 300, 'Fish' => 500 }
//================================================

// get()    Gets the value for a key in a Map
let getMap = myMap.get("Fish");
console.log(getMap); // 500
//================================================

// clear()  Remove all the elements from a Map
myMap.clear();
console.log(myMap); // Map(0) {}
//================================================
const myMap2 = new Map([
    ["apple", 300],
    ["orrange", 200],
    ["banana", 400]
])
// delete()     Removes a Map element specified by a key
myMap2.delete("apple");
console.log(myMap2); //Map(2) { 'orange' => 200, 'banana' => 400 }
//================================================

// has()    Return true if a key exists in a Map
let hasMap = myMap2.has("orrange");
console.log(hasMap); // true
//================================================

// forEach()    Invokes a callback for each  key/value pair in a Map
let myMap2Eelm = "";
myMap2.forEach((value) => {
    myMap2Eelm += value + " ";
})
console.log(myMap2Eelm); // 200 400 
//================================================

// entries()    Return an iterator object with the [key, value] pair in a Map
let myMap2Entries = myMap2.entries()
console.log(myMap2Entries); // [Map Entries] { [ 'orrange', 200 ], [ 'banana', 400 ] }
//================================================

// keys()   Return an iterator object with the key in a Map
let myMap2Keys = "";
for (let x of myMap2.keys()){
    myMap2Keys += x + " ";
}
console.log(myMap2Keys); // orrange banana
//================================================

// value()   Return an iterator object of the values in a Map
let myMap2Values = "";
for( let v of myMap2.values()){
    myMap2Values += v + " ";
}
console.log(myMap2Values); // 200 400
//================================================

// size     Return the number of Map element
console.log(myMap2.size); // 2
//================================================

console.log( typeof myMap2); // object

console.log(myMap2 instanceof Map) // true
