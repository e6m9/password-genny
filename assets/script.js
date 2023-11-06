// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// writePassword();
// console.log(generatePassword());

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function genPassElements() {

//prompts user to choose a password length that is between 8 and 128 and not a letter
  var passLength = prompt("plz choose a length between 8 and 128");
  var passLength = Number(passLength);
  var password = '';
  var characters =[]

  while (passLength < 8 || passLength > 128 || passLength != Number(passLength)) {
    passLength = prompt("plz choose a length between 8 and 128");
  }
  console.log(passLength);

//prompts user to decide if there will be capital letters in the password and, if so, generates an amount equal to the previously chosen password length

  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var genCaps = confirm("CAPITAL LETTERS? Y/N");

  if (genCaps) {
      var randomNumber = Math.floor(Math.random() * caps.length);
      password += caps.substring(randomNumber, randomNumber +1);
      characters.push(caps);
  }
  console.log(allCaps);

  var lows = 'abcdefghijklmnopqrstuvwxyz';
  var genLows = confirm("lowercase letters? y/n");

  if (genLows) {
      var randomNumber = Math.floor(Math.random() * lows.length);
      password += lows.substring(randomNumber, randomNumber +1);
      characters.push(lows);
  }
  console.log(allLows);

  for (var i = password.length; i < password.length; i ++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    var randomLetter = Math.floor(Math.random() * characters[randomNumber].length);
  }

    var passwordText = document.querySelector("#password");
  
      passwordText.value = genPass;
      console.log(genPass);

  }
);

  // function genSpec() {
  //   allSpec = '';
  //   var specs = '!@#$%^&*()-+=/.>,<":;|][}{';

  //   for (var i = 1; i <= passLength; i++) {
  //     var spec = Math.floor(Math.random() * specs.length + 1);

  //     allSpec += specs.charAt(spec)
  //   }
  //   return allSpec;
  // }

  // function genNums() {
  //   allNums = '';
  //   var nums = '0123456789';

  //   for (var i = 1; i <= passLength; i++) {
  //     var num = Math.floor(Math.random() * nums.length + 1);

  //     allNums += nums.charAt(num)
  //   }
  //   return allNums;
  // }
  





//prompts inside rock paper scissors thing to get a length variable
//needs to reset to default at start of function
