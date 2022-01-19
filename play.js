const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '99.248.219.172',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Connection established!');
  });

  conn.on('data', (data) => {
    console.log(data.toString());
  })

  return conn;
};

console.log("Connecting ...");
connect();
