
var boardRow = document.getElementsByTagName('tr');
var boardCell = document.getElementsByTagName('td');
var boardSlot = document.querySelector('slot');
const playerTurn  = document.querySelector('.playerTurn');
const reset = document.querySelector('.reset');

player1Color = 'yellow';
player2Color = 'red';

var currentPlayer = 1;
document.getElementById('output').innerHTML = "Player 1 is yellow & Player 2 is red";


for(let i = 0; i < boardCell.length; i++){
  boardCell[i].addEventListener('click', (e) =>{
    console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
  })
}


//setting every cell to
Array.prototype.forEach.call(boardCell, (cell) =>{
  cell.addEventListener('click', changeColor);
  cell.style.backgroundColor = 'white';
})


//changes cells from white to the player's color
function changeColor(e){
  let row = [];
  let col = e.target.cellIndex;

  for(let i = 5; i > -1; i--){
    if(boardRow[i].children[col].style.backgroundColor == 'white'){
      row.push(boardRow[i].children[col]);
      if(currentPlayer ===  1){
        row[0].style.backgroundColor = player1Color;
        document.getElementById('output').innerHTML = "Player 2's turn";
        if(horizontalCheck() || verticalCheck() || diagCheck1() || diagCheck2()){
          return(alert("Player 1 has won!"));
        }
        else if(tieChecker()){
          return(alert("It's a draw!"))
        }
        return currentPlayer = 2;
      }
      else{
        row[0].style.backgroundColor = player2Color;
        document.getElementById('output').innerHTML = "Player 1's turn";
        if(horizontalCheck() || verticalCheck() || diagCheck1() || diagCheck2()){
          return(alert("Player 2 has won!"));
        }
        else if(tieChecker()){
          return(alert("It's a draw!"))
        }
        return currentPlayer =1;
      }
    }
  }
}

//comparing the color in sets of 4
function colorCheck(a,b,c,d){
  return( a == b && a === c && a === d && a !== 'white');
}

//checks for the same cell color in the y axis
function horizontalCheck(){
  for(let row = 0; row < boardRow.length; row++){
    for(let col = 0; col < 4; col++){
        if(colorCheck(boardRow[row].children[col].style.backgroundColor, boardRow[row].children[col+1].style.backgroundColor,
                      boardRow[row].children[col+2].style.backgroundColor, boardRow[row].children[col+3].style.backgroundColor)){
          return true;
      }
    }
  }
}



//checks for the same cell color in the x axis
function verticalCheck(){
  for(let col = 0; col < 7; col++){
    for(let row = 0; row < 3; row++){
      if(colorCheck(boardRow[row].children[col].style.backgroundColor, boardRow[row+1].children[col].style.backgroundColor,
                    boardRow[row+2].children[col].style.backgroundColor, boardRow[row+3].children[col].style.backgroundColor)){
        return true;
      }
    }
  }
}


//checks for same cell color ascending from left to right
function diagCheck1(){
  for(let col = 0; col < 4; col++){
    for(let row = 0; row < 3; row++){
      if(colorCheck(boardRow[row].children[col].style.backgroundColor, boardRow[row+1].children[col+1].style.backgroundColor,
                    boardRow[row+2].children[col+2].style.backgroundColor, boardRow[row+3].children[col+3].style.backgroundColor)){
        return true;
      }
    }
  }
}


//checks for same cell color ascending from right to left
function diagCheck2(){
  for(let col = 0; col < 4; col++){
    for(let row = 5; row > 2; row--){
      if(colorCheck(boardRow[row].children[col].style.backgroundColor, boardRow[row-1].children[col+1].style.backgroundColor,
                    boardRow[row-2].children[col+2].style.backgroundColor, boardRow[row-3].children[col+3].style.backgroundColor)){
        return true;
      }
    }
  }
}

//checks board for tie
function tieChecker(){
  //new array for store cells that aren't white
  let grid = [];
  for(let i = 0; i < boardCell.length; i++){
    if(boardCell[i].style.backgroundColor !== 'white'){
      grid.push(boardCell[i]);
    }
  }
  if(grid.length === boardCell.length){
    return true;
  }
}

reset.addEventListener('click', ()=>{
  window.location.reload();
});
