const fs = require('fs');

let readAndWrite = function(input, output, func) {
    fs.readFile(input, 'utf8', function(inputErr, data) {
      console.log(data);
      fs.writeFile(output, data.toUpperCase(), function(outputErr) {
        if (outputErr) {
          console.log(outputErr);
          return;
        }
        console.log(`successfully writen to file: ${output}`);
      })
    })
  };

readAndWrite('in.txt', 'capitalized.txt', function (err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});
