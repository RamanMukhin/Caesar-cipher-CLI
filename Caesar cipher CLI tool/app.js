const moduleStreams = require("./streams");
const { pipeline } = require('stream')

const readableStream = moduleStreams.readableStream;
const writeableStream = moduleStreams.writeableStream;
const transformStream = moduleStreams.transformStream;

pipeline(
    readableStream,
    transformStream,
    writeableStream,
    (err) => {
        if (err) {
          console.error('Program failed.', err.message);
        } else {
            console.log('Program succeeded!');
          }
      }
)
