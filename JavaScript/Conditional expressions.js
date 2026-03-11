let name = prompt("Enter your name");
let age = prompt("Enter your age");  // This is still a string

if (age === "" || age === null) {  
    alert(`${name}, please enter your age!`);
} else {
    age = Number.parseInt(age); // now convert to number

    if (age <= 0 || age > 100 || isNaN(age)) {
        alert(`${name}, please enter a valid age.`);
    } 
    else if (age < 18) {
        alert(`${name}, you are a minor.`);
    } 
    else {
        alert(`${name}, you are an adult.`);
    }
}