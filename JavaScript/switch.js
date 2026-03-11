let month = prompt("Enter your birth month");
if (month === "" || month === null) {
    alert("Please enter your birth month!");
} else {
switch(month.toLocaleLowerCase().trim()) {
    case "january":
        alert("you are Dante");
        break;
    case "february":
        alert("you are Vergil");
        break;
    case "march":
        alert("you are Leon");
        break;
    case "april":
        alert("you are Chris");
        break;
    case "may":
        alert("you are Jill");
        break;
    case "june":
        alert("you are Ada");
        break;
    case "july":
        alert("you are Mario");
        break;
    case "august":
        alert("you are Johan");
        break;
    case "september":
        alert("you are Talia al Ghul");
        break;
    case "october":
        alert("you are Lara Croft");
        break;
    case "november":
        alert("you are Morrigan Aensland");
        break;
    case "december":
        alert("you are Raj");
        break;
    default:
        alert("Enter a valid month");
}
}