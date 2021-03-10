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
  // Terminate: CTRL + C
  if (key === '\u0003') {
    console.log("Disconnected.");
    process.exit();
  // Movement: W, A, S, D
  } else if (key === 'w') {
    conn.write("Move: up");
  } else if (key === 'a') {
    conn.write("Move: left");
  } else if (key === 's') {
    conn.write("Move: down");
  } else if (key === 'd') {
    conn.write("Move: right");
  // Messages: Peek-a-boo! (p, o)
  } else if (key === 'p') {
    conn.write("Say: (\\(^.^)/)");
  } else if (key === 'o') {
    conn.write("Say: _(/)(\\)");
  // Messages: Spinner (i)
  } else if (key === 'i') {
    let delay = 0;
    const frames = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
    for (let frame of frames.concat(frames).concat(['|', ''])) {
      setTimeout(() => {
        conn.write(`Say: ${frame}`);
      }, delay);
      delay += 200;
    }
  // Messages: Hello (h)
  } else if (key === 'h') {
    conn.write('Say: hello!');
  }
};

module.exports = { setupInput };