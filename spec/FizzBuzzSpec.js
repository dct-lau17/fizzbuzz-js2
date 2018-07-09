describe('FizzBuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
   fizzbuzz = new FizzBuzz();
  });

  describe('knows when number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz._isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz._isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 and 5', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz._isDivisibleByThreeAndFive(15)).toBe(true);
    });
  });

  describe('knows when number is NOT', function() {

    it('is divisible by 3', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz._isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz._isDivisibleByFive(6)).toBe(false);
    });

    it('divisible by 3 and 5', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz._isDivisibleByThreeAndFive(19)).toBe(false);
    });
  });

  describe('when playing, says', function() {

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"Fizzbuzz!" when a number is divisible by 3 and 5', function() {
      expect(fizzbuzz.says(15)).toEqual("Fizzbuzz!");
    });
  });
});
