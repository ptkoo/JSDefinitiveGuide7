/* 
The every() and some() methods are array predicates: they apply a
predicate function you specify to the elements of the array, then return
true or false.

The every() method is like the mathematical “for all” quantifier ∀:

The some() method is like the mathematical “there exists” quantifier
∃:

Note also that, by mathematical convention, every() returns true and some returns false when
invoked on an empty array.

*/

let a = [1,2,3,4,5];
console.log("Every value less than 10?: ",a.every(x => x<10)) ;
console.log("Multiple of two?: ",a.every(x => x%2 === 0)) ;
console.log("Is there any multiple of two?: ", a.some((x) => a%2 === 0))
console.log("a has NaN?: ", a.some(isNaN));