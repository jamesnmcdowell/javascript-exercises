const fs = require('fs');

let readFile = function (fname, func) {
  fs.readFile(fname, 'utf8', (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(data.toUpperCase());
  });
};

readFile('file.txt', function (err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});