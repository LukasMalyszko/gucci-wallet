/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

// import { setupCounter } from '../../../global-scripts/scripts/counter/counter.js'

// setupCounter(document.querySelector('#counter'))

const imgDesktop = document.querySelector(".product-img-desktop");
const imgMobile = document.querySelector(".product-img-mobile");
const colors = document.querySelectorAll(".product-container-component__color");
const addToCart = document.getElementById("addToCart");

let selectedColor = "łososiowy";

function handleColorClick(event) {
  const clickedElement = event.target;
  let imgId = clickedElement.getAttribute("data-id");
  for (const color of colors) {
    color.setAttribute("data-select", color === clickedElement);
    if (color === clickedElement) {
      selectedColor = color.getAttribute("data-name");
    }
    changeImgL(imgId);
    changeImgS(imgId);
  }
}

for (const color of colors) {
  color.addEventListener("click", handleColorClick);
}

function changeImgL(imgId) {
  imgDesktop.src = `/images/Desktop, tablet ${imgId}.png`;
  
}

function changeImgS(imgId) {
  imgMobile.src = `/images/Mobile ${imgId}.png`;
  
}

function alert() {
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
