// console.log("1");
// setTimeout(() => console.log("2"), 1000);
// setTimeout(() => console.log("3"), 0);
// console.log("4");

let secondsLeft = 0;
let timerId = null;

const secondsInput = document.querySelector("#seconds-input")

const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");

const timerDisplay = document.querySelector("#timer-display");
const message = document.querySelector("#message");

function updateDisplay() {
  timerDisplay.textContent = secondsLeft;
}

startBtn.addEventListener("click", () => {
  if (timerId !== null) return;

  if (secondsLeft === 0) {
    secondsLeft = Number(secondsInput.value);
    if (secondsLeft <= 0 || isNaN(secondsLeft)) {
      alert("Please enter a valid number of seconds!")
      return;
    }
  }

  message.textContent = "";

  timerId = setInterval(() => {
    secondsLeft--
    updateDisplay()

    if (secondsLeft <= 0) {
      clearInterval(timerId);
      timerId = null;
      message.textContent = "Time up";
    }
  }, 1000)
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  secondsLeft = 0;
  updateDisplay();
  secondsInput.value = "";
  message.textContent = "";
})


