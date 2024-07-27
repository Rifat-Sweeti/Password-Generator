// Set static variables
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
var symArr = sym.split("");

// Main function = Password Generation
function generatePass(){
    var allChars = [];
    var resultPass = "";

    // Set dynamic variables
    var Totlength = document.getElementById("password-length").value;

    // Confirm the rest of character conditions
    if(document.getElementById("include-uppercase").checked){
        Array.prototype.push.apply(allChars, abcUpperArr);
    }

    if(document.getElementById("include-lowercase").checked){
        Array.prototype.push.apply(allChars, abcLowerArr);
    }

    if(document.getElementById("include-numbers").checked){
        Array.prototype.push.apply(allChars, numArr);
    }

    if(document.getElementById("include-symbols").checked){
        Array.prototype.push.apply(allChars, symArr);
    }

    if(allChars.length === 0){
        alert("You must select at least 1 type of characters to generate a password!\nPlease start over.");
    } else {
        // Run for loop to use confirmed information and generate password as a result
        for(var i = 0; i < Totlength; i++){
            var random = Math.floor(Math.random() * allChars.length);
            resultPass += allChars[random];
        }
    }

    // Display the result
    document.getElementById("password").value = resultPass;
}

// Bonus! function to copy password to clipboard
function copyPass(){
    var textarea = document.createElement("textarea");
    textarea.value = document.getElementById("password").value;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("Copy");
    textarea.remove();
    alert("Password copied to clipboard!");
}
