const net = require("net");
module.exports = {
  connect: () => {
    // establishes connection to server
    const conn = net.createConnection({
      host: '165.227.47.243',
      port: 50541
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    // actions performed a=upon successful connection
    conn.on('connect', () => {
      // prints connection message locally
      console.log('Connection established!');
      // shows name (initials) above snek avatar
      conn.write('Name: GC');
    });

    // so far the data in question is a rude message on death by idling...
    conn.on('data', (data) => {
      console.log(data.toString());
    });

    return conn;
  }
};