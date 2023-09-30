"use strict";

// Importing modules
import { handleScroll } from "./modules/nav-scroll.js";
import { formValidation } from "./modules/form-validation.js";

// Getting the form
const form = document.querySelector("form");

// Adding an DOMContentLoaded eventlistener
document.addEventListener("DOMContentLoaded", () => {
  // Calling handleScroll
  handleScroll();

  // Making sure that the formValidation runs only when there is a form
  form ? formValidation() : "";
});
