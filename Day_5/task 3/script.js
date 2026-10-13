const ChangeBtn = document.querySelector("#change-btn");

ChangeBtn.addEventListener("click", function () {
  const headerText = document.querySelector("#header-text");

  headerText.textContent = "Welcome to Counter Solution";
});

const counterValue = document.querySelector("#counter-value");

// Addition
const plusBtn = document.querySelector("#plus-btn");

plusBtn.addEventListener("click", function () {
  counterValue.textContent++;
});

// Minus

const minusBtn = document.querySelector("#minus-btn");

minusBtn.addEventListener("click", function () {
  if (counterValue.textContent > 0) {
    return counterValue.textContent--;
  }
});

// A show or hide button

const toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("click", function () {
  const box = document.querySelector("#box");

  // boxes.style.display = "none";

  if (box.style.display === "none") {
    box.style.display = "block";

    return (toggleBtn.textContent = "Hide Box");
  } else {
    box.style.display = "none";

    return (toggleBtn.textContent = "Show Box");
  }
});
