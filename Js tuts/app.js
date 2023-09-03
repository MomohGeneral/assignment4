"use strict"

import {DATA,PEOPLE} from './db.js';


// document.querySelectorAll('.button-js').forEach((item)=>{
//     item.addEventListener('click',()=>{
//         alert('Hello world')
//     })
// })


// 19th Aug 2023

// VARIABLES, VALUES AND DECLARATORS
// Variables are storage facilities for storing data or values
// Values are just piece of data
// Declarators r used in declaring variables(let,const and var)

// let keyword
// console.log('hello world');
// console.log(2023);
let firstName = 'Presh';
console.log(firstName);
let lastName = 'Obi';
console.log(lastName);
let year = 2023;
console.log(year);

// Var keyword
var tribe = 'Urhobo';
console.log(tribe);

// const keyword
const PIE = 3.142;
console.log(PIE);

// LET vs CONST vs VAR
// VAR --- declares, re-declares and re-assigns
var gender = 'Male';
var gender = 'Female';
gender = 'others';
console.log(gender);

// state = 'kaduna';
// console.log(state);

// LET --- declares and re-assigns
let animal = 'rat';
// let animal = 'mouse'
animal = 'elephant';
console.log(animal);

// CONST --- declares
const FULLNAME = 'Momoh';
// const fullname = 'mmm'
// let fullnamE
// const FULLNAME = 'ASARI'
// FULLNAME = 'DOKUBO'
console.log(FULLNAME);

// constraints in Variable Naming

// ---- Variable names can only contain letters, numbers, underscore, dollar sign but cant start with a number
// ---- Dont give spaces btw variable names, use carmel casing
// ---- Reserved names cant be used as a variable name since it is reserved
// ---- By convention,dont start variable names with uppercase except for const
// ---- Use descriptive names when calling out variables
// ======================================================
// let 1laptops = 'hp';
// console.log(laptops1);
// let lastName = 'Etukudo'

// let color = 'red'

// DATA TYPES
// Strings ---- Used for storing letters or text. they r denoted by single('') or double quote("")
// Number  ---- Used for  numbers(can hold decimal and whole numbers)
// Boolen  ---- True or False
// Null    ---- Empty
// Undefined
// Objects(Arrays, Dates) ---- For holding more than one value and denoted by {}
// Symbols
// BigInt

// let child = null
// let children 

// STRINGS
let firstName2 = 'Austin';
let lastName2 = 'Papi'

let fullname = firstName2 + ' ' + lastName2
// let fullname = firstName2 + lastName2

console.log(fullname);

// String properties and methods
// Properties
let email = 'askjeeves@hotmail.com';
console.log(email);
console.log(email.length);

// Getting position properties
let city = "surulere";
console.log(city[4]);
console.log(city.length);

// Methods
let trainee = 'lekan';
console.log(trainee);

// to uppercase()
console.log(trainee.toUpperCase());
// let trainneUpperCase = trainee.toUpperCase()
// console.log(trainneUpperCase);

// to lowerCase()

let newTrainee = "GIFT";
console.log(newTrainee);

// indexOf()

let newEmail = 'taechstudio@gmail.com';
console.log(newEmail);

console.log(newEmail.indexOf('a'));

// lastIndexOf()
let applicant = 'Racheal';
console.log(applicant.lastIndexOf("a"));

// slice()
let religion = 'Christianity';
console.log(religion);
console.log(religion.slice(8,11));

// replace()
let profession = 'developer';
console.log(profession.replace('d','z'));
// startWith()
let messages = 'hello,world';
// console.log(messages.startsWith('hello'));

// Numbers

// =========================================================
// 20th Aug 2023
// ==========================================================
let year2 = 2023;
console.log(year2);

let score = 100;
console.log(score);

let score2 = 200;
console.log(score2);

// Math operators
// +, -, *, **, %

let finalScore = score + score2;

console.log(finalScore);

let minusScores = score2 - score;
console.log(minusScores);

let  multiplyScores = score * score2;
console.log(multiplyScores);

let divideScores = score2 / score;
console.log(divideScores);

