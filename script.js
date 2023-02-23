let input = "";
let result = null;
let operator = null;
const screen = document.getElementById("result");

function addToScreen(value) {
  input += value;
  screen.value = input;
}

function clearScreen() {
  input = "";
  result = null;
  operator = null;
  screen.value = "";
}

function calculate() {
  let num1 = null;
  let num2 = null;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "+" || input[i] === "-" || input[i] === "*" || input[i] === "/") {
      operator = input[i];
      num1 = parseFloat(input.slice(0, i));
      num2 = parseFloat(input.slice(i + 1, input.length));
      break;
    }
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = null;
      break;
  }

  screen.value = result;
  input = result.toString();
}
