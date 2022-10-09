/* Homework is issued on Sunday at 11am, 
Preview is due Tuesday
Reinforcement is due Sunday
*/

//console.log (20 ** 2);
/*
const hs = 'Seminole';
const thirdletter = hs.slice(4,5);
console.log(`${thirdletter}`);
const wordlength = hs.length;
console.log(`${wordlength}`);
*/

//10.6.22
/*
Try > Catch > Finally
interpolation is the insertion of something of a different
nature of something else
-Arrays-
[] is used to index into something
-Conditionals-
const myNewPassword = 'password';
if (myNewPassword.length < 10) {
    console.log("Pasword is not long enough");
} else {
    console.log("Password is long enough");
}
const realPassword = "P455w0rd!!!";

const  enteredPassword = "password!!!";

if (realPassword == enteredPassword) {
    console.log("ACCESS DENIED");
}

let dayOfWeek = 'Monday';
if (dayOfWeek == 'Wednesday'){
    console.log("You have class!");
} else if (dayOfWeek == 'Thursday'){
    console.log("You have class!");
} else if (dayOfWeek == 'Saturday'){
    console.log("You have A LONG CLASS!");
} else {
    console.log("FREEDOM!!!");
}

----------|| = OR    && = AND--------------------

let password = "new_password!";

if (password.length > 8 &&  password.includes("_")){
    console.log("This is an acceptable password.");
} else {
    console.log("This is not an acceptable password.");
}

-FOR LOOPS-
want something to run for a set number of times

run the numbers 1 - 5
*/
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

//i is short for iterator or iteration

// const newPets = ["dog", "cat", "fish", "squirrel", "skunk"]

// for (let i = 0; i < newPets.length; i++){
//     if(newPets[i].length > 3){
//         console.log(`You can get a ${newPets}.`);
//     }else {
//         console.log(`You cannot get a ${newPets}`);
//     }
// }

// for (let i = 0; i <= 100; i++){
//     if (i % 15 == 0){
//         console.log(`${i} is divisible by 15`)
//     }
// }

// const names = ["Jonny", "Carrie", "Chris", "Sheila", "Tammy", "Doug", "Cassidy"]
//log only names that start with 'C' in the format 'Cody is invited to the party'
// for (let i = 0; i < names.length; i++){
//     let currentName = names[i];
//     let firstLetter = currentName[0];
//     if (firstLetter == "C" || firstLetter == "c"){
//         console.log(`${currentName} is invited to the party`);
//     } else {
//         console.log(`${currentName} is not invited`);
//     }
// }
// firsLetter.toUpperCase() turns the first letter to an
//upper case even if it's entered lower case

// ----------WHILE LOOPS-----------------
//run a loop an undetermi nede number of times until a condition has been met

// for (let i = 1; i <= 10; i++) {
//       console.log(i);
//     }

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let grades = [85, 92, 99, 76, 0, 91];

// let total = 0
// let gradesLength = grades.length

// //loop until grades is empty
// while (grades.length > 0){
//     const currentGrade = grades.pop();
//     total = total + currentGrade;
// }

// console.log('My total grade is', total);

// const gradeAverage = total / gradesLength;

// console.log('My average is', gradeAverage.toFixed(2));

// ---------GAME-------------------
//pick a random number from 1 to 100 and add it to your score.
//keep going until your score is above 1000.
//count how many time it takes to reach 1000+.
//whoever takes the least amount of steps wins.

// let score = 0;
// let count = 0;
// //loop until score above 1000
// while (score <= 1000) {
//     //Get random number from 0 to 100
//     let randomNumber = Math.random() * 100;

//     //add random number to score
//     score = score + randomNumber

//     //increase count by 1
//     count++
// }

// console.log("Score is", score);
// console.log("Number of steps: ", count);



// for (let i = 0; i < 5; i++) {
//     console.log(100 * Math.random());
// }

//----------------10.8.22----------------------------------
//Replace all I's in string with _'s

//strings are immutable(cant be changed)
// let word = "scientific";

// word[2] = "i" //not allowed

// word = "mississippi"; //allowed

//console.log(word);

//-------------solution 1: slicing
// let word = "scientific";
// let wordSlice = word.slice(2,5);
// console.log(wordSlice);

