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

    // message output after connecting successfully
    conn.on('connect', () => {
      console.log('Connection established!');
      conn.write('Name: GC');
      // setInterval(() => {
      //   conn.write('Move: up');
      // }, 50);
    });

    // so far the data in question is a rude message on death by idling...
    conn.on('data', (data) => {
      console.log(data.toString());
    });

    return conn;
  }
}