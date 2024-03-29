const calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false
}

function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber
}

function clearCalculator() {
  calculator.displayNumber = '0'
  calculator.operator = null
  calculator.firstNumber = null
  calculator.waitingForSecondNumber = null
}

function inputDigit(digit) {
  if(calculator.displayNumber === '0') {
    calculator.displayNumber = digit
  } else {
    calculator.displayNumber += digit
  }
}

function inverseNumber() {
  if(calculator.displayNumber === '0') {
    return
  }

  calculator.displayNumber = calculator.displayNumber * -1
}

function handleOperator(operator) {
  if(!calculator.waitingForSecondNumber) {
    calculator.operator = operator
    calculator.waitingForSecondNumber = true
    calculator.firstNumber = calculator.displayNumber

    calculator.displayNumber = '0'
  } else {
    alert('Operator sudah ditetapkan!')
  }
}

function performCalculation() {
  if(calculator.firstNumber == null || calculator.operator == null) {
    alert('Anda belum memilih operator!')
    return
  }

  let result = 0
  if(calculator.operator === "+") {
    result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber)
  } else if(calculator.operator === "-") {
    result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
  } else if(calculator.operator === "x") {
    result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber)
  } else if(calculator.operator === "/") {
    result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber)
  } else if(calculator.operator === "%") {
    result = (parseInt(calculator.firstNumber) / 100) * parseInt(calculator.displayNumber)
  }

  calculator.displayNumber = result
}

function resetOperation() {
  calculator.operator = null
  calculator.waitingForSecondNumber = false
}

const buttons = document.querySelectorAll(".button")

for(let button of buttons) {
  button.addEventListener('click', function(event) {
    const target = event.target

    if(target.classList.contains('clear')) {
      clearCalculator()
      updateDisplay()
      return
    } else if(target.classList.contains('negative')) {
      inverseNumber();
      updateDisplay();
      return;
    } else if(target.classList.contains('equals')) {
      performCalculation()
      resetOperation()
      updateDisplay()
      return
    } else if(target.classList.contains('operator')) {
      handleOperator(target.innerText)
      return
    }

    inputDigit(target.innerText)
    updateDisplay()
  })
}