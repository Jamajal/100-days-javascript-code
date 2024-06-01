const addButton = document.querySelector('#add');
const subButton = document.querySelector('#sub');
const resetButton = document.querySelector('#reset');
const counterNumber = document.querySelector('#counter_number');

const ajustTextColor = (value) => {
  if (value > 0) {
    counterNumber.classList.add('positive');
    counterNumber.classList.remove('negative');
  } else if (value < 0) {
    counterNumber.classList.remove('positive');
    counterNumber.classList.add('negative');
  } else {
    counterNumber.classList.remove('positive');
    counterNumber.classList.remove('negative');
  }
};

const addButtonEvent = () => {
  const currentNumber = parseInt(counterNumber.textContent);
  counterNumber.textContent = currentNumber + 1;

  ajustTextColor(currentNumber + 1);
};

const subButtonEvent = () => {
  const currentNumber = parseInt(counterNumber.textContent);
  counterNumber.textContent = currentNumber - 1;

  ajustTextColor(currentNumber - 1);
};

const resetButtonEvent = () => {
  counterNumber.textContent = 0;

  ajustTextColor(0);
};

addButton.addEventListener('click', addButtonEvent);
subButton.addEventListener('click', subButtonEvent);
resetButton.addEventListener('click', resetButtonEvent);
