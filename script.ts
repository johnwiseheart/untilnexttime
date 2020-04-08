const DATE_TO_COUNTDOWN_TO = "May 23, 2020";

const countDownDate = new Date(DATE_TO_COUNTDOWN_TO).getTime();

document.getElementById("countdownDate").innerHTML = DATE_TO_COUNTDOWN_TO;
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const weeks = (distance / (1000 * 60 * 60 * 24 * 7)).toFixed(2);
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "demo"
  ).innerHTML = `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`;

  document.getElementById("weeks").innerHTML = `${weeks} weeks`;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("demo").innerHTML = "It's here!";
  }
}, 1000);
