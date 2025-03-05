const htmlElement = document.querySelector("html");
const nav = document.querySelector(".nav");
let navHeight = nav.offsetHeight + 16;

console.log(navHeight);

htmlElement.style.scrollPaddingTop = navHeight + "px";