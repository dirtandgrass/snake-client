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

let intervalId; // store interval id for movement setInterval
const handleUserInput = (key) => {
  // check for process exit request (ctrl+c), keep distinct for clarity
  if (key === '\u0003') {
    process.exit();
  }

  // if key is a move key, send the move command
  if (MOVE_KEYS[key]) {
    connection.write(`Move: ${MOVE_KEYS[key]}`);
    // re-issue the command until another key is pressed
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
      connection.write(`Move: ${MOVE_KEYS[key]}`);
    }, 75);

    return;
  }

  // if key is a message key, send the message
  if (PLAYER_MSG[key]) {
    connection.write(`Say: ${PLAYER_MSG[key]}`);
    return;
  }

};

module.exports = { setupInput };