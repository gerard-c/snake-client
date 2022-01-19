const { stdin } = require("process");
// empty variable to eventually be used by connect function when writing movements to server
let connection;

// function to take in key presses stdin and perform appropriate response
const handleUserInput = (data) => {
  // switch statement to deal with different keys and their associated actions
  switch (data) {
  // different inputs corresponding to worm's movements
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
    // some cheeky canned statements
  case 'q':
    connection.write('Say: VROOOOM');
    break;
  case 'e':
    connection.write('Say: NOOOOO');
    break;
  case 'r':
    connection.write('Say: PLEASE');
    break;
    // if crtl + c is input, handleUserInput terminates, would otherwise run until the terminal is closed (annoying)
  case '\u0003':
    process.exit();
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