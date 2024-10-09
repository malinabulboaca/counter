const display = document.querySelector(".timer-display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

window.onload = () => {
  let timerStatus = false;
  let count = 0;
  let intervalID = null;
  startBtn.onclick = () => {
    timerStatus = !timerStatus;
    if (timerStatus) {
      intervalID = setInterval(() => {
        count++;
        display.innerText = count;
      }, 1000);
    }

    stopBtn.onclick = () => {
      clearInterval(intervalID);
    };
  };

  resetBtn.onclick = () => {
    count = 0;
    display.innerText = count;
    clearInterval(intervalID);
  };
};
