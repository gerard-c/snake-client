const { stdin } = require("process");
// empty variable to eventually be used by connect function when writing movements to server
let connection;

// function to take in key presses stdin and perform appropriate response
const handleUserInput = (data) => {
  // if crtl + c is input, handleUserInput terminates, would otherwise run until the terminal is closed (annoying)
  if (data === '\u0003') {
    process.exit();
  }
  // different inputs corresponding to worm's movements
  if (data === 'w') {
    connection.write('Move: up');
  }
  if (data === 'a') {
    connection.write('Move: left');
  }
  if (data === 's') {
    connection.write('Move: down');
  }
  if (data === 'd') {
    connection.write('Move: right');
  }
};

// stdin uses handleUserInput as a callback to respond to inputs
stdin.on('data', handleUserInput);

module.exports = {
  // setup interface to read user input using stdin
  setupInput: (conn) => {
    // writable conn object becomes connection object to be used by handleUserInput when connect() is passed to setupInput as an argument in play.js
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  }
};