//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
module.exports.process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline
  
      if (cmd === 'pwd') {
          console.log(process.cwd().toString().trim());
          process.stdout.write('prompt > ');
      }
});