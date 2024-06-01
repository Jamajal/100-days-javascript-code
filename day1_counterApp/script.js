// globals
const counterNumber = document.querySelector('#counter_number');
const buttonsParent = document.querySelector('#counter');

// backup functions
const ajustTextColor = (value) => {
  if (value > 0) {
    counterNumber.style.color = 'rgb(44, 255, 44)';
  } else if (value < 0) {
    counterNumber.style.color = 'rgb(254, 56, 56)';
  } else {
    counterNumber.style.color = 'white';
  }
};

// main functions
const addButtonEvent = () => {
  counterNumber.innerHTML++;
  ajustTextColor(counterNumber.innerHTML);
};

const subButtonEvent = () => {
  counterNumber.innerHTML--;
  ajustTextColor(counterNumber.innerHTML);
};

const resetButtonEvent = () => {
  counterNumber.innerHTML = 0;
  ajustTextColor(0);
};

const delegateEventsToChildren = (e) => {
  if (e.target.id === 'add') {
    addButtonEvent();
  } else if (e.target.id === 'sub') {
    subButtonEvent();
  } else if (e.target.id === 'reset') {
    resetButtonEvent();
  }
};

// showtime
buttonsParent.addEventListener('click', (e) => delegateEventsToChildren(e));
