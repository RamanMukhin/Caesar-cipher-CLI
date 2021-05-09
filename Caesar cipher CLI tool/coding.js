function coder(string, action, shift) {
  
  let output="";
  
  function code(char) {

    function range(start, end) {
      let answer = char.charCodeAt(0)
      let numberOfSteps = Math.abs(shift);
      while (numberOfSteps > 0) {
        if ((action == "encode" && shift > 0) || (action == "decode" && shift < 0)) {
          answer++;
          if (answer > end) answer = start;
          numberOfSteps--;
        } 

        if ((action == "encode" && shift < 0) || (action == "decode" && shift > 0)) {
          answer--;
          if (answer < start) answer = end;
          numberOfSteps--;
        }
      }
      return answer;
    }

    if ((char.charCodeAt(0) >= 97) && (char.charCodeAt(0) <= 122)) {
      return range(97, 122);
    } else if ((char.charCodeAt(0) >= 65) && (char.charCodeAt(0) <= 90)) {
      return range(65, 90);
    } 
    return char.charCodeAt(0);  
  } 

  for (char of string) {    
    output = output + String.fromCharCode(code(char));  
  }

  return output;

}

module.exports = coder;
