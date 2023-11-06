// Assignment code here

//option, start with an empty array and populate it with answers to the questions with a for loop for the password length

//set up an empty array to be populated when given the answers to prompts

//prompt for length
//confirm for criteria
// var passArray = [];

//function - ask question, if true, run genCaps
// var text = "would you like some caps on that?";

// function wantCaps() 
// {
//   if (confirm(text) == true) 
//   {
//     text = "you got it";

// var caps = genCaps();
// var lows = genLows();
// var spec = genSpec();
// var nums = genNums();
// var length = 8;

// function generatePassword()
// {
//   var genPass = '';
//   var varCount = [caps,lows,spec,nums].length;

//   for (let i = 0; i < length; i += varCount) {
//     if (caps) {
//       genPass += genCaps();
//     }
//     if (lows) {
//       genPass += genLows();
//     }
//     if (spec) {
//       genPass += genSpec();
//     }
//     if (nums) {
//       genPass += genNums();
//     }
//     var finalPass = genPass.slice(0, length);
//     return finalPass;
//     }
//   }

// console.log(genCaps());
// console.log(genLows());
// console.log(genSpec());
// console.log(genNums());
// console.log(generatePassword());


// function passLength() {
//   alert("enter a length between 8 and 128")
// }

//randomize 
// event.preventDefault()


//   if (confirm("do you want Caps?") == true) {
//     genCaps();
//   } else {
//     allCaps = false;
//   };

//   if (confirm("do you want Lows?") == true) {
//     genLows();
//   } else {
//     allLows === false;
//   };

//   if (confirm("do you want Special Characters?") == true) {
//     genSpec();
//   } else {
//     allSpec === false;
//   };

//   if (confirm("do you want Nums?") == true) {
//     genNums();
//   } else {
//     allNums < 0;
//   };

//   function genCaps() {
//     allCaps = '';
//     var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//     for (var i = 1; i <= passLength; i++) {
//       var cap = Math.floor(Math.random() * caps.length + 1);

//       allCaps += caps.charAt(cap)
//     }
//     return allCaps;
//   }


  // function genLows() {
  //   allLows = '';
  //   var lows = 'abcdefghijklmnopqrstuvwxyz';

  //   for (var i = 1; i <= passLength; i++) {
  //     var low = Math.floor(Math.random() * lows.length + 1);

  //     allLows += lows.charAt(low)
  //   }
  //   return allLows;
  // }

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

// }

// function generatePassword() {
//   var genPass = '';
//   var varCount = [allCaps, allLows, allSpec, allNums].length;

//   for (let i = 0; i < length; i += varCount) {
//     if (genCaps()) {
//       genPass += allCaps;
//     }
//     if (genLows()) {
//       genPass += allLows;
//     }
//     if (genSpec()) {
//       genPass += allSpec;
//     }
//     if (genNums()) {
//       genPass += allNums;
//     }

//     var finalPass = genPass.slice(0, passLength);
//     return finalPass;
//   }
// }

// // Get references to the #generate and copy elements


// // var copyBtn = document.querySelector("#copy");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// writePassword();
// console.log(generatePassword());



//Copy password to clipboard
// function copyPassword() {
//   var copyText =
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);
// copyBtn.addEventListener("click", copyPassword);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function genPassElements() {

//prompts user to choose a password length that is between 8 and 128 and not a letter
  var passLength = prompt("plz choose a length between 8 and 128");
  var passLength = Number(passLength);

  while (passLength < 8 || passLength > 128 || passLength != Number(passLength)) {
    passLength = prompt("plz choose a length between 8 and 128");
  }
  console.log(passLength);

//prompts user to decide if there will be capital letters in the password and, if so, generates an amount equal to the previously chosen password length
  var allCaps = '';
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var genCaps = confirm("CAPITAL LETTERS? Y/N");

  if (genCaps) {
    for (var i = 0; i <= passLength; i++) {
      var randomNumber = Math.floor(Math.random() * caps.length);
      allCaps += caps.substring(randomNumber, randomNumber +1);
    }
  }
  console.log(allCaps);

  var allLows = '';
  var lows = 'abcdefghijklmnopqrstuvwxyz';
  var genLows = confirm("lowercase letters? y/n");

  if (genLows) {
    for (var i = 0; i <= passLength; i++) {
      var randomNumber = Math.floor(Math.random() * lows.length);
      allLows += lows.substring(randomNumber, randomNumber +1);
    }
  }
  console.log(allLows);

  var genPass = '';
  var allChars = [allCaps, allLows].length;
  genPass = allChars;

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
