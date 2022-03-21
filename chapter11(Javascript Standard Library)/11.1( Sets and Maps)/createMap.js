let m = new Map();
let n = new Map([
    // A new map initialized with string keys mapped to numbers
    ["one", 1],
    ["two", 2]
]);

let o = {
    'count': 1,
    'name': "Paing Thet Ko"
};



let copy = new Map(Object.entries(o)) //Same as new map([["x", 1], ["y", 2]])
let copy1 = new Map(n)
// console.log(m,n);
// console.log("Copying another iterable object:", copy, copy1);



let newMap = new Map();
console.log(m.size);
m.set("one", 1); // Map the key "one" to the value 1
m.set("two", 2); // And the key "two" to the value 2
console.log("Size changed : ", m.size);


let returnValue = m.get("two"); 
let noValueReturn = m.get("three"); // => undefined: this key is not in the set
console.log("return the value associated with key: ", returnValue);

newMap.set("one", true); // Change the value associated with an existiing key
newMap.size; // The size does not change
newMap.has("one"); // => true: the map has a key "one"
newMap.has(true); // => false: the map does not have a key
newMap.delete("one"); // => true: the key existed and deletion succeeded
newMap.delete("three"); // => false: failed to delete a nonexistent key

// newMap.clear(); // Remove all keys and values from the map


//Like the add() method of Set, the set() method of Map can be chained

let newM = new Map().set("one", 1).set("two", 2).set("three", 3);
newM.size; // => 3
newM.get("two"); // => 2

// null, undefined, and NaN can be used as a key or value

let newN = new Map();
newN.set({}, 1);
newN.set({}, 2);
newN.size; // => 2:there are two keys in the map
newN.get({}); // => undefined: but this empty object is not a key

newN.set(m, undefined); // Map the map itself to the value undefined
console.log(newN.has(m))
console.log(newN.get(m))
console.log(newN === newN)