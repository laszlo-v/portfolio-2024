"use strict";

const formValidation = () => {
  // Getting all the stuff we want to interact with
  const form = document.querySelector("form");
  const fnName = document.querySelector(".name");
  const fnNameSpan = document.querySelector(".nameSpan");
  const email = document.querySelector(".email");
  const emailSpan = document.querySelector(".emailSpan");
  const messageSpan = document.querySelector(".messageSpan");
  const inputs = document.querySelectorAll(".input");
  const labels = document.querySelectorAll(".label");

  // Regular/common regex pattern for email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Adding a className to the inputs when they are active
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const label = labels[i];

    input.addEventListener("input", function () {
      input.value.length
        ? label.classList.add("shrink")
        : label.classList.remove("shrink");
    });
  }

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

    let isValid = true;

    if (!fnName.value) {
      showError(fnName, fnNameSpan, "This field is required *");
      isValid = false;
    } else {
      clearError(fnName, fnNameSpan);
    }

    if (!emailPattern.test(email.value)) {
      showError(email, emailSpan, "Invalid email address *");
      isValid = false;
    } else {
      clearError(email, emailSpan);
    }

    if (!message.value || message.value.length < 50) {
      showError(message, messageSpan, "Minimum 50 characters *");
      isValid = false;
    } else {
      clearError(message, messageSpan);
    }

    if (isValid) {
      const formData = new FormData(form);
      fetch("../../send-mail.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => console.log(data));
      window.location.href = "/index.html";
      form.reset();
      fnName.setAttribute("aria-invalid", "false");
      email.setAttribute("aria-invalid", "false");
      message.setAttribute("aria-invalid", "false");
    }
  });
};

export { formValidation };
