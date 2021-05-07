const moduleStreams = require("./streams");

const readableStream = moduleStreams.readableStream;
const writeableStream = moduleStreams.writeableStream;
const transformStream = moduleStreams.transformStream;

readableStream.pipe(transformStream).pipe(writeableStream);




  
  
  






