const { stdin } = require("process");
const clientObject = require("./client");

// setup interface to read user input using stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// function to take in key presses stdin and perform appropriate response
const handleUserInput = (data) => {
  // if crtl + c is input, handleUserInput terminates, would otherwise run until the terminal is closed (annoying)
  if (data === '\u0003') {
    process.exit();
  }
}

// stdin uses handleUserInput as a callback to respond to inputs
stdin.on('data', handleUserInput);

console.log("Connecting ...");
clientObject.connect();
setupInput();
