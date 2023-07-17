/*
A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

A Set can hold any value of any data type.
*/
const num = new Set(); //Creates a new Set
//================================================

// add()	Add a new element to the Set
num.add(1);
num.add(2);
num.add(2); //If you add equal elements, only the first will be saved:
let add3 = 3;
num.add(add3); // variable add
console.log(num);  // Set(3) { 1, 2, 3 }
//================================================

// delete()     Remove an element from a set
num.delete(1);
console.log(num); // Set(2) { 2, 3 }
//================================================

// has()    Returm true if a value exists
let existsValue = num.has(2);
let nonExistsValue = num.has(7);
console.log(existsValue); // true
console.log(nonExistsValue); // false
//================================================

// clear()   Remove all elements from a Set
num.clear()
console.log(num); // Set(0) {}
//================================================

// forEach()     Invokes a callback for each elements
let mySet = new Set([7, 8, 9]);
let myNum = "";
mySet.forEach((value) => {
    myNum += value + " ";
})
console.log(myNum); // 7 8 9
//================================================

// values()     Return an Iterator with all the values in a Set
let mySetValue = mySet.values();
console.log(mySetValue); // [Set Iterator] { 7, 8, 9 }

// We can itarate Set by values()
let setValues = "";
for (let x of mySet.values()){
    setValues += x + " ";
}
console.log(setValues); // 7 8 9 
//================================================

// keys()   Same as values()
/*
A Set has no keys.
keys() returns the same as values().
This makes Sets compatible with Maps.
*/
//================================================

// entries()    Return an Iterator with the [value, value] pairs from a set
let setEntries = mySet.entries();
console.log(setEntries); // [Set Entries] { [ 7, 7 ], [ 8, 8 ], [ 9, 9 ] }

// size   Return a number of elements in a Set
let mySetSize = mySet.size
console.log(mySetSize); // 3
//================================================

console.log(typeof mySet); // object

console.log(mySet instanceof Set); // true



