// Assignment code here
var charsAll = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f',
  'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

var charsNoSpecials = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f',
'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

var charSpecialOnly = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+']

function generatePassword() {
  // asks user the length of the password
  var passwordLength = window.prompt("How long would you like your password to be? Enter a number between 8 and 128.");
  passwordLength=parseInt(passwordLength);
  
  if (isNaN(passwordLength) || passwordLength>128 || passwordLength<8){
    alert("Please enter a correct number between 8 and 128");
    return generatePassword();
  }
  else {

   var passwordSpecialChars = window.prompt("Would you like special characters? Enter YES or NO.")
  passwordSpecialChars=passwordSpecialChars.toLowerCase();
  console.log(passwordSpecialChars);

    if (passwordSpecialChars.toLowerCase()==="yes" || passwordSpecialChars.toLowerCase()==="no"){

  // if (passwordSpecialChars.toLocaleLowerCase!=="yes" || passwordSpecialChars.toLocaleLowerCase!=="no") {
  //   window.alert("You need to provide a valid answer! Please try again.");
  //   return passwordSpecialChars;
  // }
  
  if (passwordSpecialChars==="yes") {
    
    // loops through the arry for random characters

    specialChar=charSpecialOnly[Math.floor(Math.random()* charSpecialOnly.length)];

    var resultArray = [];
    for (var i = 0; i < passwordLength - 1; i++) {
      var randomItem = charsAll[Math.floor(Math.random() * charsAll.length)];
      resultArray.push(randomItem);
    }
    return resultArray.join("").concat(specialChar);

  }
  else if (passwordSpecialChars==="no"){
 
    // loops through the arry for random characters no special characters
    var resultArrayNo=[];
    for (var i=0; i<passwordLength; i++) {
      var randomItems = charsNoSpecials[Math.floor(Math.random()*charsNoSpecials.length)];
      resultArrayNo.push(randomItems)
    }
    return resultArrayNo.join("")
  }
}
else {
  alert("Please enter Yes or No");
  return generatePassword();
}
}

  // else {
  //   alert("Please enter a correct response")
  // }
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




