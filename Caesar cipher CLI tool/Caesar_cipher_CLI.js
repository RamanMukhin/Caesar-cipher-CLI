/*const fs = require("fs");

fs.access('D:\\Р.А. Мухин\\Работа\\ТЭЦ3\\БЛОК 7\\МТЭЦ-3_Реконструкция 14МПа от 03.04.2020г', fs.constants.F_OK, (err) => {
        
    if (err) {
        console.error('File does not exist'); 
    }
    else {
        console.log('File does exist');    
    }
});
*/
/*
const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');
*/
// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:
/*
pipeline(
  fs.createReadStream('iInput.txt'),
  zlib.createGzip(),
  fs.createWriteStream('OOOutput.txt'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);
*/
/*
let readStream = fs.createReadStream('./input.txt');
readStream.on()
let writeStream = fs.createWriteStream('./output.txt')

readStream.pipe(writeStream)
*/
/*
function readMyData(data) {
  console.log(data);
}

fs.open('input.txt', 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }

    throw err;
  }

  readMyData(fd);
});
*/
let fs = require("fs");
let readStream = fs.createReadStream('./input.txt');
//let transformStream = fs.createReadStream('./input.txt');
//let writeStream = fs.createWriteStream('./output.txt')

//readStream.pipe(writeStream);



let text="";
readStream.on("data", function(data) {
    var chunk = data.toString();
    text+=chunk;
    console.log(text);
});

