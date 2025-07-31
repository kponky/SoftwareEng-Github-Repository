
let currentInput  = '';
let firstNumber  = null;
let operator = null;
let expression = ''; // 🆕 keeps the full expression for display


//  This gets the screen where the result or input will show (the <div id="display">).
const display = document.getElementById("display");


//  This is a helper function to change what shows on the screen when you type, clear, or calculate.
const updateDisplay = (value) =>{
    display.textContent = value;
};

// handling number button clicks (eventlistener)
document.querySelectorAll('.digit').forEach(button =>{
    button.addEventListener('click', () =>{
        currentInput +=  button.textContent; // Adds the digit clicked to the input
        expression += button.textContent; // 🆕 add to expression
    updateDisplay(expression);    // Shows it on the screen
    })
})

// Handle operator clicks

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    if (currentInput === '') return; // Do nothing if no number is typed
    if (firstNumber !== null && operator !== null) {
        const result = computeResult();
        firstNumber = result;
        currentInput = '';
        expression = result + button.textContent;
       }
       else {
    firstNumber = parseFloat(currentInput); // Save current number as first number
    currentInput = ''; // Clear input for the next number
    expression += button.textContent;
  }
  
  operator = button.getAttribute('data-op');
  updateDisplay(expression)
});

})

document.querySelector('.equal').addEventListener('click', () => {
  if (firstNumber === null || operator === null || currentInput === '') return;

  const result = computeResult();
  updateDisplay(result);
  currentInput = result.toString(); // Allows chaining (e.g. 5 + 3 = 8, then +2 = 10)
  firstNumber = null;
  operator = null;
    expression = currentInput; // 🆕 allows chaining

});

const computeResult = () => {
  const secondNumber = parseFloat(currentInput); // Current number typed after operator
  if (isNaN(firstNumber) || isNaN(secondNumber)) return 'Error';

  switch (operator) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    case '/': return secondNumber !== 0 ? firstNumber / secondNumber : 'Error';
    default: return secondNumber;
  }
};

document.querySelector('.clear').addEventListener('click', () => {
  currentInput = '';
  firstNumber = null;
  operator = null;
  expression = currentInput; // 🆕 allows chaining

  updateDisplay('0');
});


// 🆕 Percentage button
document.querySelector('.percent').addEventListener('click', () => {
  if (currentInput === '') return;

  const num = parseFloat(currentInput);
  const percentValue = num / 100;

  currentInput = percentValue.toString();
  expression = currentInput;
  updateDisplay(currentInput);
});


document.querySelector('.del').addEventListener('click', () => {
  currentInput = currentInput.slice(0, -1); // Remove last character
    expression = expression.slice(0, -1); // 🆕 remove from expression too
  updateDisplay(currentInput || '0'); // If empty, show 0
});