
"use strict";

const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

window.onload = init;


function init() {

    // event listener
    // addBtn.onclick = add;
    // subtractBtn.onclick = subtract;
    // multiplyBtn.onclick = multiplication;
    // divideBtn.onclick = division;

    addBtn.addEventListener("click", add);
    addBtn.addEventListener("click", subtract);
    addBtn.addEventListener("click", division);
    addBtn.addEventListener("click", multiplication);
}

function add() {
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);
    if (isNaN(number1) || isNaN(number2)) {
        alert("please enter a valid number");
    }
    const result = number1 + number2;
    document.getElementById("answerField").value = result;

}
function subtract() {
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);
    if (isNaN(number1) || isNaN(number2)) {
        alert("please enter a valid number");
    }
    const result = number1 - number2;
    document.getElementById("answerField").value = result;
}

function division() {
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);

    if (isNaN(number1) || isNaN(number2)) {
        alert("please enter a valid number");
    }
    if (number2 === 0) {
        alert("Cannot divide");
        return;
    }
    const result = number1 / number2;
    document.getElementById("answerField").value = result;
}

function multiplication() {
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);
    if (isNaN(number1) || isNaN(number2)) {
        alert("please enter a valid number");
    }
    const result = number1 * number2;
    document.getElementById("answerField").value = result;

}

