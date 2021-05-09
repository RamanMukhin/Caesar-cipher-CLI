const fs = require("fs");

function checkFile(path, mode) {
    if (fs.existsSync(path)) {
        try {
            fs.accessSync(path, mode);
            return;
        } catch (err) {
            console.error(`no access to ${path}`);
            process.exit(1);
        }
    }
    console.error(`no such file ${path}`)
    process.exit(1);
}

module.exports = checkFile;