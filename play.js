const { connect } = require('./client');

// Setup user interface
const setupInput = function(cbHandler) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => cbHandler(key));
  return stdin;
};

// User input handler
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Terminating game!");
    process.exit();
  }
};

console.log('Connecting...');
setupInput(handleUserInput);
connect();
