const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = add(5 + 3);

let calculationDescription = `(${defaultResult} + 10) * 3`;

outputResult(currentResult, calculationDescription);