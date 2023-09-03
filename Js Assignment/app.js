"use strict"


// Declare variables for continent, language, ghanaPopulation, finlandPopulation, country and nigeriaPopulation

// With these respective values

// Africa, pidgin English, 500,800 Nigeria, 1000

let continent = 'Africa';
console.log(continent);

let language = 'Pigin English';
console.log(language);

let ghanaPopulation = '500';
console.log(ghanaPopulation);

let finLandPopulation = '800';
console.log(finLandPopulation);

let country = 'Nigeria';
console.log(country);

let nigeriaPopulation = '1000'
console.log(nigeriaPopulation);

// Task1
// ==============================
// 1)  If nigeriaPopulation is split in half.... How many people would live in each half?

// 2)  Increase nigeriaPopulation by 1 and log result to the console

// 3)   Log to the console using < or > to indicate whether   nigeriaPopulation is more than finlandPopulation

// 4)   Do same for ghanaPopulation against finlandPopulation

// 5)   Based on the variables created, create a new variable 'description' which would contain a string with this format --nigeria is in Africa and it's nigeriaPopulation people speak pidgin English


// quastion1 ans
let nigHalf = 2
console.log(nigHalf);

let dividNig = nigeriaPopulation / nigHalf
console.log(dividNig);

// quastion2 ans
nigeriaPopulation++
console.log(nigeriaPopulation);

// quastion3 ans
console.log(nigeriaPopulation < finLandPopulation);
console.log(nigeriaPopulation > finLandPopulation);

// question4 ans
console.log(ghanaPopulation < finLandPopulation);
console.log(ghanaPopulation > finLandPopulation);

// question 5
// using template literal
 let discription = ''+country +'is in' +' '+continent + ' and it 1000 people speak'+ ' ' +language
console.log(discription);


// Task2
// ==========
// Create an array of trainees of everyone in this class,starting with Precious 

// Update the first name on the array to pappi and log to the console

// Using an array method..
// Add Amos and Mike to the end of array

// Using an array method remove Mike from the array

// Using an array method..
// Add Zack and Bobby at the beginning of d array

// Using an array method remove Zack from the array


// Using an array method concat a new array of trainees... Queen, segun, Pius, emeka

// Names of trainees

// Precious 
// Izu
// Lekan 
//Marshal
// Momoh
// Gift
//Stanley


// Q1 ans
let trainees = ['Precious', 'Izu', 'Lake', 'marshal', 'Momoh', 'Gift', 'Stanley'];
console.log(trainees);

// Q2 ans
trainees[0] = 'pappi';
console.log(trainees);

// Q3 ans
let add = trainees.concat('Amos', 'Mike');
console.log(add);

// Q4 ans
let remove = trainees.splice('mike');
console.log(remove);

// Q5 ans
let beginning = (add);
add.unshift('zack', 'bobby');
console.log(beginning);

// Q6 ans
let anotherRemove = (beginning);
beginning.shift();
console.log(anotherRemove);

// Q7 ans
let otherTrainees = anotherRemove.concat ('Queen', 'Segun', 'Pius', 'Emaka');
console.log(otherTrainees);





























