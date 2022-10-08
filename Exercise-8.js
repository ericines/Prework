// const firstName = "Jane";
// const lastName = "Austen";
// const fullName = firstName + " " + lastName;
// console.log("The full name is", fullName);

const patientName =  "Eric";
let apptTime = "1:00pm";
let apptDay = "Saturday";

let reminderMessage = `Hi ${patientName}!  This is a reminder that you have an
appointmeent at ${apptTime} on ${apptDay}. See you then!`;

 console.log(reminderMessage);

const firstName = "Eric";
const lastName =  "Ines";
const fullNameConcat = firstName + lastName
const fullNameInterp = `${firstName} ${lastName}`

console.log("Are your fullNameConcat and fullNameInterp variable equal?")
console.log(fullNameConcat == fullNameInterp);

let myAge = '28';
let faveFood = 'Pizza';
let faveColor = 'Green';
let miniBio = `My name is ${fullNameInterp} and I am ${myAge} years old and love to 
eat ${faveFood},my favorite color is ${faveColor}.`;

console.log("Your mini bio is:");
console.log(miniBio);
