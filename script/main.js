"use strict";
const numberElement = document.querySelector(".js-number");
const buttomElement = document.querySelector(".js-button");
const tipElement = document.querySelector(".js-chance");
const counter = document.querySelector(".js-counter");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function paintMesagge(message) {
  tipElement.innerHTML = "Pista: " + message;
}

function checkNumber() {
  const userNumberValue = numberElement.value;
  const number = parseInt(userNumberValue);

  if (isNaN(number)) {
    paintMesagge("El número debe estar entre 1 y 100");
  } else if (number > randomNumber) {
    paintMesagge("demasiado alto");
  } else if (number < randomNumber) {
    paintMesagge("demasiado bajo");
  } else if (number === randomNumber) {
    paintMesagge("has ganado campeona");
  }
  increaseCounter();
}

function increaseCounter() {
  triesCounter = triesCounter + 1;
  counter.value = `Número de intentos: ${triesCounter}`;
}

function handleclick(event) {
  /* escribir numero y darle a prueba*/
  checkNumber();
  increaseCounter();
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);
let triesCounter = 0;

buttomElement.addEventListener("click", handleclick);
