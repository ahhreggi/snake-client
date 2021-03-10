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
  // Messages: Peek-a-boo! (P, O)
  } else if (key === 'p') {
    conn.write("Say: (\\(^.^)/)");
  } else if (key === 'o') {
    conn.write("Say: _(/)(\\)");
  // Messages: Spinner (I = start, U = stop)
  } else if (key === 'i') {
    if (!spinforever) {
      spinforever = setInterval(() => {
        conn.write(`Say: ${getSpinner()}`);
      }, 300);
    }
  } else if (key === 'u') {
    clearInterval(spinforever);
    spinforever = undefined;
    conn.write('Say: \u001b[37m i\'m dizzy ><');
  // Messages: Hello (H)
  } else if (key === 'h') {
    conn.write('Say: hello!');
  }
};

// Spin message animation
const spinFrames = ['|', '/', '-', '\\'];
const allColors = ['\u001b[31m', '\u001b[32m', '\u001b[33m', '\u001b[34m', '\u001b[35m', '\u001b[36m', '\u001b[37m', ];
let spinforever;
let i = 0;

const getSpinner = function() {
  i = i < 3 ? i + 1 : 0;
  let color = allColors[Math.floor(Math.random() * allColors.length)];
  return `${color} ${spinFrames[i]} SPIN ${spinFrames[i]}`;
};

module.exports = { setupInput };