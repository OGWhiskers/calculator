"use strict";

let sum = 0;
let substracted = 0;
let multiplyed = 1;
let divided = 0;

// OPERATION:

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

const add = (...a) => {
  sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i];

  console.log(sum);
};

const multiply = (...mul) => {
  multiplyed = 1;
  for (let i = 0; i < mul.length; i++) multiplyed *= mul[i];

  console.log(multiplyed);
};

const substract = (...sub) => {
  console.log(sub);
  substracted = 0;
  for (let i = 0; i < sub.length - 1; i++) substracted += sub[i] - sub[i + 1];

  console.log(substracted);
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

operate(20, "-", 23);
