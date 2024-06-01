// globals
const counterNumber = document.querySelector('#content');
const buttons = document.querySelector('#buttons');

let seconds = 0;
let minutes = 0;
let hours = 0;
let isPlaying = false;
let intervalId;

// Backup functions
const formatCounter = () => {
  if (seconds < 10 && seconds.toString().length < 2) {
    seconds = '0' + seconds;
  }

  if (minutes < 10 && minutes.toString().length < 2) {
    minutes = '0' + minutes;
  }

  if (hours < 10 && hours.toString().length < 2) {
    hours = '0' + hours;
  }
  return `${hours}:${minutes}:${seconds}`;
};

const handleTime = () => {
  const integerSeconds = parseInt(seconds);
  const integerMinutes = parseInt(minutes);
  const integerHours = parseInt(hours);
  seconds = integerSeconds + 1;

  if (seconds == 60) {
    seconds = 0;
    minutes = integerMinutes + 1;
  }

  if (minutes == 60) {
    minutes = 0;
    hours = integerHours + 1;
  }
};

// main functions
const playButtonEvent = () => {
  if (!isPlaying) {
    isPlaying = true;

    intervalId = setInterval(() => {
      if (isPlaying) {
        handleTime();
        counterNumber.innerHTML = formatCounter();
      }
    }, 1000);
  }
};

const pauseButtonEvent = () => {
  if (isPlaying) {
    isPlaying = false;
    clearInterval(intervalId);
  }
};

const resetButtonEvent = () => {
  isPlaying = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  counterNumber.innerHTML = formatCounter();
  clearInterval(intervalId);
};

const delegateChildrenEvents = (e) => {
  if (e.target.id === 'play') {
    playButtonEvent();
  } else if (e.target.id === 'pause') {
    pauseButtonEvent();
  } else if (e.target.id === 'reset') {
    resetButtonEvent();
  }
};

// showtime
counterNumber.innerHTML = formatCounter();
buttons.addEventListener('click', (e) => delegateChildrenEvents(e));
