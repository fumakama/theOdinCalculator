const buttonElements = document.querySelectorAll("button");

// Add push-the-button effect
buttonElements.forEach((button) => {
  button.addEventListener("click", (event) => {
    button.classList.add("active");
  });
});

// Function removes push-the-button effect
function removeTransition(e) {
  e.target.classList.remove("active");
}

// Remove push-the-button effect 
buttonElements.forEach(button => button.addEventListener('transitionend', removeTransition));

const numberButtons = document.querySelectorAll('.number');

let displayLine1 = document.querySelector('#display-line-1');
let displayLine2 = document.querySelector('#display-line-2');


numberButtons.forEach((button => {
  button.addEventListener('click', (event) => {
    let number = button.textContent;
    displayLine1.textContent += number;
  });
}));
