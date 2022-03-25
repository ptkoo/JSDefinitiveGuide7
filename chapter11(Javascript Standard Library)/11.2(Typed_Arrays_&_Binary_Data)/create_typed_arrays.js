// Each of the typed array constructors has a BYTES_PER_ELEMENT
// property with the value 1, 2, 4, or 8, depending on the type.


let bytes = new Uint8Array(1024); // 1024 bytes
let matrix = new Float64Array(9); // 3*3 matrix
let point = new Int16Array(3); // A point in 3D space
let rgba = new Uint8ClampedArray(4); // A 4-byte RGBA pixel value
let sudoku = new Int8Array(81); // A 9x9 sudoku board

let white = Uint8ClampedArray.of(255, 255, 255, 0); // RGBA opaque white
let ints = Uint32Array.from(white)
let ints1 = new Uint32Array(white)
console.log(ints)
console.log(ints1)

// When you create a new typed array from an existing array, iterable, or
// array-like object, the values may be truncated in order to fit the type
// constraints of your array. There are no warnings or errors when this
// happens:

// Floats truncated to ints, longer ints truncated to 8 bits
console.log("Values truncated: ", Uint8Array.of(1.23, 2.99, 45000)) // => new Uint8Array([1, 2, 200])


let buffer = new ArrayBuffer(1024*1024);
console.log("buffer byte length", buffer.byteLength) // => 1024*1024; one megabyte of memory
let asbytes = new Uint8Array(buffer); // Viewed as bytes
let asints = new Int32Array(buffer); // Viewed as 32-bit signed ints
let lastK = new Uint8Array(buffer, 1023*1024); // Last kilobyte as bytes
let ints2 = new Int32Array(buffer, 1024, 256); // 2nd kilobyte as 256 integers
console.log(ints2)