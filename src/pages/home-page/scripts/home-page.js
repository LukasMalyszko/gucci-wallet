/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

// import { setupCounter } from '../../../global-scripts/scripts/counter/counter.js'

// setupCounter(document.querySelector('#counter'))

const imgDesktop = document.querySelector(".product-img-desktop");
const imgMobile = document.querySelector(".product-img-mobile");
const firstColor = document.querySelector(".first");
const secondColor = document.querySelector(".second");
const thirdColor = document.querySelector(".third");
const fourthColor = document.querySelector(".fourth");
const colors = document.querySelectorAll(".product-container-component__color");
const addToCart = document.getElementById("addToCart");

let selectedColor = "łososiowy";

function handleColorClick(event) {
  const clickedElement = event.target;
  for (const color of colors) {
    color.setAttribute("data-select", color === clickedElement);
    if (color === clickedElement) {
      selectedColor = color.getAttribute("data-name");
    }
    changeImgL();
    changeImgS();
  }
}

for (const color of colors) {
  color.addEventListener("click", handleColorClick);
}

function changeImgL() {
  if (firstColor.getAttribute("data-select") === "true") {
    imgDesktop.src = "/images/Desktop, tablet 1.png";
  } else if (secondColor.getAttribute("data-select") === "true") {
    imgDesktop.src = "/images/Desktop, tablet 2.png";
  } else if (thirdColor.getAttribute("data-select") === "true") {
    imgDesktop.src = "/images/Desktop, tablet 3.png";
  } else if (fourthColor.getAttribute("data-select") === "true") {
    imgDesktop.src = "/images/Desktop, tablet 4.png";
  }
}

function changeImgS() {
  if (firstColor.getAttribute("data-select") === "true") {
    imgMobile.src = "/images/Mobile 1.png";
  } else if (secondColor.getAttribute("data-select") === "true") {
    imgMobile.src = "/images/Mobile 2.png";
  } else if (thirdColor.getAttribute("data-select") === "true") {
    imgMobile.src = "/images/Mobile 3.png";
  } else if (fourthColor.getAttribute("data-select") === "true") {
    imgMobile.src = "/images/Mobile 4.png";
  }
}

function alert(color) {
  const alert = document.createElement("div");
  alert.classList.add("product-container-component__alert");
  const productContainer = document.querySelector(
    ".product-container-component"
  );

  alert.textContent = `Portfel w kolorze ${selectedColor}m został dodany do koszyka`;
  productContainer.appendChild(alert);

  setTimeout(() => productContainer.removeChild(alert), 2500);
}

addToCart.addEventListener("click", alert);
