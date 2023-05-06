// Get the elements from the DOM
const countdownEl = document.getElementById('countdown');
const lightTorchBtn = document.getElementById('lightButton');
const torchImage = document.getElementById("torchImage");

// Set the counter duration time to 1 hour (in seconds)
const torchDuration = 3600;
// Set the counter interval in Milliseconds (1000 = 1 second )
const counterInterval = 1000;

let threeQtrTime = Math.round(torchDuration * 0.75)
let halfTime = Math.round(torchDuration  * 0.5)
let qtrTime = Math.round(torchDuration * 0.25)

// Initialize counter to 0 on page load
countdownEl.innerHTML = '00:00';
let time = torchDuration;

// Declare the global countdown
let countdown


// Function to update the countdown
function updateCountdown() {
  // Calculate the minutes and seconds
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  // Add a leading zero to the seconds if necessary
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  // Update the countdown element
  countdownEl.innerHTML = `${minutes}:${seconds}`;

  torchImage.src = manageTorch(time);

  // Subtract one from the time
  time--;

  // If the time is up, stop the countdown
  if (time < 0) {
    clearInterval(countdown);
    torchImage.src = "img/Torch_6.png"
    countdownEl.innerHTML = '00:00';
  }
}

// Reset the countdown when the reset button is clicked
lightTorchBtn.addEventListener('click', function() {
  // Stop the current countdown
  clearInterval(countdown);

  // Reset the time
  time = torchDuration;

  // Start a new countdown
  countdown = setInterval(updateCountdown, counterInterval);

  // Update the countdown element
  updateCountdown();
});

function manageTorch(cTime) {
  if (cTime <= torchDuration && cTime > threeQtrTime) {
    return "img/Torch_1.png";
  }

  if (cTime <= threeQtrTime && cTime > halfTime) {
    return "img/Torch_2.png";
  };

  if (cTime <= halfTime && cTime > qtrTime) {
    return "img/Torch_3.png";
  };

  if (cTime <= qtrTime && cTime > 60) {
    return "img/Torch_4.png";
  };

  if (cTime < 59) {
    return "img/Torch_5.png";
  };

  if (cTime < 1) {
    return "img/Torch_6.png";
  };
}
