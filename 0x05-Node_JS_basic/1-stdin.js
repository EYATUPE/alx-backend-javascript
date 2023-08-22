// The initial message to the standard output
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Setting up an event listener for the 'readable' event on standard input
process.stdin.on('readable', () => {
  // Reading the available data from standard input
  const data = process.stdin.read();

  // Setting the condition If there's data available
  if (data) {
    // Writing the formatted message to the standard output
    process.stdout.write(`Your name is: ${data}`);
  }
});

// Setting up an event listener for the 'end' event on the standard input
process.stdin.on('end', () => {
  // Writing the closing message to the standard output
  process.stdout.write('This important software is now closing\n');
});
