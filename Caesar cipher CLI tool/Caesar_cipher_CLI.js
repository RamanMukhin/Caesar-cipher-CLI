const { Transform } = require('stream');
const fs = require("fs");
 
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


let shift = 26;
let action = "decode";

let readableStream = fs.createReadStream("input.txt", "utf8");
let writeableStream = fs.createWriteStream("output.txt");
const transformStream = new myTransform();

readableStream.pipe(transformStream).pipe(writeableStream);


function coder(string, action, shift) {
  let output="";
  
  function code(char) {
    if ((char.charCodeAt(0) >= 97) && (char.charCodeAt(0) <= 122)) {
      let answer = char.charCodeAt(0)
      let numberOfSteps = Math.abs(shift);
      while (numberOfSteps > 0) {
        if ((action == "encode" && shift > 0) || (action == "decode" && shift < 0)) {
          answer++;
          if (answer > 122) answer = 97;
          numberOfSteps--;
        } 

        if ((action == "encode" && shift < 0) || (action == "decode" && shift > 0)) {
          answer--;
          if (answer < 97) answer = 122;
          numberOfSteps--;
        }
      }
      return answer;
    } else if ((char.charCodeAt(0) >= 65) && (char.charCodeAt(0) <= 90)) {
      let answer = char.charCodeAt(0)
      let numberOfSteps = Math.abs(shift);
      while (numberOfSteps > 0) {
        if ((action == "encode" && shift > 0) || (action == "decode" && shift < 0)) {
          answer++;
          if (answer > 90) answer = 65;
          numberOfSteps--;
        } 

        if ((action == "encode" && shift < 0) || (action == "decode" && shift > 0)) {
          answer--;
          if (answer < 65) answer = 90;
          numberOfSteps--;
        }
      }
      return answer;
    } 
    return char.charCodeAt(0);  
  }

  for (char of string) {
    
    output = output + String.fromCharCode(code(char));  
  }

  return output;

}
  
  
  






