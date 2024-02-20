# Snek Multiplayer
A snake clone that runs over the network. This is a project for the Lighthouse Labs Web Development Bootcamp.


## Installation
Open two seperate terminals. One for the server and one for the client.
### Server

Clone the server project and install the dependencies.
```sh
  git clone git@github.com:dirtandgrass/snek-multiplayer.git
  cd snek-multiplayer
  npm i
```
### Client
In a separatte terminal instance, Clone the client project and install the dependencies.
```sh
  git clone git@github.com:dirtandgrass/snake-client.git
  cd snake-client
  npm i
```

## Configuration
The server and client are configured to run on localhost. To expose the server to the internet, use ngrok.

To configure the client, open the client project and edit the `src/constants.js` file. Modify the following lines
```javascript
  const ADDRESS = '::1';
  const PORT = 50541;
  const PLAYER_NAME = 'L-S';
```
* `ADDRESS` is the address of the server. If you are running the server on the same machine, you can leave this as is.
* `PORT` is the port the server is running on. The default is 50541.
* `PLAYER_NAME` is the name of the player. This will be displayed on the game board. Maximum of 3 characters.


## Running
Run the server and ngrok to expose the server to the internet. Then run the client.
```sh
  npm run play
  ngrok tcp 3000
```

### The client
```sh
  npm run start
```

## Usage

Once the client is running, the user can control their "snake" with WASD keys. The goal is to eat the food and grow the snake. The game ends when the snake collides with itself or another snake.

## Features

* Multiplayer, multiple players can play at the same time.
* Real-time updates, the game board updates in real-time.
* Players are notified via broadcast when a player joins the game.
* Previous more commands are automatically re-issued (like the original snake game).




## Authors

* [dirtandgrass] Lucas *client* and *server* modification to support broadcast

## Acknowledgements

* [Lighthouse Labs](https://www.lighthouselabs.ca/) for the original project and lab instruction/activity.


## Support

support has ded
