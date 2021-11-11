let totalNumber = 0;

let resultsParent = document.getElementById('result-parent')

function resetInput() {
  document.getElementById('input-total').value = null
}

function getTotalNumber() {
  totalNumber = document.getElementById('input-total').value

  for(let index = 1; index <= totalNumber; index++) {
    fizzbuzz(index)
  }

  resetInput()
}

function fizzbuzz(index) {
  let resultElement = document.createElement('li')

  if(index % 3 == 0 && index % 5 == 0) {
    resultElement.innerText = 'fizz buzz'
  } else if(index % 3 == 0) {
    resultElement.innerText = 'fizz'
  } else if(index % 5 == 0) {
    resultElement.innerText = 'buzz'
  } else {
    resultElement.innerText = index
  }

  resultsParent.append(resultElement)
}