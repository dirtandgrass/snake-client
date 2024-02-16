const net = require("net");

// establishes a connection with the game server
const connect = () => {
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



const setupInput = conn => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  // check for process exit request (ctrl+c)
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { connect, setupInput };