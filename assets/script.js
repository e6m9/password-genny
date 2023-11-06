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



// Get references to the #generate and copy elements
var generateBtn = document.querySelector("#generate");

// var copyBtn = document.querySelector("#copy");

// Write password to the #password input




//Copy password to clipboard
// function copyPassword() {
//   var copyText =
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);
// copyBtn.addEventListener("click", copyPassword);



generateBtn.addEventListener("click", function generatePassword() {

  if (confirm("do you want Caps?") == true) {
    genCaps();
  } else {
    allCaps == false;
  };

  if (confirm("do you want Lows?") == true) {
    genLows();
  } else {
    allLows == false;
  };

  if (confirm("do you want Special Characters?") == true) {
    genSpec();
  } else {
    allSpec == false;
  };

  if (confirm("do you want Nums?") == true) {
    genNums();
  } else {
    allNums < 0;
  };

function genCaps() 
  {
    allCaps = '';
    var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 1; i <= 2; i++) {
      var cap = Math.floor(Math.random() * caps.length + 1);

      allCaps += caps.charAt(cap)
    }
    return allCaps;
  }


function genLows()
{
 allLows = '';
var lows = 'abcdefghijklmnopqrstuvwxyz';

for (var i = 1; i <= 2; i++) {
  var low =Math.floor(Math.random() * lows.length + 1);

  allLows += lows.charAt(low)
}
return allLows;
}

function genSpec()
{
 allSpec = '';
  var specs = '!@#$%^&*()-+=/.>,<":;|][}{';

  for (var i = 1; i <= 2; i++) {
    var spec = Math.floor(Math.random() * specs.length + 1);

    allSpec += specs.charAt(spec)
  }
  return allSpec;
}

function genNums()
{
 allNums = '';
  var nums = '0123456789';

  for (var i = 1; i <= 2; i++)
  {
    var num = Math.floor(Math.random() * nums.length + 1);

    allNums += nums.charAt(num)
  }
  return allNums;
}

length = 8;

function generatePassword()
{
  var genPass = '';
  var varCount = [allCaps,allLows,allSpec,allNums].length;

  for (let i = 0; i < length; i += varCount) {
   if (genCaps()) {
      genPass += allCaps;
   }
   if (genLows()) {
      genPass += allLows;
   }
   if (genSpec()) {
      genPass += allSpec;
   }
   if (genNums()) {
      genPass += allNums;
   }

    var finalPass = genPass.slice(0, length);
    return finalPass;
    }
  }
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  writePassword();
  console.log(generatePassword());

  }
);


//needs to reset to default at start of function
