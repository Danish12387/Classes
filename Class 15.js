// let userage = prompt("Enter your age")
// if(userage >=18 ){alert("you are an adult.")}
// else if(userage <18){alert("you are minor.")} 
// else{alert("Invalid age.")}

let userpercentage = prompt("Enter your percentage.")

switch (true) {
    case userpercentage > 90 && userpercentage <= 100:
        alert("Your grade is A+.")
        break;
    case userpercentage > 80 && userpercentage <= 90:
        alert("Your grade is A.")
        break;
    case userpercentage > 70 && userpercentage <= 80:
        alert("Your grade is B.")
        break;
    case userpercentage > 60 && userpercentage <= 70:
        alert("Your grade is C.")
        break;
    case userpercentage > 50 && userpercentage <= 60:
        alert("Your grade is D .")
        break;
    case userpercentage > 44 && userpercentage <= 50:
        alert("Your grade is E.")
        break;
    case userpercentage > 100:
        alert("Invalid Percentage. Please enter a number between 1-100.")
        break;
    case userpercentage <= 44:
        alert("You are fail.")
        break;
    default:
        alert("Please enter a valid number.")
}

// if (userpercentage > 90 && userpercentage <= 100) {
//     alert("your grade A+.")
// }
// else if (userpercentage > 80 && userpercentage <= 90) {
//     alert("your grade is A.")
// }
// else if (userpercentage >= 70 && userpercentage <= 80) {
//     alert("your grade is B.")
// }
// else {
//     alert("you are fail.")
// }