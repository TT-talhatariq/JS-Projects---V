"use strict";

const numberOneEl = document.getElementById("num1");
const numberTwoEl = document.querySelector("#num2");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const result = document.querySelector(".result");

const addition = () => {
  //TODO
  let sum = Number(numberOneEl.value) + Number(numberTwoEl.value);
  result.innerHTML = sum;
};
const subtraction = () => {
  // TODO
  let minus = numberOneEl.value - numberTwoEl.value;
  result.innerHTML = minus;
};
const division = () => {
  //TODO
  let division = numberOneEl.value / numberTwoEl.value;
  result.innerHTML = division;
};
const multiplication = () => {
  // TODO
  let multiply = numberOneEl.value * numberTwoEl.value;
  result.innerHTML = multiply;
};

addBtn.addEventListener("click", addition);
subtractBtn.addEventListener("click", subtraction);
divideBtn.addEventListener("click", division);
multiplyBtn.addEventListener("click", multiplication);
