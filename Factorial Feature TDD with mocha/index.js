const Calculate = {
  factorial(inputNumber){
    if(inputNumber===0) {
      return 1;
    }
    let factorial=inputNumber;
    for(let i=inputNumber-1; i>0; i--) {
      factorial*= i;
    }
    return factorial;
  }
}

module.exports = Calculate;


