import { isNumber } from "util";

var solve3 = function (board) {
    if (!board.length) return;
    mark(board);
    board.forEach((row, i) => {
        row.forEach((c, j) => {
            board[i][j] = c === '*' ? 'O' : 'X';
        });
    });
    return board
}

function mark(board) {
    for (let i = 0; i < board[0].length; i++) dfs(board, 0, i), dfs(board, board.length - 1, i);
    for (let i = 1; i < board.length - 1; i++) dfs(board, i, 0), dfs(board, i, board[0].length - 1);
}

function dfs(board, row, col) {
    if (col < 0 || col >= board[0].length || row < 0 || row >= board.length || board[row][col] !== 'O') return;
    board[row][col] = '*';
    dfs(board, row - 1, col);
    dfs(board, row, col + 1);
    dfs(board, row, col - 1);
    dfs(board, row + 1, col);
}


solve3([
    ["O", "X", "X", "O", "X"],
    ["X", "O", "O", "X", "O"],
    ["X", "O", "X", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "O", "X", "O"]
]) /*?*/



function solve2(board) {
    if (!board.length) return board;
    let height = board.length
    let width = board[0].length
    let pa = {}
    let color = Infinity
    function find(n) {
        if (!pa[n]) pa[n] = n;
        return pa[n] === n ? n : pa[n] = find(pa[n])
    }

    function unite(n1, n2) {
        // we will traverse the root nodes
        let p1 = find(n1);
        let p2 = find(n2);
        if (p1 === p2) return;
        if (p1 === color) pa[p2] = p1;
        else pa[p1] = p2;
    }


    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            // on every 'O'
            if ((board[row] || {})[col] !== 'O') continue;
            // we will check to see if it lands on the edges of the matrix 
            if (col === 0 || row === 0 || row + 1 === height || col + 1 === width) {
                // when it does we will color the node with the dummy value of color 
                unite(color, row * width + col)
            }
            // if the 'O' node has an adjacent 'O' node to it's left we will unite it's root to the current 'O' node
            if ((board[row] || {})[col - 1] === 'O') {
                unite(row * width + col - 1, row * width + col)
            }
            // if the 'O' node has an adjacent 'O' node to it's top we will unite it's root to the current 'O' node 
            if ((board[row - 1] || {})[col] === 'O') {
                unite((row - 1) * width + col, row * width + col);
            }
        }
    }

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (find(pa[row * width + col]) !== color) {
                board[row][col] = 'X';
            }
        }
    }
    return board
}







solve2([
    ["O", "X", "X", "O", "X"],
    ["X", "O", "O", "X", "O"],
    ["X", "O", "X", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "O", "X", "O"]
]) /*?*/




// solve([["X","O","O","X","X","X","O","X","X","O","O","O","O","O","O","O","O","O","O","O"],
// ["X","O","O","X","X","O","O","X","O","O","O","X","O","X","O","X","O","O","X","O"],
// ["O","O","O","X","X","X","X","O","X","O","X","X","O","O","O","O","X","O","X","O"],
// ["O","O","O","X","X","O","O","X","O","O","O","X","X","X","O","O","X","O","O","X"],
// ["O","O","O","O","O","O","O","X","X","X","O","O","O","O","O","O","O","O","O","O"],
// ["X","O","O","O","O","X","O","X","O","X","X","O","O","O","O","O","O","X","O","X"],
// ["O","O","O","X","O","O","O","X","O","X","O","X","O","X","O","X","O","X","O","X"],
// ["O","O","O","X","O","X","O","O","X","X","O","X","O","X","X","O","X","X","X","O"],
// ["O","O","O","O","X","O","O","X","X","O","O","O","O","X","O","O","O","X","O","X"],
// ["O","O","X","O","O","X","O","O","O","O","O","X","O","O","X","O","O","O","X","O"],
// ["X","O","O","X","O","O","O","O","O","O","O","X","O","O","X","O","X","O","X","O"],
// ["O","X","O","O","O","X","O","X","O","X","X","O","X","X","X","O","X","X","O","O"],
// ["X","X","O","X","O","O","O","O","X","O","O","O","O","O","O","X","O","O","O","X"],
// ["O","X","O","O","X","X","X","O","O","O","X","X","X","X","X","O","X","O","O","O"],
// ["O","O","X","X","X","O","O","O","X","X","O","O","O","X","O","X","O","O","O","O"],
// ["X","O","O","X","O","X","O","O","O","O","X","O","O","O","X","O","X","O","X","X"],
// ["X","O","X","O","O","O","O","O","O","X","O","O","O","X","O","X","O","O","O","O"],
// ["O","X","X","O","O","O","X","X","X","O","X","O","X","O","X","X","X","X","O","O"],
// ["O","X","O","O","O","O","X","X","O","O","X","O","X","O","O","X","O","O","X","X"],
// ["O","O","O","O","O","O","X","X","X","X","O","X","O","O","O","X","X","O","O","O"]])/*?*/


