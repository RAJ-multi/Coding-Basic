let n = prompt("Enter a number"); 
n = Number.parseInt(n);

if (isNaN(n)) {
    console.error("Oops! That wasn't a valid number.");
} else {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
        console.log((i+1),"+" )
    }
    console.log("Sum of first", n, "natural numbers is:", sum);
}
