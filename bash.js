// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'date' event fire after a user types in a line
process.stdin.on('data', (data) => {

  const cmd = data.toString().trim(); //remove the newline

  if (cmd === 'pwd') {
    const pwdVar = require('./pwd');
    pwdVar()
  } else if (cmd === 'ls') {
    const lsVar = require('./ls')
    lsVar()
  }
});

