const moduleCheckArguments = require("./checkArguments");
const { program } = require('commander');
program.version('0.0.1');

program
  .option('-a, --action <arg>', 0, 'err')
  .option('-s, --shift <arg>', 0, 'err')
  .option('-i, --input <arg>', 0, 0)
  .option('-o, --output <arg>', 0, 0);

program.parse(process.argv);
const options = program.opts();

const action = moduleCheckArguments.getAction(options.action);
const shift = moduleCheckArguments.getShift(options.shift);
const inputPath = `${options.input}`;
const outputPath = `${options.output}`;

module.exports.action = action;
module.exports.shift = shift;
module.exports.inputPath = inputPath;
module.exports.outputPath = outputPath;
