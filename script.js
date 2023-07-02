"use strict";

// ELEMENTS:

const displayScreen = document.querySelector(".display-child");
const numbers = document.querySelectorAll(".number");
const functionOperater = document.querySelectorAll(".functions");
const allBtn = document.querySelectorAll(".all-btn");
const equalSign = document.getElementById("equal-sign-container");

let substracted = 0;
let divided = 0;

// OPERATION:

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

let newNumArray = [];
let newNum = [];
let displayNumbers = "";

// FUNCTIONS :
const add = (...a) =>
  a.reduce((total, currentValue) => total + currentValue, 0);

const multiply = (...mul) =>
  mul.reduce((total, currentValue) => total * currentValue, 1);

const substract = (...sub) => {
  substracted = 0;
  for (let i = 0; i < sub.length - 1; i++) substracted += sub[i] - sub[i + 1];

  console.log(substracted);
  return substracted;
};

const divide = (...div) => {
  console.log(div);
  divided = 0;

  for (let i = 0; i < div.length - 1; i++) divided += div[i] / div[i + 1];

  console.log(divided);
};

const operate = (firstNumber, operator, secondNumber) => {
  if (operator == "+") add(firstNumber, secondNumber);
  else if (operator == "-") substract(firstNumber, secondNumber);
  else if (operator == "÷") divide(firstNumber, secondNumber);
  else if (operator == "×") multiply(firstNumber, secondNumber);
};

let funcBtn = [];
let newBtn = [];

// TRY SOMETHING:
const operations = (node) => {
  for (funcBtn of node) newBtn = [...node];

  newBtn.forEach((item) => {
    if (item.classList.contains("number")) {
      item.addEventListener("click", () => {
        displayNumbers += item.textContent;
        displayScreen.textContent = displayNumbers;
      });
    } else if (item == equalSign) {
      equalSign.addEventListener("click", () => {
        operate(firstNumber, item.textContent, secondNumber);
      });
    } else if (item.classList.contains("functions")) {
      item.addEventListener("click", () => {});
    }
  });
};
operations(allBtn);
