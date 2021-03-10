const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // Event handlers
  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
    conn.write('Name: LOL');
    // conn.write('Move: up');
  });
  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });


  return conn;
};

module.exports = { connect };
