import "./style.css";
import { country_list } from "./countries.js";

function renderForm() {
  // Form needs:
  // Email, Country, Zip Code, Password, Password confirmation
  const element = document.createElement("div");
  element.classList.add("container");

  const formBox = document.createElement("div");
  formBox.classList.add("form-box");

  const form = document.createElement("form");
  form.classList.add("flight-form");

  // Email Label
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";

  //Email Input
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";

  // Country Label
  const countryLabel = document.createElement("label");
  countryLabel.textContent = "Country:";

  // Country Input (Radio)
  const countryInput = document.createElement("select");
  country_list.forEach((country) => {
    const option = document.createElement("option");
    option.text = country.country_name;
    countryInput.add(option);
  });

  // Zip Code / Postal Code label
  const zipLabel = document.createElement("label");
  zipLabel.textContent = "Zip/Post Code:";

  // Zip Code / Postal Code input
  // Zip Code format: xxxxx
  // Postal Code format: xxx-xxx
  const zipInput = document.createElement("input");
  zipInput.required = "true";

  // Password Label
  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password:";

  // Password Input
  const passwordInput = document.createElement("input");
  passwordInput.id = "password-input";
  passwordInput.type = "password";
  passwordInput.required = true;

  // Password Confirm label
  const passwordConfirmLabel = document.createElement("label");
  passwordConfirmLabel.textContent = "Confirm Password";

  // Password confirm input
  const passwordConfirmInput = document.createElement("input");
  passwordConfirmInput.type = "password";
  passwordConfirmInput.id = "confirm-password";

  // Submit
  const submit = document.createElement("button");
  //submit.type = "button";
  submit.type = "submit";
  submit.textContent = "Submit";
  submit.addEventListener("click", checkSubmit);

  // Error Handling Text
  const errorText = document.createElement("p");
  errorText.classList.add("error-text");

  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(countryLabel);
  form.appendChild(countryInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(zipLabel);
  form.appendChild(zipInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(passwordConfirmLabel);
  form.appendChild(passwordConfirmInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(submit);
  form.appendChild(document.createElement("br"));
  form.appendChild(errorText);

  formBox.appendChild(form);
  element.appendChild(formBox);
  return element;
}

function renderHeader() {
  const element = document.createElement("div");
  element.classList.add("header");

  const text = document.createElement("h1");
  text.textContent = "Flight Form";

  element.appendChild(text);

  return element;
}

function checkSubmit() {
  let form = document.querySelector(".flight-form");
  if (form.checkValidity()) {
    let errorMsg = document.querySelector(".error-text");
    errorMsg.style.color = "red";
    // Check Password confirmation:
    if (!passwordMatch()) {
      errorMsg.textContent = "Passwords must match!";
    } else if (emailEmpty()) {
      errorMsg.textContent = "Email cannot be Empty!";
    } else {
      errorMsg.style.color = "green";
      errorMsg.textContent = "Successfully submitted! 👍";
      form.onsubmit = function () {
        return false;
      };
    }
  }
}

function emailEmpty() {
  let email = document.querySelector("#email");
  if (email.value === "") {
    email.setCustomValidity("Email cannot be Empty!");
    return true;
  } else {
    return false;
  }
}

function passwordMatch() {
  let password = document.querySelector("#password-input");
  let confirm = document.querySelector("#confirm-password");
  return password.value === confirm.value;
}

document.body.appendChild(renderHeader());
document.body.appendChild(renderForm());
