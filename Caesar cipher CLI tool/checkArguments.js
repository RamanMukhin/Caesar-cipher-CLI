const moduleExitCode = require("./exitCode"); 

function getShift(arg) {
    if (arg== 'err' || isNaN(parseInt(arg)) ) {
        moduleExitCode("Invalid \"shift\" parameter");
    } 
    return parseInt(arg);
}

function getAction(arg) {
    if (arg !== 'encode' && arg !== 'decode') {
        moduleExitCode("Invalid \"action\" parameter");
    } 
    return arg;
}

module.exports.getShift = getShift;
module.exports.getAction = getAction;
