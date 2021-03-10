const net = require('net');
const { IP, PORT } = require('./constants');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // Event handlers
  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
    conn.write('Name: REG');
    // conn.write('Move: up');
  });
  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });
  conn.on('error', (err) => {
    console.log("Error: ", err.message);
  });

  return conn;
};

module.exports = { connect };
