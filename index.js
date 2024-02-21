let display = document.getElementById("display");

function attachToDisplay(input) {
  display.value += input;
}

function clear() {
  display.value = " ";
}
