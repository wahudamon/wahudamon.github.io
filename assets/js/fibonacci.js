let totalNumber = 0, firstNumber = 0, secondNumber = 1, nextNumber

let resultsParent = document.getElementById('result-parent')

function getTotalNumber() {
  totalNumber = document.getElementById('input-total').value

  for(let index = 1; index <= totalNumber; index++) {
    fibonacci()
  }
}

function fibonacci() {
  let resultElement = document.createElement('li')

  resultElement.innerText = firstNumber
  resultsParent.append(resultElement)
  nextNumber = firstNumber + secondNumber
  firstNumber = secondNumber
  secondNumber = nextNumber
}