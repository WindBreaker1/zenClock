let formatButton = document.getElementById("format-button");
let backgroundButton = document.getElementById("change-background-button");
let timeFormat = 24;

function changeTimeFormat() {
  switch (formatButton.innerText) {
    case '24h':
      formatButton.innerText = '12h';
      timeFormat = 12;
      break;
    case '12h':
      formatButton.innerText = '24h';
      timeFormat = 24;
      break;
  }
}

formatButton.addEventListener("click", changeTimeFormat);

let bg = '1';
function changeBackground() {
  switch (bg) {
    case '1':
      document.body.style.backgroundImage = "url('attachments/rain1.gif')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "110%";
      bg = '2';
      break;
    case '2':
      document.body.style.backgroundImage = "url('attachments/rain2.gif')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "150%";
      bg = '3';
      break;
    case '3':
      document.body.style.backgroundImage = "url('attachments/rain3.gif')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "100%";
      bg = '1';
      break;
  }
}

backgroundButton.addEventListener("click", changeBackground);

function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  if (timeFormat == 24) {
    let time = document.getElementById("clock");
    time.innerText = hours + ":" + minutes + ":" + seconds;
  
    setTimeout(showTime, 1000);
  } else {
    if (hours == 0) {
      hours = 12;
    } else if (hours > 12) {
      hours = hours - 12;
      session = "PM";
    }
  
    let time = document.getElementById("clock");
    time.innerText = hours + ":" + minutes + ":" + seconds + "" + session;
  
    setTimeout(showTime, 1000);
  }
}

showTime();