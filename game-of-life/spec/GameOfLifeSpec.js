describe("Game of Life Tests", function () {
  it("0, 0 should return dead", function () {
    expect(neighborCheck(0, 0)).toEqual("x");
  });
  it("1, 0 should return dead", function () {
    expect(neighborCheck(1, 0)).toEqual("x");
  })
  it("0, 1 should return alive", function () {
    expect(neighborCheck(0, 1)).toEqual("o");
  })
  it("1, 1 should return alive", function () {
    expect(neighborCheck(1, 1)).toEqual("o");
  })
  it(" , should return a vertical blinker arry", function () {
    expect(nextDayLifeArray(arry)).toEqual(arry2);
  })
  it("given array 2 it should return array 1", function () {
    expect(nextDayLifeArray(arry2)).toEqual(arry);
  })
});
