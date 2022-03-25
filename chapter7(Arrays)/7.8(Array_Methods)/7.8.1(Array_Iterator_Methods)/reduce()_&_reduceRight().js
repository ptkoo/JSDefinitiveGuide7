/*
The reduce() and reduceRight() methods combine the
elements of an array, using the function you specify, to produce a
single value. This is a common operation in functional programming
*/

let a = [1, 2, 3, 4, 5];
console.log("Sum of values in 'a' array: ", a.reduce((x,y) => x+y, 0));
console.log("The product the values: ", a.reduce((x,y) => x*y, 1));
console.log("The largest the values: ", a.reduce((x,y) => (x > y) ? x : y));

