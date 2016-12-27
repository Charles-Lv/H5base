const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

const fs = require("fs");
const path = require('path');

let asfiles = [];
function walk(sPath) {

    let dirList = fs.readdirSync(sPath);
    dirList.forEach(function (item) {
        if (item === ".git" || item === ".gitignore") {
            return false;
        }
        if (fs.statSync(sPath + '/' + item).isDirectory()) {
            walk(sPath + '/' + item);
        } else if (path.extname(item) === ".png" || path.extname(item) === ".jpg") {
            asfiles.push(sPath + '/' + item);
        }
    });
    return asfiles;
}

let sProjPath = path.join(__dirname, "../../", "/guider")

// walk(sProjPath);
// console.log(asfiles.toString());

let sProjPath2 = path.join(__dirname, "../../", "/guider/page/basic-detailofgoods")
console.log(sProjPath2);
imagemin([sProjPath2 + '/*.png'], sProjPath2, {
    use: [
        imageminPngquant({quality: '65-80'})
    ]
}).then(files => {
    console.log(files.length);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});
