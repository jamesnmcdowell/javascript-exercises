const fs = require('fs');
const gm = require('gm');
const request = require('request');

let downloadAndCreateThumbnail = (url, filename, thumbnailFilename, size, funct) => {
    const requestOptions = {
        url: url,
        encoding: null
    };
    request(requestOptions, (err, response, data) => {
        if (err) {
            console.log(err.message);
            return;
        }
        fs.writeFile(filename, data, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            gm(filename)
                .resize(size[0], size[1])
                .write(thumbnailFilename, (err) => {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    console.log(`created image with width: ${size[0]} height: ${size[1]} `);
                });
        });
    });
};

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';
downloadAndCreateThumbnail(url, filename, thumbnailFilename, [200,200], (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('It worked');
});

