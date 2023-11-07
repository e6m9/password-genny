//links the html generate class to a javascript variable
var generateBtn = document.querySelector("#generate");

//generate button listens for a click to run the generatePassword function
generateBtn.addEventListener("click", function generatePassword() {

  //establishes key variables
  var passLength = prompt("plz choose a length between 8 and 128");
  var passLength = Number(passLength);
  var password = '';
  var characters = []

  //prompts user to choose a password length that is between 8 and 128 and not a letter
  while (passLength < 8 || passLength > 128 || passLength != Number(passLength)) {
    passLength = prompt("plz choose a length between 8 and 128");
  }

  //prompts user to decide if there will be capital letters in the password and, if so, attaches a random character from the caps variable to the password and pushes it to the characters array
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var genCaps = confirm("CAPITAL LETTERS? Y/N");

  if (genCaps) {
    var randomNumber = Math.floor(Math.random() * caps.length);
    password += caps.substring(randomNumber, randomNumber + 1);
    characters.push(caps);
  }

  //prompts for lower case letters, pushes a random one to the characters array
  var lows = 'abcdefghijklmnopqrstuvwxyz';
  var genLows = confirm("lowercase letters? y/n");

  if (genLows) {
    var randomNumber = Math.floor(Math.random() * lows.length);
    password += lows.substring(randomNumber, randomNumber + 1);
    characters.push(lows);
  }

  //prompts for special characters, pushes a random one to the characters array
  var spec = "!@#$%^&*()-+=/.>,<:;|][}{";
  var genSpec = confirm("$pecial ch@r@cter$? Y/N");

  if (genSpec) {
    var randomNumber = Math.floor(Math.random() * spec.length);
    password += spec.substring(randomNumber, randomNumber + 1);
    characters.push(spec);
  }

  //prompts for numbers, pushes a random one to the characters array
  var nums = "0123456789";
  var genNums = confirm("Numb3rs? Y/N");

  if (genNums) {
    var randomNumber = Math.floor(Math.random() * nums.length);
    password += nums.substring(randomNumber, randomNumber + 1);
    characters.push(nums);
  }

  //generates the password by taking the previously given password length and pushing random characters from inside the characters array to the password variable
  for (var i = password.length; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    var randomIndex = Math.floor(Math.random() * characters[randomNumber].length);
    password += characters[randomNumber].substring(randomIndex, randomIndex + 1);

  }

  //writes the password variable to the html variable class
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
);
