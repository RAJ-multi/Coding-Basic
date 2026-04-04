// question: The following code is supposed to calculate the total of numbers from 1 to 5, but it contains a bug that causes it to run indefinitely. Identify and fix the bug.

let total = 0;

for (let i = 1; i <= 5; i--) {
    total += i;
}

console.log("Total is: " + total);

// solution: The bug in the code is that the loop is decrementing `i` instead of incrementing it. This causes the loop to run indefinitely because `i` will never reach 5. To fix the bug, change `i--` to `i++` in the for loop.
// corrected code:

let t = 0; // variable name changed to avoid confusion with total

for (let i = 1; i <= 5; i++) {
    t += i;
}

console.log("Total is: " + t);