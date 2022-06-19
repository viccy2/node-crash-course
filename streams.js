const fs = require('fs');

const readStream = fs.createReadStream('./docs/text.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog2.txt');

// readStream.on('data', (chunk)=>{
//     console.log('.....New chuncks......');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

//pipping
readStream.pipe(writeStream);