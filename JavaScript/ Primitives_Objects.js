// in JavaScript there are two types of data types
// 1. Primitive data types ( there are 7 primitive data types in JavaScript)
// 2. Objects

// Primitive data types are immutable, which means that they cannot be changed after they are created.
// 7 types of primitive data types in JavaScript are and remember tricks "NNBBSSU":
// 1. Number
// 2. Null
// 3. Boolean
// 4. BigInt
// 5. String
// 6. Symbol
// 7. Undefined

let a = 10; // Number
let b = null; // Null
let c = true; // Boolean
let d = BigInt("9007199254740991"); // BigInt
let e = "Hello"; // String
let f = Symbol("id"); // Symbol
let g; // Undefined // when we declare a variable without assigning a value to it, it is undefined. like let g; or let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof a); // number


// Objects are mutable, which means that they can be changed after they are created.
const item = {
    name: "Raj",
    age: 20,
    harry: "understand",
}

console.log(item["name"]); // Raj