const moduleExitCode = require("./exitCode"); 
const fs = require("fs");

function checkFile(path, mode) {
    if (fs.existsSync(path)) {
        try {
            fs.accessSync(path, mode);
            return;
        } catch (err) {
            moduleExitCode(`no access to ${path}`);
        }
    }
    moduleExitCode(`no such file ${path}`);
}

module.exports = checkFile;
