// Arithmetic Operators

let a = 45
let b = 10
console.log("a + b =", a + b) // Addition
console.log("a - b =", a - b) // Subtraction
console.log("a * b =", a * b) // Multiplication
console.log("a / b =", a / b) // Division
console.log("a % b =", a % b) // Modulus (Remainder)
console.log("a ** b =", a ** b) // Exponentiation

// Increment and Decrement
let c = 16
console.log("c =", c)
c++ // Post-increment: c is used first, then incremented
console.log("After increment, c =", c)
c--
console.log("After decrement, c =", c)

++c // Pre-increment: c is incremented first, then used
console.log("After pre-increment, c =", c)
--c
console.log("After pre-decrement, c =", c)


// Assignment Operators

let Raj = 20
Raj += 6 // Raj = Raj + 6
console.log("After += 6, Raj =", Raj)

Raj -= 1 // Raj = Raj - 1
console.log("After -= 1, Raj =", Raj)


// Comparison Operators

let Raj_math_score = 100
let Raj_biology_score = 80

console.log("Is Raj's math score greater than his biology score?", Raj_math_score > Raj_biology_score) // Greater than
console.log("Is Raj's math score is equal to his biology score?", Raj_math_score == Raj_biology_score) // Equal to
console.log("Is Raj's math score is not equal to his biology score?", Raj_math_score != Raj_biology_score) // Not equal to
console.log("Is Raj's math score is strictly equal to his biology score?", Raj_math_score === Raj_biology_score) // Strict equality (checks value and type)


// Logical Operators

let Raj_HSC_GPA = 69
let Raj_SSC_GPA = 78
console.log("Did Raj pass both HSC and SSC?", (Raj_HSC_GPA >= 40) && (Raj_SSC_GPA >= 40)) // Logical AND

// !false is true, !true is false


//alternative way to check if Raj passed either HSC or SSC
console.log("you can ",(Raj_HSC_GPA >= 40? "pass HSC" : "fail HSC"), "and ", (Raj_SSC_GPA >= 40? "pass SSC" : "fail SSC")) // Logical OR