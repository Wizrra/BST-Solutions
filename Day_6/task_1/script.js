const headings = document.querySelector("#headings");
const colorOutput = document.querySelector("#colorOutput");
const nameInput = document.querySelector("#name-input");
const colorInput = document.querySelector("#color-input");
const saveBtn = document.querySelector("#save-btn");
const forgetBtn = document.querySelector("#forget-btn");
const write = document.querySelector("#write");

const nameKey = "buildspace:profile:name";
const colorKey = "buildspace:profile:color";

// function reload() {
//   const getName = localStorage.getItem(savedInput);

//   const getColor = localStorage.getItem(savedColor);

//   headings.textContent = `Welcome Back, ${getName}`;

//   colorOutput.textContent = `Your favorite color is ${getColor}`;

//   document.body.style.backgroundColor = savedColor;
// }reload();

saveBtn.addEventListener("click", () => {
  // e.preventDefault()

  const savedInput = nameInput.value;

  const savedColor = colorInput.value;

  localStorage.setItem(nameKey, savedInput);

  localStorage.setItem(colorKey, savedColor);

  headings.textContent = `Welcome Back, ${savedInput}`;

  colorOutput.textContent = `Your favorite color is ${savedColor}`;

  document.body.style.backgroundColor = savedColor;
});

forgetBtn.addEventListener("click", () => {
  localStorage.clear();
});

// localStorage is a built-in browser database container that allows your website to save key-value pairs directly on a user's device. It is used to remember user preferences, login states, or themes so data doesn't vanish when they leave the page.

// Nothing. Unlike session storage or temporary memory, localStorage data stays permanently saved even if you close the tab, close the entire browser, or restart your computer, until you manually delete it or clear your browser data.
