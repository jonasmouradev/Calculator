const display = document.getElementById("display");
let result = "";

function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}

function attachToDisplay(input) {
  if (
    (display.value == "0" ||
      display.value == result ||
      display.value == "Error") &&
    !isOperator(input)
  ) {
    display.value = "";
  }
  display.value += input;
}

function clearDisplay() {
  display.value = "0";
}

function equal() {
  try {
    display.value = eval(display.value);
    result = display.value;
  } catch {
    display.value = "Error";
  }
}
