let s = new Set([9,3,4]); // A new, empty set
let t = new Set([1, s]); // A new set with two members
let unique = new Set("Mississippi"); // eleminate the duplicate elements
let r = new Set(s) // a new set that copies the elements of s
let newSet = new Set();
newSet.add(1);
newSet.delete(1);
newSet.add([1,2,3])
newSet.delete([1,2,3]) // false: the array in the set is different ( different reference )
newSet.add('a').add('b').add('c'); 
console.log(unique.size, newSet)
// console.log(t)
newSet.clear(); // Remove everything from the set


/* In practice, the most important thing we do with sets is not to add and
 remove elements from them, but to check to see whether a specified
 value is a member of the set. We do this with the has() method: */

let oneDigitPrimes = new Set([2,3,5,7]);
console.log(oneDigitPrimes.has(2))
oneDigitPrimes.has(3) // => true: so is 3
oneDigitPrimes.has(4) // => false: 4 is not a prime
oneDigitPrimes.has("5") // => false: "5" is not even anumber