const net = require("net");
const { ADDRESS, PORT,PLAYER_NAME } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: ADDRESS,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${PLAYER_NAME}}`);
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);

    // if the server sends a message that the player has idled, exit the game
    if (data === "you ded cuz you idled\n") {
      process.exit();
    }
    // if the server sends a message that the player has crashed, exit the game
    if (data === "you crashed, so you ded.\n") {
      process.exit();
    }
  });

  return conn;
};





module.exports = { connect };