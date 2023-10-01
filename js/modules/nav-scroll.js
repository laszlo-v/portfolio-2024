// Activating the strict directive to prevent some basic errors
"use strict";

// Getting all the stuffs we want to work with
const navH1 = document.querySelector(".nav-h1");
const emailIcon = document.querySelector(".email-icon");

// Scroll event handler
const handleScroll = () => {
  window.addEventListener("scroll", () => {
    // If the user scrolls 40px a class will be added
    if (window.scrollY > 40) {
      navH1.classList.add("nav-h1-shrink");
      emailIcon.classList.add("email-icon-shrink");
    } else {
      // If the user scrolls back < 40px class will be removed
      navH1.classList.remove("nav-h1-shrink");
      emailIcon.classList.remove("email-icon-shrink");
    }
  });
};

// General export
export { handleScroll };
