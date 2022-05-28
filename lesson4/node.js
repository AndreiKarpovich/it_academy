const fs = require('fs-extra');

fs.ensureDirSync('./folder1');
fs.ensureFileSync('./folder1/file.txt');
fs.ensureDirSync('./folder2');
fs.moveSync('./folder1/file.txt', './folder2/file.txt');
fs.ensureDirSync('./folder3');
fs.copySync('./folder2/file.txt', './folder3/file.txt');
fs.emptyDir('./folder2');
fs.emptyDir('./folder3');
fs.remove('./folder1');
fs.remove('./folder2');
fs.remove('./folder3');