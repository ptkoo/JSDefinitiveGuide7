let oneDigitPrimes = new Set([2,3,5,7]);
let sum = 0;

for(let p of oneDigitPrimes){
    sum += p;
}
console.log(sum)

// Because Set objects are iterable, you can convert them to arrays and
// argument lists with the ... spread operator:

console.log([...oneDigitPrimes])
console.log(Math.max(...oneDigitPrimes))

// In addition to being iterable, the Set class also implements a
// forEach() method that is similar to the array method of the same
// name:

let product = 1;
oneDigitPrimes.forEach(n => {product *= n; })
console.log(product)