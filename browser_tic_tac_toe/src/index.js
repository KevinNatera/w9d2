const View =  require("./ttt-view");
const Game = require("../ttt_node/game");

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".ttt")
  const newGame = new Game()
  const newView = new View(newGame, element)
});
