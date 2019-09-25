module.exports = function zeros(expression) {

  let factorialArray = [];
  factorialArray = expression.split(/\*/);

  countOfFive = 0;
  countOfTwo = 0;
  for (i = 0; i < factorialArray.length; i++) {
    strFactorial = factorialArray[i];
    start = 1;
    step = 1;
    numFactorial = 0;
    if (strFactorial.indexOf("!!") != -1) {
      step = 2;
      numFactorial = strFactorial.substr(0, strFactorial.length - 2);
      if (numFactorial % 2 == 0) {
        start = 2;
      }
    } else if (strFactorial.indexOf("!") != -1) {
      numFactorial = strFactorial.substr(0, strFactorial.length - 1);
    }

    for (j = start; j <= numFactorial; j = j + step) {
      currentNumber = j;

      while ((currentNumber % 5 == 0) && (currentNumber > 1)) {
        countOfFive++;
        currentNumber = currentNumber / 5;
      }

      while ((currentNumber % 2 == 0) && (currentNumber > 1)) {
        countOfTwo++;
        currentNumber = currentNumber / 2;
      }
    }
  }
  return Math.min(countOfFive, countOfTwo);
}