let number1 = 10;
let number2 = 3;
let indicesScores = number1 ** number2;
console.log(indicesScores);

let modulus = number1 % number2;
console.log(modulus);

// Decremental and incremental

// let newYear = year + 1;
// console.log(newYear);

year++
year -= 2

console.log(year);

// string concatenation vs Template litrals or string literals(uses backticks(``) and interpolation(${}))

let blog = 50;

let statement = 'the blog has' + ' ' + blog + ' ' + 'likes';

console.log(statement);
// Momoh did you know Precious attends aguda grammar school and scored 90 in her test
let traineeScore = 90;
let traineeName = 'Precious';
let school = 'Aguda grammar school';
let response = 'Momoh did you know' + ' ' + traineeName + ' ' + 'attends' + ' ' + school + ' ' + 'and scored' + ' ' + traineeScore + ' ' + 'in her test';
console.log(response );

// template literals
let newResponse = `Momoh did you know ${traineeName} attends ${school} and scored ${traineeScore} in Her test`;
console.log(newResponse);


// Arrays ---- they are used for storing collections of strings, numbers,boolens infact all data types can be stored in an array, they are rep by a squre bracket []

// let favFood1 = 'Beans';
// let favFood2 = 'Rice';

let favFoods = ['Beans', 'Rice','Ewedu','Fufu'];
console.log(favFoods);

// Array properties

console.log(favFoods.length);
console.log(favFoods[3]);
favFoods[3] = 'Eba';
console.log(favFoods);

// Array methods
// includes()
let includes = favFoods.includes('corn');
console.log(includes);
// join()
let join = favFoods.join('-')
console.log(join);
// concat()
let concat = favFoods.concat(['banga','pepper-soup']);
console.log(concat);

// push()
let push = favFoods.push('Efo-riro','okro')

console.log(push);
console.log(favFoods);

// pop()
let pop = favFoods.pop();
let pops = favFoods.pop()
console.log(pop);
console.log(favFoods);

let colors = [];
console.log(colors.length);
colors.push('blue')
console.log(colors.length);
console.log(colors);
colors.push('green')
console.log(colors);


// spread operator(...) and destructuring
let numbers = [1,2,3,4,5,6];
let newNumbers = [7,8,9,10];
let conctNumbers = numbers.concat(newNumbers)
console.log(conctNumbers);
// with spread operator
let spreadNumbers = [...numbers, ...newNumbers];
console.log(spreadNumbers);

// destructuring
let names = ['Momoh','Gift','Stanley','Precious','Izu','Lekan','Marshal'];
console.log(names);
console.log(names[1]);
console.log(names[6]);

// here we go

let [zero,one,two,three,four,...rest] = names
console.log(zero,one,two,three,four);
console.log(...rest);
// console.log(blue);
// console.log();

// typeof
let scores = 50
console.log(scores);
console.log(typeof scores);

let pikinName = 'Seun'
console.log(typeof pikinName);

let lappy = ['hp','dell']
console.log(typeof lappy);

let cart = null
console.log(typeof cart);

let destination 

console.log(typeof destination);

// =============================================
// 26th Aug 2023
// =============================================
// Type conversion and coercion
// CONVERSION is when we manually convert from one data type to another and COERCION is when Js does d conversion behind d scenes for us.

// Conversion
let inputYear = "1985";
console.log(inputYear);
console.log(typeof inputYear);

let newNumber = Number("1986") ;
let addedNumber = newNumber + 18;
console.log(typeof newNumber);
console.log(addedNumber);

// Converting sth thats nt actually a number
let personName =Number("Eggy") ;
console.log(personName);
console.log(typeof personName);

// Coercion
console.log('I am 56 year\'s old');
// Without coercion, the above statement would be written as ...
console.log("I am " + String(56) + " years old");

console.log("22" - 2);
console.log("22" > 3);
console.log("22" > "2");

console.log("22" + 1);

let z = "1" + 1;
console.log(typeof z);
let w = z - 1;
console.log(w);

// COMPARISON OPERATORS
// >, <, ==(loose comparison operator), ===(strict comparison operator), !=, !==, >=, <=,

