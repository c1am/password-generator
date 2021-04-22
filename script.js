var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", createPassword);

// Variable definitions
// Special chars array
var spCharacter = ["@", "%", "+", ",", "/", "!", "#", "$", "'", "^", "?", ":", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// Numeric characters array
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Lowercase characters array
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Uppercase characters array
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function getUserOptions() {

   // Prompts for users options
   // Password length
   lengthChosen = parseInt(
      prompt("How many characters would you like your password to have? Choose a number between 8 and 128.")
   );

   // Validate length is between 8 and 128
   if (lengthChosen < 8 || lengthChosen > 128) {
      alert("Please provide a value between 8-128.");
      return;
   }
   
   // Ask for lowercase
   lowerCaseChosen = confirm("Would you like to use lower case letters in your password?");
      
   // Ask for uppercase
   upperCaseChosen = confirm("Would you like to use upper case letters in your password?");

   // Ask for numeric
   numberChosen = confirm("Would you like to use numbers in your password?");

   // Ask for special
   spCharacterChosen = confirm("Would you like to use special characters in your password?");

   // Check for at least one character type chosen
   if (!lowerCaseChosen &&
      !upperCaseChosen &&
      !numberChosen &&
      !spCharacterChosen) {
         alert ("Please select at least one character type.")
      }

   // Build options
   var userOptions = {
      lowerCaseChosen: lowerCaseChosen,
      upperCaseChosen: upperCaseChosen,
      numberChosen: numberChosen,
      spCharacterChosen: spCharacterChosen,
      lengthChosen: lengthChosen
   };
   
   return userOptions;
}

// Random number from array length function
function getRandomFromArray(arr) {
   return Math.floor(Math.random() * arr.length)
}

// Generate password function
function generatePassword () {
   var passwordArray = [];
   var mustHaveCharacters = [];
   var canHaveCharacters = [];
   var userOptions = getUserOptions();

   // If upper
   if (userOptions.upperCaseChosen) {

      // Add to possible characters
      canHaveCharacters = canHaveCharacters.concat(upperCase)

      // Add 1 upper case to mustHave
      mustHaveCharacters.push(upperCase[getRandomFromArray(upperCase)])
   }

   // If lower
   if (userOptions.lowerCaseChosen) {
      canHaveCharacters = canHaveCharacters.concat(lowerCase)
      mustHaveCharacters.push(lowerCase[getRandomFromArray(lowerCase)])
   }

   // If special
   if (userOptions.spCharacterChosen) {
      canHaveCharacters = canHaveCharacters.concat(spCharacter)
      mustHaveCharacters.push(spCharacter[getRandomFromArray(spCharacter)])
   }

   // If numeric
   if (userOptions.numberChosen) {
      canHaveCharacters = canHaveCharacters.concat(number)
      mustHaveCharacters.push(number[getRandomFromArray(number)])
   }

   // Loop through the lengthChosen
   for (let currIndex = 0; currIndex < userOptions.lengthChosen; currIndex++) {
      // Add a random character to the passwordArray from the possible chars
      passwordArray.push(canHaveCharacters[getRandomFromArray(canHaveCharacters)]);
   }

   console.log(passwordArray)

   // Loop through mustHaves
   for (let i=0; i<mustHaveCharacters.length; i++) {
      password[i] = mustHaveCharacters[i];
   }
   
   passwordArray = passwordArray.join(""); 
   return passwordArray;
}

// Write password to the #password input
function createPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
