var min = 0;
var sec = 0;
var mili = 0;

var minDisplay = document.getElementById("minDisplay");
var secDisplay = document.getElementById("secDisplay");
var miliDisplay = document.getElementById("miliDisplay");

var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");

function renderTime() {
  minDisplay.innerHTML = min;
  secDisplay.innerHTML = sec;
  miliDisplay.innerHTML = mili;
}
renderTime();

function timer() {
  mili++
  if (mili == 10) {
    sec++
    mili = 0
    if (sec == 60) {
      min++
      sec = 0
    }
  }
  renderTime();
}

var interval;

function startTimer() {
  interval = setInterval(function() {
    timer()
  }, 100)
  startBtn.disabled = true; 
}
function stopTimer() {
  clearInterval(interval)
  startBtn.disabled = false; 
}

function resetTimer() {
  min = 0;
  sec = 0;
  mili = 0;
  stopTimer();
  renderTime();
}