const YEAR = 2023;
console.log(YEAR > 2001);
console.log(YEAR < 2001);
console.log(YEAR >= 2001);
console.log(YEAR <= 2001);
console.log(YEAR != 2001);
console.log(!true);

// loose comparison operator (==) --- Only cheqs for d value and not data type
let SCORE = "100";
let SCORE2 = SCORE == 100;
let SCORE3 = SCORE != 100;
console.log(SCORE2);
console.log(SCORE3);

// Strict comparison operator (===) cheqs for both values and data types

let SCORE4 = SCORE === 100;
let SCORE5 = SCORE !== 100;
console.log(SCORE4);
console.log(SCORE5);

// control flow (Loops(for,while, for-in, for-of)) and Conditional statements(if, else, else-if, switch,ternary operator)

// for loop --- Uses the FOR keyword, initializer, condition, final expression and block of code

for (let i = 2; i < 10; i++){
    console.log(i);

}

let guys = ["Izu",'Lekan','Momoh','Gift'];

for (let i = 0; i < guys.length; i++){
    console.log(guys[i].toUpperCase());
}
// guys[0]
// guys[1]

// while loop
let i = 0;
while(i < guys.length){
    console.log(guys[i]);
    i++

}

// For-in loop
let babes = ["Precious","Sandra","Beauty","Joan"];

for(let p in babes){
    console.log(babes[p]);
}

// for-of loop
for(let b of babes){
    console.log(b);
}


let Colors = ["blue", "pink", "black", "red"];

for(let B of Colors){
    console.log(B)
}

// Conditional statements

let AGE = 5;

if(AGE === 50){
    console.log("You dn old");

}else{
console.log('not koret');
}

let password = "pas";

console.log(password.length);

if(password.length >= 12){
    console.log("thats a very strong password");
}else if(password.length >= 8){
    console.log("password is good");

}else if(password.length >= 4){
    console.log("password is weak");
}else{
    console.log("please type in a password from 8 chrs and above");

}

// Logical operators
// ||(double pipe) means logical OR
// &&(ampersan) means logical AND

// FOR LOGICAL AND
// true && true = True
// true && false = false
// false && true = false
// false && false = false

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// FOR LOGICAL OR
// true || true = true
// true || false = true
// false || true = true
// false || false = false


let PASSWORD = "pass@";

if (PASSWORD.length >= 7 && PASSWORD.includes("@")) {
  console.log("super strong password");
} else if (PASSWORD.length >= 7 || PASSWORD.includes("*")) {
  console.log("very strong password");
} else if (
  PASSWORD.length >= 5 &&
  PASSWORD.includes("-") &&
  PASSWORD.length > 6 &&
  PASSWORD.length >= 2
) {
  console.log("password is good");
} else {
  console.log("password isnt good enuff");
}

let results = [20, 40, 0, 50, 100, 15, 4, 6, 8, 9];

for (let i = 0; i < results.length; i++) {
  if (results[i] === 0) {
    continue;
  }
  if (results[i] === 15) {
    break;
  }
  console.log(results[i]);
}

// if statements vs switch statement

let points = "A";
if (points === "A") {
  console.log("you got A");
} else if (points === "B") {
  console.log("you got B");
} else if (points === "C") {
  console.log("you got C");
} else if (points === "D") {
  console.log("you got D");
} else {
  console.log("Guy you don fail. try dey attend class aaabeeeg!");
}

// Switch
let GRADE = "B";

switch (GRADE) {
  case "A":
    console.log("you got A");
    break
  case "B":
    console.log("you got B");
    break
  case "C":
    console.log("you got C");
    break
  case "D":
    console.log("you got D");
    break
  default:
    console.log("Guy you don fail. try dey attend class aaabeeeg!");
}

// Global scope, Block scope and Function scope

let myAge = 100;

if(myAge){
    let myAge = 200
    console.log('inside 1st block of code: ' + myAge);
    if(myAge){
        let myAge = 300
        console.log('inside 2nd block of code: ' + myAge);
    }

}

console.log('outside block of code: ' + myAge);

