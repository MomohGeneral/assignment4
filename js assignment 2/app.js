'use strict'


// Task 1
// using data below...calculate the BMI for both precious and Momoh...and also with a conditional statement....if Momoh’s BMI is more dan Precious...print to d console Momoh’s Bmi is greater than Precious,else
// bmi = mass / height ** 2
// Given dt Momoh/Precious height   10/9

// Momoh/Precious weight 60/70
// Hint

// Use if statement😉

let momohHeight = 10;
let momohweigt = 60;

let momohBMI = (momohHeight/momohweigt)**2
console.log(momohBMI);

let preciousHeight = 9;
let preciousWeight = 70;
let preciousBMI = (preciousHeight/preciousWeight)**2
console.log(preciousBMI);

if (momohBMI > preciousBMI){
    console.log('Momoh BMI is greater than precious');
}
else {
    console.log('Precious id greater');
}



// Task 2     

//  Research ternary operators today 😉

// And then by next class you present what u researched👍👍

// Ans

// The ternary operator is an operator that exists in programming languages, which takes three operands rather than the typical one or two that most operators use. It provides a way to shorten a simple if else block. For example, consider the JavaScript code below.

let age = 18;
// if (age >= 18) {
//     console.log('u can vote');
// };

// else {
//     console.log('comot from here');
// };

let message = age >= 18 ? ['u can vote'] : ['comot from here'];
console.log(message);



// Task3
// We have 2 tech teams(Spartans and alpha)

// They compete against each other 3 times, the winner with highest average score wins the trophy.

// Calculate the average score for each team using data below.

// Spartans score - 60, 70, 80

// Alpha score - 88, 91, 120

// Compare the teams average score to determine the winner of the competition and print to the console...

// Hint, use an if, else statements

// and also ternary opertor
// ===========================================================================
// Ans

// Let Average = Sum of Values/Number of Values
let spartansScore = [60 + 70 + 80];
console.log(spartansScore);

let spartansAverage = [spartansScore/3];
console.log(spartansAverage);

let alphaScore = [88 + 91 + 120];
console.log(alphaScore);

let alphaAverage = [alphaScore/3];
console.log(alphaAverage);

if (spartansAverage > alphaAverage){
    console.log('Spartans is the winner if the Trophy');
}
else {
    console.log('Alpha is the winner of the Trophy');
}

let winners = spartansAverage > alphaAverage ? ['Spartans is the winner if the Trophy'] : ['Alpha is the winner of the Trophy']
console.log(winners);


