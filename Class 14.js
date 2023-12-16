
// parseFloat("20") //It converts string to numbers.
console.log(parseFloat('12'))

// +"20" //It will convert string to number.
console.log(+'20')

//Number('14') //It will also converts strings to numbers.
console.log(Number('14'))

// let userAge = prompt('Your Age')

// let nextYearsAge = userAge

// alert('You will be ' + (++userAge) +  ' years old next year.')

let number=prompt('Enter Your Number')

// if (number % 2 === 0){
//  alert('Its even number.')
// }
// else{
//     alert('It is odd.')
// }


// let message;    

// switch (number % 2) {
//     case 0:
//         message = 'It\'s even number.';
//         break;
//     default:
//         message = 'It\'s odd.';
// }

// alert(message);



switch (number % 2) {
    case 0:
        alert('It\'s even number.');
        break;
    default:
        alert('It\'s odd.');
}
