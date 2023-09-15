import "./style.css";
import logo from "/logo/logo.svg?url";

const elm = document.querySelector("#content"); // content page element
const logoElm = document.querySelector("#logo"); // logo element

// function for creating tempelates and adding them =>
function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

// elm.appendChild(body);

// adding logo element =>
logoElm.appendChild(
  elementFromHtml(`
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="40px" height="40px" viewBox="0 0 1280.000000 1280.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
fill="#92140c" stroke="none">
<path d="M1170 12789 c-334 -44 -621 -196 -841 -445 -146 -166 -250 -375 -301
-607 l-23 -102 0 -5235 0 -5235 23 -102 c117 -531 504 -918 1035 -1035 l102
-23 5235 0 5235 0 102 23 c531 117 918 504 1035 1035 l23 102 0 5235 0 5235
-23 102 c-117 529 -499 914 -1030 1035 l-97 22 -1435 3 -1435 3 -96 -162 c-53
-90 -466 -790 -919 -1556 -452 -766 -821 -1395 -819 -1396 4 -4 411 -161 1224
-474 209 -80 381 -146 383 -148 2 -1 -427 -581 -952 -1288 -526 -708 -956
-1290 -956 -1294 0 -4 270 -97 601 -207 330 -110 601 -203 602 -206 2 -6
-2702 -3809 -2708 -3809 -4 0 24 85 505 1510 166 492 368 1093 450 1335 81
242 151 448 155 458 4 9 5 17 2 17 -3 0 -57 15 -119 34 -62 19 -236 70 -385
115 -150 45 -394 117 -541 161 -148 44 -273 80 -278 80 -5 0 -15 4 -22 9 -14
8 -19 -5 695 1794 122 307 202 522 197 527 -5 5 -393 189 -863 409 -470 220
-856 403 -859 405 -2 3 130 494 293 1093 570 2088 704 2578 702 2579 -9 7
-3848 10 -3897 3z"/>
</g>
</svg>`)
);
// logoElm.appendChild(elementFromHtml(logo));

// console.log(window.innerWidth, window.innerHeight);
