console.log("hello javascript");

const passwordBox = document.getElementById("password");
const generatePasswordBtn = document.getElementById('generate-password-btn')
const copyBtn = document.getElementById('copy-btn')
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%&^*()_+~|{}[]<>/-=";

const allChars = upperCase + lowerCase + numbers + symbols;
console.log(allChars);

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password
}
generatePasswordBtn.addEventListener('click', createPassword)

// function copyPassword() {
//     passwordBox.select()
//     document.execCommand('copy')
// }
// copyBtn.addEventListener('click', copyPassword)







copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
        copyBtn.innerHTML = `<span>copied</span>`;
        setTimeout(() => {
            copyBtn.innerHTML = `<img src="./images/copy.png" alt="copy" title="copy">`
        }, 2000);
    })
    .catch (() => {
        copyBtn.textContent = 'not copied'
        setTimeout(() => {
            copyBtn.innerHTML = `<img src="./images/copy.png" alt="copy" title="copy">`
        }, 3000);
    })
})