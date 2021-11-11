function fibonacci(totalNumber) {
  // first, second and next number value initialization
  let firstNumber = 0, secondNumber = 1, nextNumber

  // fibonacci sequence process
  for(let index = 1; index <= totalNumber; index++) {
    console.log(firstNumber)
    nextNumber = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = nextNumber
  }
}

// test fibonacci function
fibonacci(20)