const { MOVE_KEYS, PLAYER_MSG } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



const handleUserInput = (key) => {
  // check for process exit request (ctrl+c), keep distinct for clarity
  if (key === '\u0003') {
    process.exit();
  }

  // if key is a move key, send the move command
  if (MOVE_KEYS[key]) {
    connection.write(`Move: ${MOVE_KEYS[key]}`);
    return;
  }

  // if key is a message key, send the message
  if (PLAYER_MSG[key]) {
    connection.write(`Say: ${PLAYER_MSG[key]}`);
    return;
  }


};

module.exports = { setupInput };