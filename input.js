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


  switch (key) {
  case "w":
    connection.write("Move: up");
    break;
  case "a":
    connection.write("Move: left");
    break;
  case "s":
    connection.write("Move: down");
    break;
  case "d":
    connection.write("Move: right");
    break;
  case "1":
    connection.write("Say: u gonna ded!");
    break;
  case "2":
    connection.write("Say: i make you ded!");
    break;
  case "3":
    connection.write("Say: my snek so big!");
    break;

  }

};

module.exports = { setupInput };