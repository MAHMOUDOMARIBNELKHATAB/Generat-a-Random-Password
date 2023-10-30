let passwordBox = document.getElementById("password");
let copy = document.getElementById("copy");
const length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbols = "~!@#$%^&*()–_=+[]{}/|;:‘“,.<>?";

function generatePassword() {
  let password = "";
  copy.src = "./img/copy.png";
  while (password.length < length) {
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
  }
  passwordBox.value = password;
}

function deletePassword() {
  passwordBox.value = "";
  copy.src = "./img/copy.png";
}
function copyPassword() {
  if (passwordBox.value != "") {
    passwordBox.select();
    document.execCommand("copy");
    copy.src = "./img/checked_190411.png";
  }
}
