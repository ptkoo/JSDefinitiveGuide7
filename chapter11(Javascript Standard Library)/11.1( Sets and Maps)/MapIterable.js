let m = new Map([["x", 1], ["y", 2]]);
console.log([...m])

for (let [key, value] of m) {
 console.log(key , ":", value)
}


console.log([...m.keys()]);// => ["x", "y"]: just the keys
console.log([...m.values()]); // => [1, 2]: just the values
console.log([...m.entries()]); // => [["x", 1], ["y", 2]]: same as [...m]


// Map objects can also be iterated using the forEach() method that
// was first implemented by the Array class.

m.forEach((value, key) => {
    console.log("For Each:", key, value)
})