// Functions
// Functions are simply re usable block of code that perform a given task. They have to be called or invoked b4 dey can work.
// There are 3 types of ftns (Declaration, Expression and Arrow Ftns)
// A ftn is written by using a function keyword, a ftn name and a block of code

// Ftn Declaration

getTeam()
function getTeam (){
    let name = "Precious";
    console.log(name);
}

// invoking or runing or calling a ftn

// Ftn expression

let getSpeaks = function(){
    let country = "Senegal";
    console.log(country);
}
getSpeaks()

// Arrow ftn

let newTrainer = ()=>{
    let myColor = "yellow";
    console.log(myColor);
}
newTrainer()

// Parameters and arguments in ftns

function getName (userName){
    let person = "Hi, my name is " + userName
    console.log(person);
}

getName('Precious')

// ===============================

let getSpeaker = function(customerName){
    let person = `Hello, my name is ${customerName}`;
    console.log(person);

}

getSpeaker("Stan")

// ===================================
let getAge = (nameOfClient,clientYearOfBirth)=>{
    let clientAge = `${nameOfClient} is ${2023 - clientYearOfBirth} years old`;
    console.log(clientAge);

}

getAge('Precious', 2000)
getAge("Momoh", 1999)

// Returning variables from a ftn

let getProgramme = () =>{
    let stack = "javascript fullstack";
    console.log(stack);
    return stack
}

let sss = getProgramme()

let newApplicant = `Hi, Gift did you know that Techstudio offer ${sss} ?`

console.log(newApplicant);

// ====================================
let fees  = [60,80,0,120];
let peeps = ["Sam","Rhema","Kruz","Dan"];

function getDetails (sth,newSth){
    for(let i = 0;i < sth.length; i++ ){
        if(sth[i] === 0){
            continue
        }
        console.log(sth[i]);
    }
    for(let i = 0;i < newSth.length; i++ ){
        console.log(newSth[i]);
    }
    
}

getDetails(fees, peeps)


// =============================================
// 27th Aug 2023
// =============================================

function addNumbers (){
  let nums = 1 + 2
  console.log(nums);
}

addNumbers()

let subNums = function(){
  let num1 = 2 -1 ;
  console.log(num1);

}

subNums()

let divNums = sth=> console.log(2 / sth);
divNums(2)

// Object ------ object literal, Math Objects
// DOM (Document Object Model)

// Objects have key-value pairs and r denoted by curly braces({})

let preciousCustomer = {
  firstName : "Momoh",
  lastName: "Agada",
  complexion: "Dark",
  friends : ["Martel","Flirt","Smirnoff"],
  canDrive : true,
  isBlind : false,
  age : 2023 - 1960,
  date : Date()
}

console.log(preciousCustomer);
console.log( typeof preciousCustomer);

// Acessing objects (Dot vs bracket notation)

let giftTrainee = {
  firstName : "Izu",
  lastName : "Nwafor",
  skinColor : "Dark",
  tribe : "Igbo",
  age : 58,
  address : {
    stateOfOrigin : "Enugu",
    stateOfResidence : "Lagos",
    lga : "Surulere",
    dogs:{
      name:"bingo"
    }
  },
  favFoods: ['Banga', "abacha", "opka", ],
  canDrive : true,
  numberOfKids : null,
  profession : "Senior Frontend Devloper"

}

console.log(giftTrainee);

// using the dot notation

let newGiftTraineeFirstName = giftTrainee.firstName.toUpperCase();
console.log(newGiftTraineeFirstName);

let newGiftTraineeFavFoods = giftTrainee.favFoods[0]
console.log(newGiftTraineeFavFoods);

let newGiftTraineeAddress = giftTrainee.address.dogs.name
console.log(newGiftTraineeAddress);

// Using d bracket notation
let bracketGiftTrainee = giftTrainee["address"]["dogs"]['name'].toUpperCase();
console.log(bracketGiftTrainee);

// Destructuring objs

let accounts = {
  name:'Uloma',
  toes:10,
  stateOfMind : "extra cool",
  statusOfLove : "shey shey bere"
};

console.log(accounts);

console.log(accounts.name);
console.log(accounts.statusOfLove);
// using destructuring
let {name , toes, stateOfMind, statusOfLove} = accounts

