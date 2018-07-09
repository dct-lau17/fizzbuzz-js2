function FizzBuzz() {
}

FizzBuzz.prototype._isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

FizzBuzz.prototype._isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

FizzBuzz.prototype._isDivisibleByThreeAndFive = function(number) {
  return (number % 3 === 0 && number % 5 === 0);
};

FizzBuzz.prototype.says = function(number) {
  if (this._isDivisibleByThreeAndFive(number)) {
    return "Fizzbuzz!";
  }
  if (this._isDivisibleByThree(number)) {
    return "Fizz";
  }
  if (this._isDivisibleByFive(number)) {
     return "Buzz";
  }
  return number;
};

// iterates numbers 1 -100
// var fizzBuzz = new FizzBuzz();
//
// for (var i = 1; i <= 100; i++) {
//   console.log(fizzBuzz.say(i));
// }
