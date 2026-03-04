console.log("Hello World!");
var a = 67; // var is function scoped and can be redeclared and updated and it was used before ES6 ( ECMAScript 2015 )
// var a = 90; // this will not throw an error because var can be redeclared and updated
let b = 45; // let is block scoped and can be updated but cannot be redeclared and it was introduced in ES6
// let b = 100; // this will throw an error because let cannot be redeclared
const author = "Raj"; // const is block scoped and cannot be updated or redeclared and it was introduced in ES6
// author = "John"; // this will throw an error because const cannot be updated
console.log(a);

{
    var a = 90; // 
    console.log(a);
}

console.log(a); // var is function scoped so it will be updated to 90

{
    let b = 100; // let is block scoped so it will not affect the value of b outside the block
    console.log(b);
}

console.log(b); // let is block scoped so it will still be 45 outside the block