console.log(name);


// Object Method

let passenger = {
  firstName : "Sam",
  lastName : "Peter",
  year: 1989,
  busFareInNaira : 200,
  poscketMoneyInNaira: 1000,
  currentDate : Date(),
  calBal: function(){
    let statememnt = `${this.firstName} has ${this.poscketMoneyInNaira - this.busFareInNaira} Naira`;
    return statememnt
  }
}

console.log(passenger.calBal());

// console.log(this);
// Higher Order Ftns and Call back ftns
// Higher Order ftns accepts anoda ftn as an argument or returns anoda ftn as a result
// Callback ftn r ftns passed to anoda ftn as an argument and executed inside d ftn

function getHello (){
  return 'Hi';
}

let rr = getHello()

let getReport = (nth)=>{
  console.log(nth + " we dn dey like dis");
}

getReport(rr)

// Higher Order Ftns (forEach, map, filter, find, findIndex, reduce)
for(let i = 0; i < DATA.length; i++){
  console.log(DATA[i]);
}


// forEach()
// It doesnt return a new array
// It loops

DATA.forEach((index,arr,datum)=>{
  console.log(index);
  console.log(arr);
  console.log(datum);

})

PEOPLE.forEach(function(person){
  console.log(person);

})

// Map method
// It returns an array
// It doesnt change the size of d original array
// It uses values from the original Array
// It loops

let anotherPerson = PEOPLE.map(person=>  person)
console.log(anotherPerson);

// filter()
// It loops
// It returns based on a condition

for(let i = 0; i < PEOPLE.length; i++){
  // console.log(PEOPLE[i]);
  if(PEOPLE[i].name === "Gift"){
    console.log(PEOPLE[i]);
  }

}

// Using filter
let filteredPerson = PEOPLE.filter((person)=> person.name === "Stan")
console.log(filteredPerson);


// 2nd Sept 2023

// =========================================================
// 2nd Sept 2023
// =========================================================

let calcAverage = (number1, number2, number3) => {
  let average = (number1 + number2 + number3) / 3;
  // console.log(average);
  return average;
};

// calcAverage(2,2,2)

// Q2

let teamAlpha = calcAverage(43, 21, 73);
console.log(teamAlpha);

let teamSpartan = calcAverage(63, 55, 47);
console.log(teamSpartan);

// Q3

let checkWinner = (aveAlpha, aveSpartan) => {
  if (aveAlpha >= 2 * aveSpartan) {
    console.log(`Alpha wins ${aveAlpha} vs ${aveSpartan}`);
  } else {
    console.log("no winner🧔‍♂");
  }
};

checkWinner(teamAlpha, teamSpartan);

// Take home 2
// for loop
for(let i = 0; i < companies.length; i++){
console.log(companies[i].name);
}

let getCoyNames = companies.map(company=> company.name)
console.log(getCoyNames);

// Q2
for(let i = 0; i < companies.length; i++){
  // console.log(companies[i]);
  if(companies[i].end - companies[i].start >= 10){
    console.log(companies[i]);
  }

}

let filteredCoys = companies.filter(function(company){
  return company.end - company.start >= 10

})

console.log(filteredCoys);

// Q3

let filteredAge = age.filter((birth)=> birth > 21)

console.log(filteredAge);

// Math object
let mark = 4.99999;
let floorResult = Math.floor(mark);
console.log(floorResult);
// ceil

let ceilNumber = 5.01

let ceilResult = Math.ceil(ceilNumber)
console.log(ceilResult);

// round

let roundNumber = 7.2222;
let roundresult = Math.round(roundNumber)
console.log(roundresult);

// pow
let powNumber = Math.pow(2,2)
console.log(powNumber);
// console.log(2 ** 2);

let randomNumber =  Math.ceil(Math.random()* 6 )
console.log(randomNumber);
// asynchronous and synchronous

function explain(){
  console.log('this ftn wud run after 8 secs');

}

// explain()
setTimeout(explain,8000)
console.log('after ftn explain');

// setInterval
// function interval (){
//   console.log('this wud run every 4 secs');
// }

// setInterval(interval,4000)
// console.log(this);



