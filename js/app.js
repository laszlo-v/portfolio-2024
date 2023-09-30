"use strict";

const navH1 = document.querySelector(".nav-h1");
const emailIcon = document.querySelector(".email-icon");

const fnName = document.querySelector(".name");
const fnNameSpan = document.querySelector(".nameSpan");
const email = document.querySelector(".email");
const emailSpan = document.querySelector(".emailSpan");
const form = document.querySelector("form");
const messageSpan = document.querySelector(".messageSpan");
const emailPattern = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("fkdjflkfdlkfj");
});

fnName.addEventListener("input", () => {
  clearError(fnName, fnNameSpan);
});

email.addEventListener("input", () => {
  clearError(email, emailSpan);
});

message.addEventListener("input", () => {
  clearError(message, messageSpan);
});

const showError = (input, span, errorMessage) => {
  input.style.cssText = "border: .1rem solid #f1a64e";
  span.textContent = errorMessage;
  span.style.cssText = "color: #f1a64e";
  span.setAttribute("aria-hidden", "false");
};

const clearError = (input, span) => {
  input.style.cssText = "";
  span.textContent = "";
  span.setAttribute("aria-hidden", "true");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!fnName.value) {
    showError(fnName, fnNameSpan, "This field is required *");
  }
  if (!emailPattern.test(email.value)) {
    showError(email, emailSpan, "Invalid email address *");
  }

  if (!message.value || message.value.length < 50) {
    showError(message, messageSpan, "Minimum 50 characters *");
  }

  if (fnName.value && email.value && message.value.length >= 50) {
    form.reset();
    fnName.setAttribute("aria-invalid", "false");
    email.setAttribute("aria-invalid", "false");
    message.setAttribute("aria-invalid", "false");
  }
});
