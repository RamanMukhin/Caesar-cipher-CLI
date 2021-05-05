const fs = require('fs');
const input = fs.readFileSync('input.txt',"UTF-8");
let shift = 7;
let output = "";

console.log(input);

function makeRange (start, end) {
    let answer = {};
    for (let value = start; value <= end; value++) {
        answer[value] = value;
    }
    return answer;
}

function encode(charCode) {

    function* generator(start, end) {
        let i=charCode;
        while (true) {
           
            if (shift > 0) {
                i++;
                if (i > end) i = start;
                yield i;
            } else if (shift < 0) {
                i--;
                if (i < start) i = end;
                yield i;
            }  
        }
    }

    let answer;
    
    if (charCode in rangeLittle) {
        generator = generator(97,122);
        for (let i = 0; i < Math.abs(shift); i++) {
            answer = generator.next().value;
        }
        return answer;
    }

    if (charCode in rangeBig) {
        generator = generator(65,90);
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
    output = output + String.fromCharCode(encode(char.charCodeAt(0)));  
}


console.log(output);
fs.writeFileSync('output.txt',output);





