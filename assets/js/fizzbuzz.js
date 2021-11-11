let totalNumber = 0

let resultsParent = document.getElementById('result-parent')

function resetInput() {
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