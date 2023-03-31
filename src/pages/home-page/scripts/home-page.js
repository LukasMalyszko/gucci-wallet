/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

// import { setupCounter } from '../../../global-scripts/scripts/counter/counter.js'

// setupCounter(document.querySelector('#counter'))

const img = document.getElementById("product-img");
const firstColor = document.querySelector(".first");
const secondColor = document.querySelector(".second");
const thirdColor = document.querySelector(".third");
const fourthColor = document.querySelector(".fourth");
const colors = document.querySelectorAll(".product-container-component__color");
let colorName = document.getElementById("color-name");
const addToCart = document.getElementById("addToCart");

function handleColorClick(event) {
  const clickedElement = event.target;
  for (const color of colors) {
    color.setAttribute("data-select", color === clickedElement);
  }

  //window.addEventListener("resize", function () {
    if (window.innerWidth > 600) {
      changeBigImage();
    } else {
      changeSmallImage();
    }
  //});
  changeColorName();
}

for (const color of colors) {
  color.addEventListener("click", handleColorClick);
}

function changeBigImage() {
  if (firstColor.getAttribute("data-select") === "true") {
    img.src = "/images/Desktop, tablet 1.png";
  } else if (secondColor.getAttribute("data-select") === "true") {
    img.src = "/images/Desktop, tablet 2.png";
  } else if (thirdColor.getAttribute("data-select") === "true") {
    img.src = "/images/Desktop, tablet 3.png";
  } else if (fourthColor.getAttribute("data-select") === "true") {
    img.src = "/images/Desktop, tablet 4.png";
  }
}

function changeSmallImage() {
  if (firstColor.getAttribute("data-select") === "true") {
    img.src = "/images/Mobile 1.png";
  } else if (secondColor.getAttribute("data-select") === "true") {
    img.src = "/images/Mobile 2.png";
  } else if (thirdColor.getAttribute("data-select") === "true") {
    img.src = "/images/Mobile 3.png";
  } else if (fourthColor.getAttribute("data-select") === "true") {
    img.src = "/images/Mobile 4.png";
  }
}

function changeColorName () {
  if (firstColor.getAttribute("data-select") === "true") {
    colorName.innerHTML = "Łososiowy";
  } else if (secondColor.getAttribute("data-select") === "true") {
    colorName.innerHTML = "Rózowy";
  } else if (thirdColor.getAttribute("data-select") === "true") {
    colorName.innerHTML = "Biszkoptowy";
  } else if (fourthColor.getAttribute("data-select") === "true") {
    colorName.innerHTML = "Szary";
  }
}

function alert() {
  const alert = document.createElement("div");
  alert.classList.add("product-container-component__alert")
  const container = document.querySelector(".product-container-component");
  let color = colorName.innerHTML.toLowerCase();
  
  alert.textContent = `Portfel w kolorze ${color}m został dodany do koszyka`;
  container.appendChild(alert);

  setTimeout(() => container.removeChild(alert), 2500);
}

addToCart.addEventListener("click", alert);
