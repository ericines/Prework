/*Based on a given user email address, perform the following tasks:
*Create a username for the user that is the email address up to (but not including) the @ symbol. 
*Create a new email for the user that replaces their old domain with 'codecorps.com'.
*Create a temporary password for the user that is the first five letters of their username followed by the length of their original email address.*/

const emailAddress = "johnsmith@gmail.com";

const emailLength =  emailAddress.length; // access the length property of emailAddress
console.log(`The length of the email address is ${emailLength} characters.`);

const indexOfAt = emailAddress.indexOf("@"); // use a string method to determine the index of the @ symbol in emailAddress
console.log(`The @ symbol is at position ${indexOfAt}`);

const username = "johnsmith"; // use the indexOfAt variable you defined above along with a string method to create 
//a username as described in the starting comments
console.log(`The new username is ${username}`);


// The oldDomain code has been provided for you, just make sure you understand what it’s doing
const oldDomain = emailAddress.slice(indexOfAt + 1); //if the @ symbol is at position n, then the old domain starts at position n+1 and goes to the end of the string.  
console.log(`The old domain was ${oldDomain}`);

const newDomain = "codecorps.com";
const newEmailAddress = //use a string method and the oldDomain and newDomain variables to create the new email address as described in the starting comments
console.log(`The new email address is ${newEmailAddress}`);

const tempPassword = //use string methods and either concatenation or interpolation to generate the temporary password as described in the starting comments, you might find it useful to create another variable above this line to do this
console.log(`The user’s temporary password is ${tempPassword}`);

