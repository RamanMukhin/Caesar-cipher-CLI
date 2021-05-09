const moduleStreams = require("./streams");
const { pipeline } = require('stream')
const readableStream = moduleStreams.readableStream;
const writeableStream = moduleStreams.writeableStream;
const transformStream = moduleStreams.transformStream;

//readableStream.pipe(transformStream).pipe(writeableStream);
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



  
  
  






