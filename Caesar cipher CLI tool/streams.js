const { Transform } = require('stream');
const fs = require("fs");
const coder = require("./coding.js");
const moduleArguments = require("./arguments");
const { pipeline } = require('stream')
class myTransform extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const resultString = `${coder(chunk.toString('utf8'), action, shift)}`;
      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

const action = moduleArguments.action;
const shift = moduleArguments.shift;
const inputPath = moduleArguments.inputPath;
const outputPath = moduleArguments.outputPath;
let writeableStream;
let readableStream;


if (inputPath == 0) {
    readableStream = process.stdin;
} else {
    readableStream = fs.createReadStream(`${inputPath}`, "utf8");
}

if (outputPath == 0) {
    writeableStream = process.stdout;
} else {
    writeableStream = fs.createWriteStream(`${outputPath}`);
}

//const readableStream = fs.createReadStream(`${inputPath}`, "utf8");
//const readableStream = process.stdin;
//const writeableStream = fs.createWriteStream(`${outputPath}`);
//const writeableStream = process.stdout;
const transformStream = new myTransform();

module.exports.readableStream = readableStream;
module.exports.writeableStream = writeableStream;
module.exports.transformStream = transformStream;





  
  
  