//loop through the indices of the string
// for (let i = 0; i < word.length; i++) {
//     //check if letter at position i is "i"
//     if (word[i] == "i") {
//         //if it is
//         //get slice from beginning to before position i
//         let frontSlice = word.slice(0, i);
//         //'sc'
//         //add on  an underscore
//         frontSlice = frontSlice + "_";
//         //'sc_'
//         //get and add on a slice from position i+1 to the end
//         let backSlice = word.slice(i+1);
        
//         //combine slices together
//         word = frontSlice + backSlice;
//     }
// }
// console.log(word);

//------------------solution 2: Make a copy of the string
// let word = "chirping";

// //create empty string variable to  store new word's letters
// let newWord ="";

// //loop through the indices  of the word 
// for (let i = 0; i < word.length; i++) {
//     //if  the letter at indedx is "i" 
//     if (word[i] == "i"){
//         //add "_" onto newWord
//         newWord = newWord + "_";
//     //if not
//     } else {
//         newWord = newWord + word[i];
//     }
// //log out newWord to see results
// } console.log(`${newWord}`);

//() condition that is being checked
//{} when it is always going to  be done

//-------------------solution 3: using array methods

// let word = "grilling";

// //convert our word into an array 
// let wordArray = word.split("");
// //loop through the  indices of the  array
// for (let i  = 0; i < wordArray.length; i++) {
//     //if the letter at index i is "i"
//     if (wordArray[i] == "i"){
//         //replace index i with  "_"
//         wordArray[i] = "_";
//     }
// }
// //join array back into a string
// let joinedWord = wordArray.join("");
// //log the result
// console.log(joinedWord);

//--------------------Solution 4: 

// let word = "scientific";

// word = word.replaceAll("i","_");

// console.log(word);

/*--------------------Functions-----------------------------------
group together code into reusable blocks and give them a name.
when you use it it's called call/invoke the function using its name.
*/

//function that takes in no parameters
//log "Hello World!" to  the console

// function helloWorld() {
//     console.log("Hello World!");
// }

// //call (or invoke) the function
// // helloWorld();
// // helloWorld();

// // console.log("SPLIT!");

// // helloWorld();
// // helloWorld();
// // helloWorld();

// //can call functions multiple times usiing loops
// for (let i = 0; i < 5; i++) {
//     helloWorld();
// }

// //function that takes in 1 parameter
// //math function example

// function f(x) {
//     let result =  2 * (x ** 2) +1
//     console.log(result);
// }

// f(3);
// f(100);
// f(2000000);
// f(-3.231);


//takes in a name and then logs a greeting for that name

// function greetCustomer(name) {
//     name = name.toUpperCase();
//     console.log(`Hi, ${name}`);
//     console.log("How are you today?");
// }

// greetCustomer("Cody");

// greetCustomer("Will");

// greetCustomer("Eric");

// greetCustomer("Jake");

// let name = "Cody";
// console.log(`Hi ${name}`);

//RETURNS
//let us take the result of  functions and do other things with the result

// function g(x) {
//     return (x + 5);
// }

// function h(x) {
//     return (x * 3)
// }

// let result1 = g(7);

// let result2 = h(3);

// let combinedResult = result1 + result2;

// console.log(combinedResult);

//This function takes in two parameters for firat and last names and returns full name
// function combineNames(firstName, lastName) {
//     let combinedName = firstName + " " + lastName
//     return combinedName;
// }
// // is equal to
// function combineNames(firstName, lastName) {
//     return firstName + " " + lastName
// }

// let fullName = combineNames("Eric", "Ines");
// console.log(fullName);

//define a function  that  converts feet to miles
//5280ft = 1 mile
// function convertFeetToMiles(feet) {
//     let miles = feet / 5280;
//     miles = miles.toFixed(3);
//     console.log(`2000 ft is equivalent to ${miles} miles.`);
//     return miles; //return stops the function wherever it encounters it
// }

// convertFeetToMiles(4000);
// let miles = convertFeetToMiles(5280);
// console.log(miles);

// console.log(convertFeetToMiles(10000));

// console.log(`2000 ft is equivalent to ${convertFeetToMiles(2000)} miles.`);

