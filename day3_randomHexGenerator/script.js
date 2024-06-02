// globals
const visor = document.querySelector('.visor');
const generateButton = document.querySelector('button');
const background = document.querySelector('.container');

// backup functions
const getRandomHexDigit = () => {
  const hexCaracteres = '0123456789ABCDEF';
  const choosenDigitIndex = Math.floor(Math.random() * hexCaracteres.length);

  console.log(choosenDigitIndex);

  return hexCaracteres[choosenDigitIndex];
};

// main functions
const generateButtonEvent = () => {
  let generatedHex = '#';

  for (let i = 0; i < 6; i++) {
    generatedHex += getRandomHexDigit();
  }

  visor.innerHTML = generatedHex;
  background.style.backgroundColor = generatedHex;
};

// showtime
generateButton.addEventListener('click', generateButtonEvent);
