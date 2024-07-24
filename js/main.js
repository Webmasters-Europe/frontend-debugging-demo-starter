'use strict';

(() => {
  // ===== DOM =====
  const DOM = {
    calculateForm: document.querySelector('#calculateForm'),
    firstNumberInput: document.querySelector('#firstNumber'),
    secondNumberInput: document.querySelector('#secondNumber'),
    result: document.querySelector('#result'),
  };

  // ===== INIT =====
  const init = () => {
    DOM.calculateForm.addEventListener('submit', handleFormSubmit);
  };

  // ===== EVENT HANDLERS =====
  function handleFormSubmit(e) {
    e.preventDefault();

    if (checkIfInputsAreEmpty(DOM.firstNumberInput, DOM.secondNumberInput)) {
      alert('Please enter a number in both fields');
      return;
    }

    const num1 = getNumberValue(DOM.firstNumberInput);
    const num2 = getNumberValue(DOM.secondNumberInput);

    const sum = add(num1, num2);

    displayResult(sum);

    DOM.calculateForm.reset();
  }

  // ===== FUNCTIONS =====
  function checkIfInputsAreEmpty(inputOne, inputTwo) {
    if (inputOne.value && inputTwo.value) {
      return false;
    } else {
      return true;
    }
  }

  function getNumberValue(input) {
    return input.value;
  }

  function add(a, b) {
    return a + b;
  }

  function displayResult(result) {
    DOM.result.textContent = result;
  }

  // ===== CALL INIT =====
  init();
})();
