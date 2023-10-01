"use strict";

const skipLink = () => {
  // show/hide skip link on focus
  const skipLink = document.querySelector(".skip-link");

  // Adding an event listener to show the skip link when it receives focus
  skipLink.addEventListener("focus", () => {
    skipLink.style.top = "10px";
  });

  // Adding an event listener to hide the skip link when it loses focus
  skipLink.addEventListener("blur", () => {
    skipLink.style.top = "-40px";
  });
};

export { skipLink };
