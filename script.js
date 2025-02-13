function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(add(2, 6));
console.log(subtract(10, 4));
console.log(multiply(3, 5));
console.log(divide(8, 2));

let number1 = null;
let operator = "";
let number2 = null;

//Create a new function operate that takes an operator
// and two numbers and then calls one of the above functions on the numbers.

function operate(operator, number1, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);

    case "-":
      return subtract(number1, number2);

    case "*":
      return multiply(number1, number2);

    case "/":
      return divide(number1, number2);
  }
}

console.log(operate("+", 2, 6)); // Expected Output: 8
console.log(operate("-", 10, 4)); // Expected Output: 6
console.log(operate("*", 3, 5)); // Expected Output: 15
console.log(operate("/", 8, 2)); // Expected Output: 4
