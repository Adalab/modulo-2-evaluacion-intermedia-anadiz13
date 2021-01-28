"use strict";
const numberElement = document.querySelector(".js-number");
const buttomElement = document.querySelector(".js-button");
const tipElement = document.querySelector(".js-tip");
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function handleclick(event) {
  /* escribir numero y darle a prueba*/
  const number = parseInt(numberElement.value);

  if (number > randomNumber) {
    tipElement.value = "demasiado alto";
  } else if (number < randomNumber) {
    tipElement.value = "demasiado bajo";
  } else if (number === randomNumber) {
    tipElement.value = "has ganado campeona";
  }
}
/*Cuando la jugadora introduzca un número mayor que el aleatorio y pulse en Prueba:
Demasiado alto.*/
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

buttomElement.addEventListener("click", handleclick);
