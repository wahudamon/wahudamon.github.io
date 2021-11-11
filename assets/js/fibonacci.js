let totalNumber = 0, firstNumber = 0, secondNumber = 1, nextNumber = 0

let resultsParent = document.getElementById('result-parent')

function resetInput() {
  firstNumber = 0
  secondNumber = 1
  totalNumber = 0
  document.getElementById('input-total').value = null
}

function removeOlderChilds() {
  if(resultsParent.hasChildNodes()) {
    while(resultsParent.firstChild)
      resultsParent.removeChild(resultsParent.firstChild)
  } else {
    console.log("result-parent element has no child.")
  }
}

function getTotalNumber() {
  totalNumber = document.getElementById('input-total').value

  removeOlderChilds()

  for(let index = 1; index <= totalNumber; index++) {
    fibonacci()
  }

  resetInput()
}

function fibonacci() {
  let resultElement = document.createElement('li')

  resultElement.innerText = firstNumber
  resultsParent.append(resultElement)
  
  nextNumber = firstNumber + secondNumber
  firstNumber = secondNumber
  secondNumber = nextNumber
}