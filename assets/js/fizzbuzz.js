function fizzBuzz(totalNumber) {
  for(let index = 1; index <= totalNumber; index++) {
    if(index % 3 == 0 && index % 5 == 0) {
      console.log('fizz buzz')
    } else if(index % 3 == 0) {
      console.log('fizz')
    } else if(index % 5 == 0) {
      console.log('buzz')
    } else {
      console.log(index)
    }
  }
}

fizzBuzz(20)