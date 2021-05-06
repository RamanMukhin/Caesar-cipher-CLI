const { program } = require('commander');
program.version('0.0.1');

program
  .option('-a, --action <arg>', 0,0)
  .option('-s, --shift <arg>', 0,0)
  .option('-i, --input <arg>', 0,0)
  .option('-o, --output <arg>', 0,0)

program.parse(process.argv);
const options = program.opts();


let action;
let shift;
let inputFile;
let outputFile;
const fs = require('fs');

if (options.shift)  shift = `${options.shift}`;
if (options.action) action = `${options.action}`;
if (options.input) inputFile = `${options.input}`;
if (options.output) outputFile = `${options.output}`;
console.log(inputFile);
const input = fs.readFileSync(inputFile,"UTF-8");
let output = "";


try {
    if (shift == undefined) {
        throw new Error("Нет обязательного параметра SHIFT");
    }
} catch(err) {
    console.log(err.message);
}




function makeRange (start, end) {
    let answer = {};
    for (let value = start; value <= end; value++) {
        answer[value] = value;
    }
    return answer;
}

function encode(charCode, action, shift) {

    function* generator(start, end, shift) {
        let i=charCode;
        while (true) {
           
            if ((action == "encode" && shift > 0) || (action == "decode" && shift < 0)) {
                i++;
                if (i > end) i = start;
                yield i;
            } else if (action == "encode" && shift < 0 || action == "decode" && shift > 0) {
                i--;
                if (i < start) i = end;
                yield i;
            }  else if (shift == undefined) {
                throw new ReadError("Нет обязательного параметра SHIFT");
            }
            
        }
    }

    let answer;
    
    if (charCode in rangeLittle) {
        generator = generator(97, 122, shift);
        for (let i = 0; i < Math.abs(shift); i++) {
            answer = generator.next().value;
        }
        return answer;
    }

    if (charCode in rangeBig) {
        generator = generator(65, 90, shift);
        for (let i = 0; i < Math.abs(shift); i++) {
            answer = generator.next().value;
        }
        return answer;
    }
    
    return answer = charCode;   
}


const rangeLittle = makeRange(97, 122);
const rangeBig = makeRange(65, 90);

for (char of input) {
    output = output + String.fromCharCode(encode(char.charCodeAt(0), action, shift));  
}

console.log(action);
console.log(shift);
console.log(output);
fs.appendFileSync('output.txt', output);







