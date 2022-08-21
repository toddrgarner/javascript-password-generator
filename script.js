// Assignment Code
var generateBtn = document.querySelector("#generate");
// Global Variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var symbol = "~!@#$%^&*()_+=-`{}[]:;<>/".split("")
var number = "1234567890".split("");

// Write password to the #password input
function writePassword() {
  var preRandomPass = [];
  var postRandomPass = "";

  var totalLength = prompt("How many characters would you like your password to be?\n8-128")

  if (totalLength < 8 || totalLength > 128) {
    alert("Please keep password character count to a min of 8 and max of 128.")
  } else {
    if (confirm("Do you want uppercase letters in your password?")) {
      Array.prototype.push.apply(preRandomPass, upperCase)
    }
    if (confirm("Do you want lowercase letters in your password?")) {
      Array.prototype.push.apply(preRandomPass, lowerCase)
    }
    if (confirm("Do you want symbols in your password?")) {
      Array.prototype.push.apply(preRandomPass, symbol)
    }
    if (confirm("Do you want numbers in your password?")) {
      Array.prototype.push.apply(preRandomPass, number)
    }
    if (preRandomPass.length === 0) {
      alert("You need at least one character type to create a password.")
    }
    else {
      for (var i = 0; i < totalLength; i++) {
        var random = Math.floor(Math.random() * preRandomPass.length);
        postRandomPass += preRandomPass[random]
      }
    }
  }
  document.getElementById("password").innerHTML = postRandomPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
