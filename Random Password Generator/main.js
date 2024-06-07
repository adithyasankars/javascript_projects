

const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
const number = "0123456789";
const symbol = "!@#$%^&*()_+=-?:;{}[]";

const allChars =upperCase + lowerCase + number + symbol;


function createPassword (){

    let password ="";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor (Math.random()  * lowerCase.length)];
    password += number[Math.floor (Math.random()  * number.length)];
    password += symbol[Math.floor (Math.random()  * symbol.length)];


    while (password.length < length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;


}

document.getElementById('button-generate').addEventListener('click',createPassword);



// // Function to generate a random password
// function generatePassword(length) {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
//     let password = "";
//     for (let i = 0, n = charset.length; i < length; ++i) {
//         password += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return password;
// }

// // Function to handle the button click
// function handleButtonClick() {
//     const passwordField = document.getElementById('password');
//     const newPassword = generatePassword(12); // Generate a 12-character long password
//     passwordField.value = newPassword;
// }

// // Adding event listener to the button
// document.getElementById('button-generate').addEventListener('click', handleButtonClick);


function copyPassword (){
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

document.getElementById('copy').addEventListener('click', copyPassword);