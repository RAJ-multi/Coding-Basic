function oneplusavg(x, y) {
    alert("The average of " + x + " and " + y + " plus 1 is: ");
    return (x + y) / 2 + 1;  // for round the code is return Math.round((x + y) / 2 + 1);
}
// it will return the average of x and y plus 1 and x, y can be any number. For example, if x is 4 and y is 6, the function will return (4 + 6) / 2 + 1 = 5 + 1 = 6.

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

if (isNaN(num1) || isNaN(num2)) {
    alert.error("Oops! One of the inputs wasn't a valid number.");
} else {
    let result = oneplusavg(num1, num2);
    alert(result);
}

//altranative way instead of fubction:

const sum = (x, y) => {
    return (x + y) / 2 + 1;
}

// function without arguments:
const hello = () => {
    alert("Hello, World!");
}
hello(); // This will display an alert with the message "Hello, World!" when called.

