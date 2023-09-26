const fs = require('fs');

const readStream = fs.createReadStream('./blog/blog3.txt', { encoding: 'utf8'});

const writeStream = fs.createWriteStream('./blog/blog4.txt');

// readStream.on('data', (chunk) => {
//   console.log('----New Chunk----');
//   console.log(chunk);
//   writeStream.write('\nNew Chunk\n');
//   writeStream.write(chunk);
// })

readStream.pipe(writeStream);