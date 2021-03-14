// Assignment code here
var charsAll = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f',
  'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

var charsNoSpecials = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f',
  'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

var charSpecialOnly = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+']

function generatePassword() {
  // asks user the length of the password
  var passwordLength = window.prompt("How long would you like your password to be? Enter a number between 8 and 128.");
  var passwordSpecialChars = window.prompt("Would you like special characters? Enter YES or NO.")
 

  // if (passwordSpecialChars.toLocaleLowerCase!=="yes" || passwordSpecialChars.toLocaleLowerCase!=="no") {
  //   window.alert("You need to provide a valid answer! Please try again.");
  //   return passwordSpecialChars;
  // }
  
  if (passwordSpecialChars==="yes" || passwordSpecialChars==="YES") {
    
    // loops through the arry for random characters

    specialChar=charSpecialOnly[Math.floor(Math.random()* charSpecialOnly.length)];

    var colArr = [];
    for (var i = 0; i < passwordLength - 2; i++) {
      var randomItem = charsAll[Math.floor(Math.random() * charsAll.length)];
      colArr.push(randomItem);
    }
    return "#" + colArr.join("").concat(specialChar);

  }
  else {
 
    // loops through the arry for random characters no special characters
    var colArrs=[];
    for (var i=0; i<passwordLength-1; i++) {
      var randomItems = charsNoSpecials[Math.floor(Math.random()*charsNoSpecials.length)];
      colArrs.push(randomItems)
    }
    return "#" + colArrs.join("")
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




