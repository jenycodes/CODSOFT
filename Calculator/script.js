const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = null;
let firstOperand = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "clear") {
      clearDisplay();
    } else if (value === "=") {
      calculateResult();
    } else if (["+", "-", "*", "/"].includes(value)) {
      handleOperator(value);
    } else {
      updateDisplay(value);
    }
  });
});

function clearDisplay() {
  currentInput = "";
  operator = null;
  firstOperand = null;
  display.textContent = "0";
}

function calculateResult() {
  if (operator && firstOperand !== null) {
    const secondOperand = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
    }

    display.textContent = result.toString();
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
  }
}

function handleOperator(op) {
  if (currentInput === "") return;

  if (operator) {
    calculateResult();
  }

  firstOperand = parseFloat(currentInput);
  operator = op;
  currentInput = "";
}

function updateDisplay(value) {
  if (value === "." && currentInput.includes(".")) return;

  currentInput += value;
  display.textContent = currentInput;
}
