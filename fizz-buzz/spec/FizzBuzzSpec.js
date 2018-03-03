describe("Fizz buzz Tests", function () {
  it("should return 1 for 1", function () {
    expect(fizzBuzzTranslate(1)).toEqual("1");
  });
  it("should return fizz for 3", function () {
    expect(fizzBuzzTranslate(3)).toEqual("fizz");
  });
  it("should return buzz for 5", function () {
    expect(fizzBuzzTranslate(5)).toEqual("buzz");
  });
  it("should return 2 for 2", function () {
    expect(fizzBuzzTranslate(2)).toEqual("2");
  });
  it("should return fizz for 6", function () {
    expect(fizzBuzzTranslate(6)).toEqual("fizz");
  });
  it("should return buzz for 10", function () {
    expect(fizzBuzzTranslate(10)).toEqual("buzz");
  });
  it("should return fizzbuzz for 15", function () {
    expect(fizzBuzzTranslate(15)).toEqual("fizzbuzz");
  });
  it("should return fizzbuzz for 30", function () {
    expect(fizzBuzzTranslate(30)).toEqual("fizzbuzz");
  });

  it("should return 4 for 4", function () {
    expect(fizzBuzzTranslate(4)).toEqual("4");
  });

  it("should return fizzbuzz for 45", function () {
    expect(fizzBuzzTranslate(45)).toEqual("fizzbuzz");
  });

  it("should return fizzbuzz for 60", function () {
    expect(fizzBuzzTranslate(60)).toEqual("fizzbuzz");
  });

});
