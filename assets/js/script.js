// Assignment Code



// Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


//confirm how many character the user would like to have

function generatePassword() {
    var passwordLength = (prompt("How long would you like your password to be? Select 8-128 characters"));
    console.log("Password Length" + passwordLength);

   if (passwordLength <= 7 || passwordLength >= 128) {
      alert("You did not choose the right range. Please click the button and try again.");
      return "Try again";
    } 
  
//confirm whether to select number, lowercase, uppercase, or special character.
    var confirmSpecialChar= confirm("Click OK if you would like to include special characters");
    var confirmNumericChar = confirm("Click OK if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
    var confirmUpperCase= confirm("Click OK if you would like to include uppercase characters");  

    if (!(confirmSpecialChar || confirmNumericChar || confirmLowerCase || confirmUpperCase)) {
      alert("You did not choose any types of characters. Please click the button and try again.");
      return "Try again";
    }

    var passwordChar = []
      
    if (confirmSpecialChar) {
      passwordChar = passwordChar.concat(specialChars)
    }

    if (confirmNumericChar) {
      passwordChar = passwordChar.concat(numbers)
    }
      
    if (confirmLowerCase) {
      passwordChar = passwordChar.concat(lowerCase)
    }

    if (confirmUpperCase) {
      passwordChar = passwordChar.concat(upperCase)
    }

//Loop for random selection
          
      for (var i = 0; i < passwordLength; i++) {
       var randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
      }
      return randomPassword;
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);