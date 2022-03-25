/* The filter() method returns an array containing a subset of the
elements of the array on which it is invoked. */

// The function you pass to it should be predicate: a function that returns true or false.

let a = [5, 4, 3, 2, 1];

let filteredArray = a.filter((x) => {
  return x > 3;
})

let evenNumber = a.filter((x,i) => x%2 === 0 )

console.log("Filtered Array:", filteredArray);
console.log("Even Number:", evenNumber);

// To close the gap in a sparse array
let sparse = [1,,,,,,,2,3,4,5];
let dense = sparse.filter(() => true );
console.log("Dense Array: ", dense);

// to close gaps and remove undefined and null elements

let unstructuredArray = [1,2,null,,,,3,4,5,6];
let structuredArray = unstructuredArray.filter((x) => x !==undefined && x !== null)

console.log("Structured Array", structuredArray)