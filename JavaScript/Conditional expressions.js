prompt ("Enter your name");
let a = prompt ("Enter your age"); // Conditional (ternary) operator and it ask the user to enter their name and age.
console.log(typeof a); 
a = Number.parseInt(a); // It converts the age from a string to a number.
alert (a >= 18 ? "You are an adult." : "You are a minor."); // It checks if the age is greater than or equal to 18 and displays a message accordingly.
if (a < 18) {
    alert ("You are a minor.");
} else {
    alert ("You are an adult.");
}

if ( a <= 0) {
    alert ("Please enter a valid age.");
}