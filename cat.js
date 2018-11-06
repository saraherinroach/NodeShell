function catFunc (fileName) {
  const fs = require('fs');

  fs.readFile(fileName, 'utf8', (err, content) => {
    if (err) {
    throw err;
    } else {
    process.stdout.write(content);
    process.stdout.write("prompt > ");
    }
    })
}


module.exports = catFunc;
