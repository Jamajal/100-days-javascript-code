const counterNumber = document.querySelector('#content');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

let seconds = 0;
let minutes = 0;
let hours = 0;
let isPlaying = false;
let intervalId;

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

const playEffect = () => {
  playButton.classList.add('on');
  pauseButton.classList.remove('on');
  resetButton.classList.remove('on');

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

const pauseEffect = () => {
  if (isPlaying) {
    playButton.classList.remove('on');
    pauseButton.classList.add('on');
    resetButton.classList.remove('on');

    isPlaying = false;
    clearInterval(intervalId);
  }
};

const resetEffect = () => {
  playButton.classList.remove('on');
  pauseButton.classList.remove('on');
  resetButton.classList.add('on');

  isPlaying = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  counterNumber.innerHTML = formatCounter();
  clearInterval(intervalId);
};

playButton.addEventListener('click', playEffect);
pauseButton.addEventListener('click', pauseEffect);
resetButton.addEventListener('click', resetEffect);

counterNumber.innerHTML = formatCounter();
