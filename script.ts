const DATE_TO_COUNTDOWN_TO = "February 12, 2021 12:00 pm";

const countDownDate = new Date(DATE_TO_COUNTDOWN_TO).getTime();

document.getElementById("countdown-date").innerHTML = DATE_TO_COUNTDOWN_TO;

const plural = (word: string, num: number) => {
  if (num === 1) {
    return word;
  }

  return `${word}s`;
};

let countdownInterval;
const updateCounter = () => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const countdownElement = document.getElementById("days");

  countdownElement.innerHTML = "";

  const daysElement = document.createElement("div");
  daysElement.innerHTML = `${days} ${plural("day", days)}`;
  countdownElement.append(daysElement);

  const hoursElement = document.createElement("div");
  hoursElement.innerHTML = `${hours} ${plural("hour", hours)}`;
  countdownElement.append(hoursElement);

  const minsElement = document.createElement("div");
  minsElement.innerHTML = `${minutes} ${plural("minute", minutes)}`;
  countdownElement.append(minsElement);

  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "It's here!";
  }
};

countdownInterval = setInterval(updateCounter, 1000);
updateCounter();
