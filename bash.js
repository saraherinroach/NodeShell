// Output a prompt
process.stdout.write('prompt > ');

const fs = require('fs');

// The stdin 'date' event fire after a user types in a line
process.stdin.on('data', (data) => {

  const cmd = data.toString().trim(); //remove the newline

  if (cmd === 'pwd') {
    const pwdVar = require('./pwd');
    pwdVar()
  } else if (cmd === 'ls') {
    const lsVar = require('./ls')
    lsVar()
  } else if (cmd.slice(0,3) === 'cat') {
    const fileName = cmd.slice(4);
    const catVar = require('./cat');
    catVar(fileName);
  }
});

