/* 
The map() method passes each element of the array on which it is
invoked to the function you specify and returns an array containing the
values returned by your function.
*/ 

let a = [1, 2, 3];

let newArray = a.map( x => x*x);

console.log("new Array:", newArray);
