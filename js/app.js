"use strict";

const navH1 = document.querySelector(".nav-h1");
const emailIcon = document.querySelector(".email-icon");
const handleScroll = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navH1.classList.add("nav-h1-shrink");
      emailIcon.classList.add("email-icon-shrink");
    } else {
      navH1.classList.remove("nav-h1-shrink");
      emailIcon.classList.remove("email-icon-shrink");
    }
  });
};
navH1 ? handleScroll() : "";

const inputs = document.querySelectorAll(".input");
const labels = document.querySelectorAll(".label");

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  const label = labels[i];

  input.addEventListener("input", function () {
    input.value.length
      ? label.classList.add("shrink")
      : label.classList.remove("shrink");
  });
}
