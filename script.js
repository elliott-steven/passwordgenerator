var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {

    // creating arrays of the allowed characters

    var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbolsArr = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?"];

    // create empty arrays

    var resultArr = [];

    // user array will be the randomized array 

    var userArr = [];

    uppercaseArr[1]

    var promptCharacters = prompt("How many characters do you want? (Between 8 and 128)");
    var promptNumbers = confirm("Do you want numbers in your password?");
    var promptUpper = confirm("Do you want UPPERCASE letters in your password?");
    var promptLower = confirm("Do you want lowercase letters in your password?");
    var promptSymbols = confirm("Do you want symbols in your password?");


    // get the conditions of array from prompts

    if (promptNumbers) {

        resultArr = resultArr.concat(numbersArr);
    }

    if (promptUpper) {

        resultArr = resultArr.concat(uppercaseArr);
    }

    if (promptLower) {

        resultArr = resultArr.concat(lowercaseArr);
    }

    if (promptSymbols) {

        resultArr = resultArr.concat(symbolsArr);
    }

    console.log(resultArr)

    // here is how we randomize the user array

    for (var i = 0; i < promptCharacters; i++) {

        userArr.push(resultArr[Math.floor(Math.random() * resultArr.length)]);
    }

    return userArr.join("");
}

// writing the password

function writePass() {

    var password = generatePassword();
    var passwordResult = document.querySelector("#password");

    passwordResult.value = password;
}

// copy to clipboard

function copyClipboard() {

    genBtn.addEventListener("click", writePass);
}

