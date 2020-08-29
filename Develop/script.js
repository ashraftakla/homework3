// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Generate the password 
function generatePassword() {
  // Introducing my local variable
  var numberOfChar;
  var includeLower;
  var includeUpper;
  var includeNumbers;
  var includeSymbols;
  passwordArray = [];
  superarray = [];
  // Number of charaters prompt and validation using console log for debugging purposes
  numberOfChar = prompt("Pick a desired number of characters between 8-128, for your Password ?!");
  console.log(numberOfChar);
  if (numberOfChar >= 8 && numberOfChar <= 128) {
    console.log("sakoo");
  } else {
    alert(
      "'You entered an invalid number of characters, please hit Ok, then click the Generate Password Button again and provide a valid entry"
    );
    return;
  }
  // geting the rest of the input elements
  includeUpper = confirm("Do you need your password to include Uppercase Letters?");
  console.log(includeUpper);
  includeLower = confirm("Do you need your password to include Lowercase Letters?");
  console.log(includeLower);
  includeSymbols = confirm("Do you need your password to include Symbols?");
  console.log(includeSymbols);
  includeNumbers = confirm("Do you need your password to include Numbers?");
  console.log(includeNumbers);
  // validate the negative scenario
  if (
    includeLower === false &&
    includeNumbers === false &&
    includeSymbols === false &&
    includeUpper === false
  ) {
    alert("At least one charater's category need to be selected to generate a Password");
    return;
  } else {
    console.log("sakoo");
  }
  lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "Y",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  symbols = [
    "!",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    ",",
    "-",
    ".",
    "/",
    ";",
    ":",
    "<",
    ">",
    "=",
    "?",
    "@",
    "[",
    "]",
    "_",
    "{",
    "}",
    "|",
    "~",
    '"',
    "'"];
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (includeLower === true) {
    for (var i = 0; i < lowerCase.length; i++) {
      superarray.push(lowerCase[i]);
      console.log(superarray);
    }
  }
  if (includeUpper === true) {
    for (var i = 0; i < upperCase.length; i++) {
      superarray.push(upperCase[i]);
      console.log(superarray);
    }
  }
  if (includeNumbers === true) {
    for (var i = 0; i < numbers.length; i++) {
      superarray.push(numbers[i]);
      console.log(superarray);
    }
  }
  if (includeSymbols === true) {
    for (var i = 0; i < symbols.length; i++) {
      superarray.push(symbols[i]);
      console.log(superarray);
    }
  }
  console.log("this is my final supperarray : " + superarray);
  for (var i = 1; i <= numberOfChar; i++) {
    var random = Math.floor(Math.random() * superarray.length);
    passwordArray.push(superarray[random]);
  }
  return passwordArray.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);