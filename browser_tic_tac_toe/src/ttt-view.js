class View {
  constructor(game, el) {}

  setupBoard() {
    let ul = document.createElement('ul')
    ul.width = 500
    ul.display = "flex"
    ul.flexWrap = "wrap"

    for(let i = 0; i < 10; i++) {
      let li = document.createElement('li');
      li.dataset.pos = i
      ul.appendChild(li);
    }

  }
    
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
