let n = prompt("Enter a number"); 
n = Number.parseInt(n);

if (isNaN(n)) {
    console.error("Oops! That wasn't a valid number.");
} else {
    let i = 0;
    do {
        console.log((i+1),"+" )
        i++;
    } while(i <= n);
} // The do-while loop will execute the block code first and then check the condition, so it will run at least once even if the user enters a number less than 0. so it will print "+" at least once.
// uses:/ 1. When you want to execute a block of code at least once, regardless of the condition.
// 2. When you want to ensure that the code runs at least once before checking the condition.