//define a function that logs whetheer or not an integer is odd or even
// function oddOrEven(num) {
//     //If num is even
//     if (num % 2 == 0){
//         //log "even"
//         return ("Even");
//     }
//     //if not
//     else {
//         //log "odd"
//         return ("odd")
//     }
// }
// console.log(oddOrEven(10));

// function isEven(num){
//     if (num % 2 == 0) {
//         return true;
//     }   else {
//         return false;
//     }
// }
// //print out only even number from  1 to 20
// for (let i = 1; i <= 20; i++) {
//     if (isEven(i)){
//         console.log(i);
//     }
// }

//Define the function that capitalizes the first letter of a word
// function capitalize(word){
//     //get the first letter of the word and store as variable
//     //capitalize the first letter of the word
//     let firstLetter = word[0].toUpperCase();
//     //get a slice of the word thst is everything BUT the first letter
//     //and store as a variable
//     let restOfWord = word.slice(1);
//     //concatenate the capital letter and the slice and store as variable
//     let newWord = firstLetter + restOfWord;
//     //return the result
//     return newWord;
// }
// function oneLineCap(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }
// console.log(oneLineCap("america"));
// console.log(oneLineCap("eric"));

//define a function that takes in an array of numbers 
//and finds the maximum value in that array

// let myArray = [1, 4, 2, 10, -4];

// function findMaxValue(someArray) {
// //create a variable to keep track of max value
// //first card flipped is automatically max value so far
//     let currentMax = myArray[0];

//     //loop through the array
//     for (let i = 0; i < myArray.length; i++) {
//         //check if value at position i is bigger than current max
//         if (someArray[i] > currentMax)
//             //if so make that value the current max
//             currentMax = someArray[i];
//             //if not do nothing
//     }
//     //return the current max to verify
//     return currentMax
// }
// console.log(findMaxValue(myArray));

//define a function called fahrenheitToCelsius that converts and returns
//temps in F to C, C = (f - 32) * 5/9

// function fahrenheitToCelsius(degF) {
//     let celsius = (degF - 32) * (5 / 9);
//     return celsius.toFixed(2);
// }
// console.log(fahrenheitToCelsius(32));

// console.log(fahrenheitToCelsius(212));

//deefine a function called reverse string that takes in one parameter
//called myString and returns  another string that is the reverse of myString
//for loop and string methods
// function reverseString(myString) {
//     let length = myString.length;
//     let newString = "";
//     for (let i = length -1; i >=0; i--) {
//         newString = newString + myString[i];
//     }
//     return newString
// }

// function reverseString2(myString) {
//     let newString = "";
//     for (let i = 0; i < myString.length; i++) {
//         newString = myString[i] + newString;
//     }
//     return newString
// }
// console.log(reverseString("program"));

// console.log(reverseString("Florida"));

// console.log(reverseString("racecar"));

//while loop and array methods
// function reverseStringArray(myString) {
//     //convert myString into an array
//     let stringArray = myString.split("");
//     //define a variable to store our new array
//     let newArray = [];
//     //while array is not empty
//     while (stringArray.length > 0){
//         //pop off the last item in the array 
//         let letter = stringArray.pop()
//         //push it onto the new array
//         newArray.push(letter);
//     }
//     //join the newArray together as a string
//     let finalString = newArray.join("");
//     //return the string
//     return finalString;
// }
// console.log(reverseStringArray("program"));

//define a function that takes in an integer and determines if it is a palindrome

// function isNumberPalindrome(num) {
//     // converts num to a string
//     let numString = num.toString(); //1001 -> "1001"

//     //convert string into array
//     let numStringArray = numString.split(""); //"1001" -> ["1", "0", "0", "1"]

//     //reverse numStringArray
//     let numStringArrayReverse = numStringArray.reverse(); // ->["1", "0", "0", "1"]
    
//     //join back to a string
//     let numStringReverse = numStringArrayReverse.join(""); //-> "1001"

//     if (numString === numStringReverse) {
//         return true;
//     } else{
//         return false;
//     }
// }

// function isNumberPalindrome(num) {
//     return (num.toString() === num.toString().split("").reverse().join(""))
// }

// console.log(isNumberPalindrome(2002));
// console.log(isNumberPalindrome(9999));
// console.log(isNumberPalindrome(123));

