"use strict";

// ELEMENTS:

const displayScreen = document.querySelector(".display-child");
const numbers = document.querySelectorAll(".number");

let substracted = 0;
let divided = 0;

// OPERATION:

let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let displayValue = "";

// FUNCTIONS :
const add = (...a) => {
  const sum = a.reduce((total, currentValue) => total + currentValue, 0);

  console.log(sum);
  return sum;
};

const multiply = (...mul) => {
  const multiplyed = mul.reduce(
    (total, currentValue) => total * currentValue,
    1
  );

  console.log(multiplyed);
  return multiplyed;
};

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
  else if (operator == "/") divide(firstNumber, secondNumber);
  else if (operator == "*") multiply(firstNumber, secondNumber);
};

const displayOnScrean = (...numbers) => {
  let newNumArray = [];
  let displayNumbers = "";

  let newNum = [];
  for (newNum of numbers) newNumArray = [...newNum];

  newNumArray.forEach((item) => {
    item.addEventListener("click", () => {
      displayNumbers += item.textContent;
      displayValue += item.textContent;
      displayScreen.textContent = displayNumbers;
    });
  });
};
displayOnScrean(numbers);
