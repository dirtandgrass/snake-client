const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "::1",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: L-S");

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);

  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};


module.exports = { connect };