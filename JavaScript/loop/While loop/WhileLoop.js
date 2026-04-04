let n = prompt("Enter a number"); 
n = Number.parseInt(n);

if (isNaN(n)) {
    console.error("Oops! That wasn't a valid number.");
} else {
    let i = 0;
    while(i <= n){
        console.log((i+1),"+" )
        i++;
    }
} // The while loop will check the condition first and then execute the block code, so if the user enters a number less than 0, the block code will not run at all.
// uses:/ 1. When you want to execute a block of code only if a certain condition is true.
// 2. When you want to repeat a block of code an unknown number of times, as long as a certain condition is true.