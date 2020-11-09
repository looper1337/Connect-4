Game.run = (function(){



  placePiece(x,y){
    Game.board[y][x] = game.currentPlayer;
  }


  printBoard(){
    for (var y = 0; y <= this.rows; y++) {
      for (var x = 0; x <= this.cols; x++) {
        if (Game.check.isPositionTaken(x, y)) {
          row = document.querySelector('tr:nth-child(' + (1 + y) + ')');
          cell = row.querySelector('td:nth-child(' + (1 + x) + ')');
          cell.firstElementChild.classList.add(Game.board[y][x]);
  }


})


render(table, game, isCurrentPlayer, preventClicking){
  table.innerHTML = ""; // Remove any existing cells
  let tr = document.createElement("tr");
	let th = document.createElement("th");
	tr.appendChild(th);
  table.appendChild(tr);
}
