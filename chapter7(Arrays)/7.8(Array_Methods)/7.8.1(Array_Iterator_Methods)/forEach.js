/* The forEach() method iterates through an array, invoking a
function you specify for each element. */

let data = [1, 2, 3, 4, 5], sum = 0;

console.log("before incrementing:", data)


data.forEach((element) => {
    // Compute the sum of the elements of the array
    sum += element;
})

// Now increment each array element
data.forEach((e, i, a) => {
    a[i] = e + 1;
})
console.log(sum)
console.log("After Incrementing", data)