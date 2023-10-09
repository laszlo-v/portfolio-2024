// Activating the strict directive to prevent some basic errors
"use strict";

// Getting all the stuffs we want to work with
const footer = document.querySelector("footer");

// Scroll event handler
const handleFooterScroll = () => {
  window.addEventListener("scroll", () => {
    // If the user scrolls 40px a class will be added
    if (window.scrollY > 40) {
      footer.classList.add("footer-shrink");
    } else {
      // If the user scrolls back < 40px class will be removed
      footer.classList.remove("footer-shrink");
    }
  });
};

// General export
export { handleFooterScroll };
