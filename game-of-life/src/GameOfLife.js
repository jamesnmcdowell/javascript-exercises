let arry = [["x", "x", "x"],
            ["o", "o", "o"],
            ["x", "x", "x"]];
let arry2 = [
            ["x", "o", "x"],
            ["x", "o", "x"],
            ["x", "o", "x"]];

let neighborCheck = function (row, column, arr) {
  for (var i = 0, i<arr.length, i++) 
  if (i === 0) {
    if (arr[row+1][column] === "o" && arr[row][j+1] === "o"
  }
  if (i >= 0 && i < arr.length) {
    if arry
  else if (i)
    return "o";
  } else {
    return "x";
  };
};



let nextDayLifeArray = function (arry) {
  let newArry = [];
  for (i = 0; i < arry.length; i++) {
    newArry.push([]);
    for (j = 0; j < arry.length; j++) {
      newArry[i].push(neighborCheck(i,j));
    }
  }
  return newArry;
  console.log(newArry);

}
nextDayLifeArray(arry);