/* 
These two methods stop iterating the first time the predicate finds an
element.
When that happens, find() returns the matching element, and findIndex() returns the index of the matching element. If no
matching element is found, find() returns undefined and findIndex() returns -1
*/

let a = [1,2,3,4,5];

let numberThreeIndex = a.findIndex( x => x === 3 )
let lessThanZeroIndex = a.findIndex( x => x < 0)
let multipleOfFive = a.find(x => x%5 === 0);
let multipleOfSeven = a.find(x => x%7 === 0 )

console.log("Number Three Index: ", numberThreeIndex);
console.log("Less Than Zero Index: ", lessThanZeroIndex);
console.log("Multiple of five: ", multipleOfFive);
console.log("multiple of seven: ", multipleOfSeven);


