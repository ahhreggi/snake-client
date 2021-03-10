// Setup user interface
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));
  return stdin;
};

// User input handler
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Terminating game!");
    process.exit();
  }
};

module.exports = { setupInput };