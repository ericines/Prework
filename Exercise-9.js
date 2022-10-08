const firstName = "Eric";
const middleName = "William";
const lastName = "Ines";

const firstInitial = firstName[0];
const middleInitial = middleName[0];
const lastInitial = lastName[0];

const monogram = firstInitial + middleInitial + lastInitial;
console.log(`${firstName}'s monogram is ${monogram}`);

const fullString = "SOFTWARE DEV";

const vanityLetter1 = fullString[0];
const vanityLetter2 =  fullString[2];
const vanityLetter3 = fullString[3];
const vanityLetter4 = fullString[4];
const vanityLetter5 = fullString[6];
const vanityLetter6 = fullString[9];
const vanityLetter7 = fullString[11];

const vanityPlate = vanityLetter1 + vanityLetter2 + vanityLetter3 + vanityLetter4 + vanityLetter5 + vanityLetter6 + vanityLetter7

console.log(`The new vanity plate is ${vanityPlate}`);

