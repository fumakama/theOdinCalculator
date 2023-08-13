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
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
const deleteButton = document.querySelector('#del');

deleteButton.addEventListener('click', () => {
  if (displayOp.textContent !== '') {
    displayLine2.textContent = displayLine2.textContent.
    slice(0, displayLine2.textContent.length-1);
  } else {
    displayLine1.textContent = displayLine1.textContent.
    slice(0, displayLine1.textContent.length-1);
  }
});

clearButton.addEventListener('click', clearDisplay);
equalsButton.addEventListener('click', () => {
  if ((displayLine1.textContent !== '') &&
      (displayLine2.textContent !== '') &&
      (displayOp.textContent !== '')) {
        const result = calculate(displayLine1.textContent, 
                                 displayLine2.textContent, 
                                displayOp.textContent);
        clearDisplay();
        displayLine1.textContent = result.toString();
      }
});

// Insert numbers in the lines of calculator display
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

// Insert operators in the operator line on display
opButtons.forEach(button => {
  button.addEventListener('click', event => {
    let operator = button.textContent;
      if ((displayLine2.textContent === '') && 
         (displayLine1.textContent !== '')) {
        if (displayOp.textContent === '') {
          displayOp.textContent += operator;
        } else {
          displayOp.textContent = operator;
        }
      } else {
        const result = calculate(displayLine1.textContent, 
                                 displayLine2.textContent, 
                                 displayOp.textContent);
        clearDisplay();
        displayLine1.textContent = result.toString();
      }
  });
});

function calculate(a, b, op) {
  a = +a;
  b = +b;

  switch (op) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "/":
      return a / b;
      break;
    case "*":
      return a * b;
      break;
  }
}

function clearDisplay() {
  displayLine1.textContent = '';
  displayLine2.textContent = '';
  displayOp.textContent = '';
}

