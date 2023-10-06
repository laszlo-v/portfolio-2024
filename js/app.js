"use strict";

// Importing modules
import { handleScroll } from "./modules/nav-scroll.js";
import { formValidation } from "./modules/form-validation.js";
import { skipLink } from "./modules/skip-link.js";

// Adding an DOMContentLoaded eventlistener
document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector("#main-content");
  // Getting the form
  const form = document.querySelector("form");

  // Calling handleScroll
  handleScroll();

  // Making sure that the formValidation runs only when there is a form
  form ? formValidation() : "";

  // Calling the skipLink function
  mainContent ? skipLink() : "";
});
