const fs = require('fs');
const https = require('https');
       
let saveWebPage = function (url, filename, func) {
    https.get(url, function (response) {
        let pageData = '';
        response.on('data', function (dataChunk) {
            pageData += dataChunk;
        });
        response.on('end', function () {
            fs.writeFile(filename, pageData, function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`saved ${url} to ${filename}`);
            });
        });
    });
};

saveWebPage('https://www.google.com/', 'output.html', function (err) {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('It worked.');
});

