const buttonElements = document.querySelectorAll('button');

// Add push-the-button effect
buttonElements.forEach((button) => {
  button.addEventListener('click', (event) => {
    button.classList.add('active');
  });
});

// Function removes push-the-button effect
function removeTransition(e) {
  e.target.classList.remove('active');
}

// Remove push-the-button effect 
buttonElements.forEach(button => button.addEventListener('transitionend', removeTransition));

const numberButtons = document.querySelectorAll('.number');
const opButtons = document.querySelectorAll('.op');
let displayLine1 = document.querySelector('#display-line-1');
let displayLine2 = document.querySelector('#display-line-2');
let displayOp = document.querySelector('#display-operator');

numberButtons.forEach((button => {
  button.addEventListener('click', (event) => {
    let number = button.textContent;
    if (displayOp.textContent === '') {
      displayLine1.textContent += number;
    } else {
      displayLine2.textContent += number;
    }
  });
}));

opButtons.forEach(button => {
  button.addEventListener('click', event => {
    let operator = button.textContent;
      if (displayLine2.textContent === '') {
        displayOp.textContent += operator;
      }
  });
});