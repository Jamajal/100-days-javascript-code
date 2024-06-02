// globals
const generateButton = document.querySelector('.generate-button');
const randomNumber = document.querySelector('.visor');
const digits = document.querySelector('.digits');
const errorOutput = document.querySelector('.error');
const confirmOutput = document.querySelector('.success');

// backup functions
const printErrorMessage = (message) => {
  errorOutput.textContent = message;
  confirmOutput.textContent = '';

  setTimeout(() => (errorOutput.textContent = ''), 2000);
};

const validateDigits = () => {
  if (!digits.value) {
    printErrorMessage('Choose the amount of digits first!');
    return false;
  }

  if (digits.value > 15) {
    digits.value = 15;
    printErrorMessage('Max of 15 digits!');
    return false;
  }

  return true;
};

// main functions
const generateNumber = () => {
  let generatedNumber = '';
  for (let i = 0; i < digits.value; i++) {
    let generatedDigit = Math.floor(Math.random() * 10);
    generatedNumber += generatedDigit;
  }

  return generatedNumber;
};

const generateNumberEvent = () => {
  if (!validateDigits()) {
    return;
  }

  randomNumber.innerHTML = generateNumber();

  errorOutput.textContent = '';
  confirmOutput.textContent = 'Number generated!';
};

// showtime
generateButton.addEventListener('click', generateNumberEvent);
