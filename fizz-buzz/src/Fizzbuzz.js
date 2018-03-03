var fizzBuzzTranslate = function (num) {
  if (shouldFizz(num) && shouldBuzz(num)) return "fizzbuzz";
  if (shouldFizz(num)) return "fizz";
  if (shouldBuzz(num)) return "buzz";
  return num.toString();
};

function shouldFizz(num) {
  return num % 3 === 0
}
function shouldBuzz(num) {
  return num % 5 === 0
  
}


