const generateBtn = document.querySelector('#generate');
const numLetter = document.querySelector('#num-letter');
const upperLetter = document.querySelector('#upper-letter');
const lowerLetter = document.querySelector('#lower-letter');
const symbol = document.querySelector('#symbols');
const numbers = document.querySelector('#numbers');
const password = document.querySelector('#password');

let collectionOfValids = [];
let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let lowerCaseChar = "abcdefghiklmnopqrsttuvwxtz".split("");
let numberChar = "0123456789".split ("");
let symbolChar = "*&^%$#@!?><{}".split("");

function printPassword() {
    let passwordText = generatePassword();
    password.value = passwordText;
}

function generatePassword() {
    collectionOfValids.splice(0, collectionOfValids.length);
    let passLength = Number(numLetter.value);
    if (passLength < 5 || passLength > 128 || isNaN(passLength)) {
        alert('Введите значени от 5 до 128.');
        return '';
    }

    if (upperLetter.checked) {
        for (let i = 0; i < upperCaseChar.length; i++) {
            collectionOfValids.push(upperCaseChar[i]);
        }
    }

    if (lowerLetter.checked) {
        for (let i = 0; i < lowerCaseChar.length; i++) {
            collectionOfValids.push(lowerCaseChar[i]);
        }
    }

    if (symbol.checked) {
        for (let i = 0; i < symbolChar.length; i++) {
            collectionOfValids.push(symbolChar[i]);
        }
    }

    if (numbers.checked) {
        for (let i = 0; i < numberChar.length; i++) {
            collectionOfValids.push(numberChar[i]);
        }
    }

    let randomPassword = "";
    for (let i = 0; i < passLength; i++) {
        randomPassword += collectionOfValids[ Math.floor(Math.random() * collectionOfValids.length) ];
    }
    return randomPassword;
}

generateBtn.addEventListener('click', function() {
    const checkBoxes = document.querySelectorAll('.count-checked');
    let checkedOne = Array.prototype.slice.call(checkBoxes).some(x => x.checked);
    if (checkedOne) {
        printPassword();
    } else {
        alert('Выберети флажок!');
        password.value = '';
        return;
    }
});