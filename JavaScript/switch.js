let month = prompt("Enter your birth month");
if (month === "" || month === null) {
    console.log("Please enter your birth month!");
} else {
switch(month.toLocaleLowerCase().trim()) {
    case "january":
        console.log("you are Dante");
        break;
    case "february":
        console.log("you are Vergil");
        break;
    case "march":
        console.log("you are Leon");
        break;
    case "april":
        console.log("you are Chris");
        break;
    case "may":
        console.log("you are Jill");
        break;
    case "june":
        console.log("you are Ada");
        break;
    case "july":
        console.log("you are Mario");
        break;
    case "august":
        console.log("you are Johan");
        break;
    case "september":
        console.log("you are Talia al Ghul");
        break;
    case "october":
        console.log("you are Lara Croft");
        break;
    case "november":
        console.log("you are Morrigan Aensland");
        break;
    case "december":
        console.log("you are Raj");
        break;
    default:
        console.log("Enter a valid month");
}
}