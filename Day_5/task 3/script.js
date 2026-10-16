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

// Life text
const userInput = document.querySelector("#user-input");

// const userText = userInput.textContent;

userInput.addEventListener("input", function(event) {
  const liveText = document.querySelector("#live-text");
  
  liveText.textContent = event.target.value;
})

// An event is an action that happens in the browser, such as a user clicking a button, moving the mouse, typing on a keyboard, or the page finishing 

// An event listener is a method (addEventListener) attached to an element that waits ("listens") for a specific event to occur, and then runs a function when it happens.

// Because web pages need to react dynamically to user actions rather than running code straight from top to bottom just once.