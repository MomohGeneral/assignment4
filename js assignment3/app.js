"use strict"
// A team only wins if it has atleast double the average score of the other team otherwise no team wins.
// 1) create an arrow function 'calcAverage' to calculate the average of 3 scores.
// 2) use the function to calculate the average for both teams.
// 3) Create a function 'checkWinner' that takes the average score of each team as parameters ('aveAlpha' and 'aveSpartan') and then log the winner to the console together with the victory points, according to the rule above, i.e Spartan wins(30, vs 13)
// 4) use the checkWinner function to determine the winner for both Data
// 5) ignore draws this time
// Test Data 1 -- Alpha scores 43, 21 and 73. Spartan scores 63,55, and 47
// Test Data 2 -- Alpha scores 87,55 and 39. Spartan scores 21,33 and 2
// Expo
// To calculate average of 3 values and them all and divide by 3
// Expo 2
// To check if a is atleast double number b, check for a >= 2 * B .... apply this to the teams average score -->

// function addNumbers (){
//     let nums = 1 + 2
//     console.log(nums);
//   }

// const companies = [
//   { name: 'company One', category: 'Finance', start: 1981, end: 2003 },
//   { name: 'company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'company Eight', category: 'technology', start: 1981, end: 1989 },
// ]

// 1)log to the console the name of the companies only
// 2)log to the console companies that lasted 10 years or more

// const age = [30,15,10,5,40,80,2,20,21,25]

// 3)log to your console again people with age greater or equal to 21

// Please use higher order functions only


function callBackFuction (func) {
    func();
    // func();
    // func();
    // func();
    // func();
    // func();
    // func();
    // func();
}

function compannies(){
    console.log('company one', 'company two','company three','company four','company five','company six','company seven','company Eight');
}

callBackFuction(compannies)



