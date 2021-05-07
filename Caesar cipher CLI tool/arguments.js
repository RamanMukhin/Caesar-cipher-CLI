const { program } = require('commander');
//program.version('0.0.1');

program
  .option('-a, --action <arg>', 0,0)
  .option('-s, --shift <arg>', 0,0)
  .option('-i, --input <arg>', 0,0)
  .option('-o, --output <arg>', 0,0);

program.parse(process.argv);
const options = program.opts();
/*
let action;
let shift;
let inputPath;
let outputPath;

if (options.shift)  shift = `${options.shift}`;
if (options.action) action = `${options.action}`;
if (options.input) inputPath = `${options.input}`;
if (options.output) outputPath = `${options.output}`;
*/
let action = options.action;
let shift = +options.shift;
let inputPath = `${options.input}`;
let outputPath = `${options.output}`;

module.exports.action = action;
module.exports.shift = shift;
module.exports.inputPath = inputPath;
module.exports.outputPath = outputPath;

