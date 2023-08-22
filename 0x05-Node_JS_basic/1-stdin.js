const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getUserInput() {
  return new Promise((resolve) => {
    rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  const name = await getUserInput();
  rl.write(`Your name is: ${name}\n`);
  rl.write('This important software is now closing\n');
  rl.close();
}

main().catch((error) => {
  console.error('An error occurred:', error);
});
