const form = document.getElementById("formContainer");
const quantity = document.getElementById("length");
const generate = document.getElementById("ganeratebtn");
const copy = document.getElementById("copybtn");
const clearText = document.getElementById("clearbtn");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-=";
const showResult = document.getElementById("result");

function password() {
  if (parseInt(quantity.value) < 9) {
    alert("Enter a value greater than 9");
    return;
  }
  let digitalNumber = parseInt(quantity.value);
  let result = "";

  for (let i = 0; i < digitalNumber; i++) {
    let randomPassword = Math.floor(Math.random() * characters.length);
    result += characters[randomPassword];
  }
  showResult.value = result;
  console.log(result);
}

function clear() {
  showResult.value = "";
  quantity.value = "";
  return true;
}

function copyPassword() {
  let copyCharacters = document.getElementById("result");
  copyCharacters.select();
  document.execCommand("copy");
  console.log(copyPassword);
}
