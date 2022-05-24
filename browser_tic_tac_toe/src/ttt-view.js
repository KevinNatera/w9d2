class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard();
  }

  setupBoard() {
    let ul = document.createElement('ul')
    let counter = 1;

    for (let i = 0; i < 3; i++) {
      
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.setAttribute("data-pos", `[${i},${j}]`);
        li.setAttribute("id", `${counter}`);
        counter += 1;
        ul.appendChild(li);
      }
    }
      this.el.appendChild(ul);
  }
    
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
