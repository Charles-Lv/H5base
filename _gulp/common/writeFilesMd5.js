const fs = require("fs");
const path = require('path');
const md5 = require("md5");
const archiver = require('archiver');


let asfiles = {
    "host":"//192.168.5.128:9090",
    "baseUrl":"/h5base/guider",
    "files":[]
};
let sProjPath = path.join(__dirname, "../../", "/guider");
let total=0;

function walk(sPath) {
    let dirList = fs.readdirSync(sPath);
    dirList.forEach(function(item) {
        if (item === ".git" || item === ".gitignore") {
            return false;
        }
        if (fs.statSync(sPath + '/' + item).isDirectory()) {
            walk(sPath + '/' + item);
        } else {
            total++;
            let sfileOne= sPath+"/"+item;
            let sMd5 = md5(fs.readFileSync(sfileOne));
            let sCurtFile=sfileOne.replace(sProjPath,"");
            asfiles["files"].push({
                "fname":sCurtFile,
                "md5":sMd5
            });
        }
    });
}
console.log("处理文件md5中，请稍后...")
walk(sProjPath);
// buf+=']}'
function writeJsonTOFile(buf) {
    fs.writeFileSync(sProjPath+"/files.json",buf,[{encoding:"utf-8"}]);
    console.log("处理完成，总共%s 个文件。文件："+sProjPath+"/files.json",total);
    console.log("创建压缩文件: files.zip ...");
    let  output = fs.createWriteStream(sProjPath+'/files.zip');
    let archive = archiver('zip');
    archive.on('error', function(err){
        throw err;
    });
    archive.pipe(output);
    archive
        .append(fs.createReadStream(sProjPath+"/files.json"),{ name: 'files.json'})
    archive.finalize();
    console.log("任务完成，处理完毕！");
}
writeJsonTOFile(JSON.stringify(asfiles));


