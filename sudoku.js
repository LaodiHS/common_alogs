import { log } from "util";

function isValidSudoku(board){
    const seen = new Set()
    const set={}
    set.add = val => !seen.has(val)?(seen.add(val),true):false
    for(let row = 0; row < 9; row++){
        for(let col= 0; col < 9; col++){
            let number = board[row][col]
            if(number !== "."){
                board[row][col]= board[row][col]
            let allRow = number + "in row" + row;
            let allCol = number + "in col" + col;
            let allQudrant = number + "block" + Math.floor(row/3) + "-" + Math.floor(col/3);
                    if (seen.has(allRow) || seen.has(allCol) || seen.has(allQudrant)) {
                        return false;
                    }
                seen.add(allRow)
                seen.add(allCol)
                seen.add(allQudrant)
                }
            }
        }
        return true;
    }





  isValidSudoku([
    [".","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".","1","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]) /*?*/

isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]) /*?*/











    // var solveSudoku = function(board) {
    //     if (board === null || board.length === 0) return;
        
    //     const isValid = (board, row, col, c) => {
    //       for (let i = 0; i < 9; i++) {
    //         const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    //         const n = 3 * Math.floor(col / 3) + i % 3;
    //         if (board[i][col] === c || board[row][i] === c || board[m][n] === c) return false;
    //       }
    //       return true;
    //     }
        
    //     const solver = board => {
    //       for (let i = 0; i < board.length; i++) {
    //         for (let j = 0; j < board[0].length; j++) {
    //           if (board[i][j] === '.') {
    //             for (let c = 1; c <= 9; c++) {
    //               if (isValid(board, i, j, c +'')) {
    //                 board[i][j] = c+'';
    //                 if (solver(board)) return true;
    //                 else board[i][j] = '.';
    //               }
    //             }
    //             return false;
    //           }
    //         }
    //       }
    //       return true;
    //     }
        
    //     solver(board);
  
    //   };
    



      var solveSudoku = function (board) {
          if (!board || !board.length) return;

          solve(board, 0, 0);

            return board
      };

      var solve = function (board, row, col) {
          // if we reach the point where our row is > or === to 9  we that we have traversed the board 
          if (row >= 9) return true;
            //if we reach the end of the col incrament the row and reset the col          
          if (col >= 9) return solve(board, row + 1, 0);
            // if the board at it's current postion has no value return a traversal of the point in the col right explortaion
          if (board[row][col] !== '.') return solve(board, row, col + 1);
          // look for possable values 1 to 9
          for (var i = 1; i <= 9; i++) {

              var num = '' + i;
              // check if it is valid 
              if (isValid(board, row, col, num)) {
                  // if our value is valid we mutate the board and assign the '.' our number
                  board[row][col] = num;
                  // we then tehck to see if our board is solved by recursively passing the board to its self with an incramented column
                  if (solve(board, row, col + 1)) return true;
                  board[row][col] = '.';
              }
          }
          return false;
      };
                // when check for validitity we pass the board current row col and our selected number
      function isValid(board, row, col, selected) {
                // we go over all possable numbers again 
          for (var i = 0; i < 9; i++) {
            // if our board  at either our row  or col equals our selected number we indicated that the selected number is not a valid value and return boolian false 
              if (board[row][i] === selected) return false;
              if (board[i][col] === selected) return false;
          }
          // after having checked our selected number against all boad values and found no conflicts we check the 3X3 square
        // we traverse the 3X3 matrix by reducing the coordincates to their equal parts 
          var startRow = 3 * Math.trunc(row / 3);

          var startCol = 3 * Math.trunc(col / 3);
            // we then limit our traversal to the subset limit row bound 
          for (var r = startRow; r < startRow + 3; r++) {
              // we then check to see col limit col bound 
              for (var c = startCol; c < startCol + 3; c++) {
                  // we then check to see if our selected value exists and return false if it does
                  if (board[r][c] === selected) return false;
              }
          }
      
          return true;
      };
    
    
    
    


solveSudoku([
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]) /*?*/








