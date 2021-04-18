// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate the password
function generatePassword() {
  var possiblePasswords = getPossiblePasswords();
  var resultingPassword = ();
  var possibleCharacters = ();
  var definiteCharacters = ();

  if (possiblePasswords.hasSpecialCharacter) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    definiteCharacters.push(getRandom(specialCharacters));
  }
  
  if (possiblePasswords.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    definiteCharacters.push(getRandom(numericCharacters));
  }

  if (possiblePasswords.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    definiteCharacters.push(getRandom(lowerCaseCharacters));
  }

  if (possiblePasswords.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    definiteCharacters.push(getRandom(upperCaseCharacters));
  }

  for (var i=0; i<definiteCharacters.length; i++) {
    resultingPassword[i] = definiteCharacters();
  }

  return resultingPassword;
}
