// countdown.js

const countdownElement = document.getElementById("countdown");
const targetDate = new Date("March 9, 2025 23:59:00 GMT+0800").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  if (distance < 0) {
    countdownElement.innerHTML = '<span class="big-count">Deadline reached!</span>';
    clearInterval(interval);
    return;
  }
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  countdownElement.innerHTML =
    `<span class="big-count">${days}d ${hours}h ${minutes}m ${seconds}s</span><br>` +
    `<span class="small-text">until d-day.</span>`;
}, 1000);
