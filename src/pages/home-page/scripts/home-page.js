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
const colorName = document.getElementById("color-name");

function handleColorClick(event) {
  const clickedElement = event.target;
  for (const color of colors) {
    color.setAttribute("data-border", color === clickedElement);
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
  if (firstColor.getAttribute("data-border") === "true") {
    img.src = "/public/images/Desktop, tablet 1.png";
  } else if (secondColor.getAttribute("data-border") === "true") {
    img.src = "/public/images/Desktop, tablet 2.png";
  } else if (thirdColor.getAttribute("data-border") === "true") {
    img.src = "/public/images/Desktop, tablet 3.png";
  } else if (fourthColor.getAttribute("data-border") === "true") {
    img.src = "/public/images/Desktop, tablet 4.png";
  }
}

function changeSmallImage() {
  if (firstColor.getAttribute("data-border") === "true") {
    img.src = "/public/images/Mobile 1.png";
  } else if (secondColor.getAttribute("data-border") === "true") {
    img.src = "/public/images/Mobile 2.png";
  } else if (thirdColor.getAttribute("data-border") === "true") {
    img.src = "/public/images/Mobile 3.png";
  } else if (fourthColor.getAttribute("data-border") === "true") {
    img.src = "/public/images/Mobile 4.png";
  }
}

function changeColorName () {
  if (firstColor.getAttribute("data-border") === "true") {
    colorName.innerHTML = "Łososiowy";
  } else if (secondColor.getAttribute("data-border") === "true") {
    colorName.innerHTML = "Rózowy";
  } else if (thirdColor.getAttribute("data-border") === "true") {
    colorName.innerHTML = "Biszkoptowy";
  } else if (fourthColor.getAttribute("data-border") === "true") {
    colorName.innerHTML = "Szary";
  }
}

