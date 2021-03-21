// Assignment code here
var charsAll = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f',
  'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

var charSpecialOnly = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+']

var charNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var charLowerAlpha = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f','g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

var charUpperAlpha = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

var inputArray=[];
var resultArray = [];

var responseCount = 0;

  
function shuffle(array){
  array.sort(() => Math.random()-.5);
}

function generatePassword() {
  //reset arrays to blank and responseCount to 0 for multiple runs
  inputArray=[];
  resultArray=[];
  responseCount=0;

  // asks user the length of the password
  var passwordLength = window.prompt("How long would you like your password to be? Enter a number between 8 and 128.");
  passwordLength=parseInt(passwordLength);
  
  if (isNaN(passwordLength) || passwordLength>128 || passwordLength<8){
    alert("Please enter a correct number between 8 and 128");
    return generatePassword();
  }
  else {
    //asking if the user would like special characters and log a single character to be added to the resultArray if user selects Yes
   var passwordSpecialCharsResponse = window.prompt("Would you like special characters? Enter YES or NO.");
    passwordSpecialCharsResponse=passwordSpecialCharsResponse.toLowerCase();
    if (passwordSpecialCharsResponse==="yes" || passwordSpecialCharsResponse==="y"){
      inputArray.push(charSpecialOnly);
      responseCount++;
      charSpecial=charSpecialOnly[Math.floor(Math.random()*charSpecialOnly.length)];
      resultArray=resultArray.concat(charSpecial);
    }
    else if (passwordSpecialCharsResponse!=="yes" || passwordSpecialCharsResponse!=="y" || passwordSpecialCharsResponse!=="no"||passwordSpecialCharsResponse!=="n"){
      alert("Please enter a valid response.");
      return generatePassword();
    }

    //asking if the user would like numbers and log a single character to be added to the resultArray if user selects Yes
    var passwordNumberCharResponse=window.prompt("Would you like numbers? Enter YES or NO");
    passwordNumberCharResponse=passwordNumberCharResponse.toLowerCase();
    if(passwordNumberCharResponse==="yes" || passwordNumberCharResponse==="y"){
      inputArray.push(charNumbers);
      responseCount++;
      charNum=charNumbers[Math.floor(Math.random()*charNumbers.length)];
      resultArray=resultArray.concat(charNum);
    }
    else if (passwordNumberCharResponse!=="yes" || passwordNumberCharResponse!=="y" || passwordNumberCharResponse!=="no"||passwordNumberCharResponse!=="n") {
      alert("Please enter a valid response.");
      return generatePassword();
    }
    
    //asking if the user would like lower case characters and log a single character to be added to the resultArray if user selects Yes
    var passwordLowerCaseResponse=window.prompt("Would you like lower case characters? Enter YES or NO");
    passwordLowerCaseResponse=passwordLowerCaseResponse.toLowerCase();
    if(passwordLowerCaseResponse==="yes"|| passwordLowerCaseResponse==="y"){
      inputArray.push(charLowerAlpha);
      responseCount++;
      charLower=charLowerAlpha[Math.floor(Math.random()*charLowerAlpha.length)];
      resultArray=resultArray.concat(charLower);
    }
    else if (passwordLowerCaseResponse!=="yes" || passwordLowerCaseResponse!=="y" || passwordLowerCaseResponse!=="no"|| passwordLowerCaseResponse!=="n") {
      alert("Please enter a valid response.");
      return generatePassword();
    }
  
    //asking if the user would like uppper case characters and log a single character to be added to the resultArray if user selects Yes
    var passwordUpperCaseResponse=window.prompt("Would you like upper case characters? Enter YES or NO");
    passwordUpperCaseResponse=passwordUpperCaseResponse.toLowerCase();
    if(passwordUpperCaseResponse==="yes"||passwordUpperCaseResponse==="y"){
      inputArray.push(charUpperAlpha);
      responseCount++;
      charUpper=charUpperAlpha[Math.floor(Math.random()*charUpperAlpha.length)];
      resultArray=resultArray.concat(charUpper);
    }
    else if (passwordUpperCaseResponse!=="yes" || passwordUpperCaseResponse!=="y" || passwordUpperCaseResponse!=="no"|| passwordUpperCaseResponse!=="n"){
      alert("Please enter a valid response.");
      return generatePassword();
    }


    inputArray.join("");
}

//subtract number of additional character arrays from total password length
var baseCharCount=passwordLength-responseCount;

//loop through inputArray to get base password

for (var i = 0; i < baseCharCount; i++) {
  var randomItem = inputArray[Math.floor(Math.random([i]) * inputArray.length)];
  resultArray.push(randomItem[i]);
}

shuffle(resultArray);
return resultArray.join('');

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




