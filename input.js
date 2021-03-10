// Setup user interface
const setupInput = function(conn) {
  const connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key, connection));
  return stdin;
};

// User input handler
const handleUserInput = function(key, conn) {
  if (key === '\u0003') {
    console.log("Terminating game!");
    process.exit();
  } else if (key === 'w') {
    conn.write("Move: up");
  } else if (key === 'a') {
    conn.write("Move: left");
  } else if (key === 's') {
    conn.write("Move: down");
  } else if (key === 'd') {
    conn.write("Move: right");
  }
};

module.exports = { setupInput };