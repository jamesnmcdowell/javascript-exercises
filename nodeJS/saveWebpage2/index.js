const request = require('request');
const fs = require('fs');

let saveWebPage = function (url, filename, func) {

    request(url, function (err, response, html) {
        if (err) {
            console.log(err.message);
            return;
        }
        fs.writeFile(filename, html, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`saved ${url} to ${filename}`);
        });
    });
};


saveWebPage('https://www.google.com/', 'output2.html', function (err) {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('It worked.');
});