// solve([
//     ["O","X","X","O","X"],
//     ["X","O","O","X","O"],
//     ["X","X","X","O","X"],
//     ["O","O","O","O","O"],
//     ["X","X","O","X","O"]
// ]) /*?*/







//   solve([["X","X","X","X"],
//          ["X","O","O","X"],
//          ["X","X","O","X"],
//          ["X","O","X","X"]]) /*?*/


// solve([["O","O"],["O","O"]]) /*?*/


// solve([["O","O","O"],["O","O","O"],["O","O","O"]]) /*?*/



function solve1(board) {
    if (!board.length) return
    let height = board.length;
    let width = board[0].length;
    // create rootnodes and attach an extra node to color all leaf nodes in the matrix
    let pa = [...Array(height * width + 1)].map((_, i) => i)

    // we will use find to search for the root node after coloring to traverse the tree. 
    function find(n) {
        return pa[n] === n ? n : pa[n] = find(pa[n])
    }
    // we will use a unite function to join graphs based on their adjacent value, we will follow that color through the adj list 
    // to the leave node
    function unite(n1, n2) {
        // we will traverse the root nodes
        let p1 = find(n1);
        let p2 = find(n2);
        // if p1 fall's on the edges of the matrix we know to color the root node with that dummy value of 25
        if (p1 === pa.length - 1) pa[p2] = p1;
        // otherwise we simply color the root node to it's parent  
        else pa[p1] = p2;
    }

    // we will walk the nodes
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            // on every 'O'
            if ((board[row] || {})[col] !== 'O') continue;
            // we will check to see if it lands on the edges of the matrix 
            if (col === 0 || row === 0 || row + 1 === height || col + 1 === width) {
                // when it does we will color the node with the dummy value of 25 
                unite(pa.length - 1, row * width + col)
            }
            // if the 'O' node has an adjacent 'O' node to it's left we will unite it's root to the current 'O' node
            if ((board[row] || {})[col - 1] === 'O') {
                unite(row * width + col - 1, row * width + col)
            }
            // if the 'O' node has an adjacent 'O' node to it's top we will unite it's root to the current 'O'node 
            if ((board[row - 1] || {})[col] === 'O') {
                unite((row - 1) * width + col, row * width + col);
            }
        }
    }




    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            // we will walk the matrix checking if the node is "O" and the traversal of that node does not lead us to the dummy
            // node 
            if (find(row * width + col) !== pa.length - 1) {
                // we will know that the 'O' node is not connect to any nodes on the perifery and that it is safe to 
                // color with X; 
                board[row][col] = 'X';
            }
        }
    }

    return board

}
solve1([
    ["O", "X", "X", "O", "X"],
    ["X", "O", "O", "X", "O"],
    ["X", "O", "X", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "O", "X", "O"]
]) /*?*/






const
    cache = (fn, map = new Map) => arg => {
        arg
      
    
        if (!map.has(arg)) {
           var value = fn(arg);
            arg
            value
            map.set(arg, typeof value === 'function' ? cache(value, new Map) : value);
          
        } else {
            console.log(arg, 'in chache');
        }
        return map.get(arg);
    },        
    f = a => b => a * b,
    fc = cache(f);

console.log(fc(1)(2));
console.log(fc(1)(3)); // Cache not hit
console.log(fc(4)(2)); // Cache not hit
console.log(fc(1)(2)); // Cache hit
console.log(fc(4)(2)); // Cache hit

var string = '12345';




let strAr = string.split('').reverse().reduce((a, v, i) => {
 
   if ((i + 1) % 3 === 0 && string.length !== i + 1) {
        a.push(v)
        a.push(',')
    } else a.push(v)
    return a
}, []).reverse().join('')

strAr

function format(str) {
  
    str = str.trim().replace(/\s+/g, '').split('')
    if (!str.every(num => !isNaN(num))) return 'not a number';
    let strBuild = [str.pop()]
    for (let number of strBuild) {
        if (strBuild.length % 3 === 0) strBuild.unshift(str.pop() + ',')
        else strBuild.unshift(str.pop())
        if (!str.length) return strBuild.join('');
    }
}
format('1 a 2')/*?*/
format(' 12 ')/*?*/
format(' 123 ')/*?*/
format('12 34')/*?*/
format('123   45678')/*?*/
format('12349  567  8')/*?*/
format('  1234 9567   81   ') /*?*/
format('  1234 9567   81 c  ') /*?*/
Number('  1234956781   ').toLocaleString() /*?*/

// str = str.replace(/[^\w\s]|_/g, "")
//          .replace(/\s+/g, " ");




