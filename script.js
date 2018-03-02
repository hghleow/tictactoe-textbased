// var answer = prompt("tell me your name")


var board = {
  top:{ col1:".", col2:".", col3:"." },
  middle:{ col1:".", col2:".", col3:"." },
  bottom:{ col1:".", col2:".", col3:"." }
};

// for (var rowKey in board) {
//   console.log(board[rowKey]);
// }

function printBoard() {
  var boardOutput = "";
  for( var rowKey in board ){
    var row = board[rowKey];
    for( var columnKey in row ){
      boardOutput = boardOutput + row[columnKey];
    }
  
    boardOutput = boardOutput + "\n";
  }

  console.log( boardOutput );
}

function checkWin(row, col, player) {

  // check if row or col tile is in is full
  if ((board[row]["col1"] == player && board[row]["col2"] == player && board[row]["col3"] == player)
    || (board["top"][col]===board["middle"][col] && board["middle"][col]===board["bottom"][col])) {

    return true;
  }
  // check if diagonals are full
  if ((board["top"]["col1"] == player && board["middle"]["col2"] == player && board["bottom"]["col3"] == player) || (board["top"]["col3"] == player && board["middle"]["col2"] == player && board["bottom"]["col1"] == player)) {
    return true;
  }  
}; 


// set a variable that represents
// whether or not the game is currently running
var running = true;

// run the game on a loop
var round = 1;
while( running ){ // while the game is still going on

  var row = prompt("enter your row: top, middle or bottom");
  var col = prompt("enter your column: col1, col2, col3");

  // player 1's turn
  if (round%2===1) {
    board[row][col] = 'X'; // place tile and update board
    printBoard();
    if (checkWin(row, col, "X")===true) {
      console.log("Player 1 wins! Game over.");
      break;
    }
  }

  // player 2's turn
  else if (round%2===0) {
    board[row][col] = "O"; // place tile and update board
    printBoard();
    if (checkWin(row, col, "O")===true) {
      console.log("Player 2 wins! Game over.");
      break;
    }
  }


  // if all spaces are filled, end game
  if (round==10) {
    console.log("It's a tie! Game over.");
    break;
  }


  round +=1;
  // if game is won, end game
}
