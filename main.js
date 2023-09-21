import "./style.css";

const elm = document.querySelector("#content"); // content page element
const logoElm = document.querySelector("#logo"); // logo element

// function for creating tempelates and adding them =>
function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

// elm.appendChild(body);

// logoElm.appendChild(elementFromHtml(logo));

// console.log(window.innerWidth, window.innerHeight);
