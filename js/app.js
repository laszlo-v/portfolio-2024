"use strict";
const navH1 = document.querySelector(".nav-h1");

const handleScroll = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navH1.classList.add("nav-h1-shrink");
    } else {
      navH1.classList.remove("nav-h1-shrink");
    }
  });
};
navH1 ? handleScroll() : "";
