const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
//triggers setupInput and connect functions together, also allows conn symbol returned by connect to be used when writing movements in handleUserInput
setupInput(connect());
