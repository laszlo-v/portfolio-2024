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
  const success = document.querySelector(".success-hide");
  const span = document.querySelector(".success-hide span");

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

  // Removing the error when the user starts typing in the input field
  fnName.addEventListener("input", () => {
    clearError(fnName, fnNameSpan);
  });

  email.addEventListener("input", () => {
    clearError(email, emailSpan);
  });

  message.addEventListener("input", () => {
    clearError(message, messageSpan);
  });

  // A showError function to highlight input fields
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

  // Adding an eventlistener - submit- for the form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // A boolean that will be used if the input is invalid or valid
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

    // An async function to handle the form submit
    // This function will be called if all the values in the input fields are valid.
    const sendFormData = async () => {
      const formData = new FormData(form);

      try {
        const response = await fetch("../../send-mail.php", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.text();
          console.log(data);
        } else {
          console.error(
            "Failed to fetch data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    // Call the async function to send the form data

    if (isValid) {
      // If the all the inputs are valid sending the form data to the PHP file to process
      sendFormData();

      //Form reset
      form.reset();

      // Aria reset
      fnName.setAttribute("aria-invalid", "false");
      email.setAttribute("aria-invalid", "false");
      message.setAttribute("aria-invalid", "false");
      success.classList.add("success-show");

      // Countdown setup for successful submit
      let sec = 5;

      const counter = () => {
        if (sec >= 0) {
          span.textContent = `${sec}`;
          sec--;
        } else {
          clearInterval(interval);
        }
      };
      const interval = setInterval(counter, 1000);

      // Redirecting the user back to the home page.
      setTimeout(() => {
        window.location.href = "/index.html";
        success.classList.remove("success-show");
      }, 6000);
    }
  });
};

// Exporting the function
export { formValidation };
