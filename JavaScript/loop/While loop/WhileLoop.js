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
}