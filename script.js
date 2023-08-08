const buttonElements = document.querySelectorAll("button");

buttonElements.forEach(function(button) {
  button.addEventListener("click", function() {
    toggleColors(button);
  });
});

function toggleColors(element) {
  // Toggle background color and text color
  if (element.style.backgroundColor === "white") {
    element.style.backgroundColor = "black";
    element.style.color = "white";
  } else {
    element.style.backgroundColor = "white";
    element.style.color = "black";
  }
}






