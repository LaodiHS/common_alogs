// factorial all arrangments (n!)
// n permute r (nPr = n!/(n-r)! )  is a slection r bojects from a collection of n where order does matter. This will be more than choose. nPr 
// n choose r (nCr = n!/(n-r)!(r!) )   select r object from a collection of n where order does not matter . this will be less than nPr.because nCr= (nPr/r!) 
// binominal coefficent is just n choose r

    


//what we need to build 
//nCr(m+n-2,n-1)

// example nCr(7+3-2,3-1) = 28

// logic First of all you should understand that we need to do n + m - 2 movements : m - 1 down, n - 1 right, because we start from cell (1, 1).

//Secondly, the path it is the sequence of movements( go down / go right),
//therefore we can say that two paths are different
//when there is i-th (1 .. m + n - 2) movement in path1 differ i-th movement in path2.

//So, how we can build paths.
//Let's choose (n - 1) movements(number of steps to the right) from (m + n - 2),
//and rest (m - 1) is (number of steps down).


// determining all paths 
function uniquePaths(n){
    // index offset for target cell
    const N = n*2-2

    const k = n-1
    
 
    // here we calculate the total possible path number 
            // Combination(N, k) = n! / (k!(n - k)!)
            // reduce the numerator and denominator and get
    let res = 1
    for (let i = 1; i <= k; i++) {
        res = res*  ( k + i) / i
        res
    }
    return res/n
}

uniquePaths(5) /*?*/







function numOfPathsToDest(n) {

   
    let totoal=0
    traverse( 0, 0, '')
    function traverse(row, col) {
        if (row<=n && col<=n && row >= col) {
         if (row === n-1 && col === n-1) {            
              totoal++
              return           
                }
        traverse( row + 1, col)
         traverse( row, col + 1)
     };
        };
 
  return totoal 
   
    }

    numOfPathsToDest(4) /*?*/




    function permute(arr){
        let list=[]
        backtrack(list, [], arr, 0)
        return list
        function backtrack(list, temp, arr){
       if(temp.length === arr.length){
           list.push(temp.slice())
           return 
       }
        for(let i = 0; i < arr.length; i++){
            if(temp.includes(arr[i]))continue;
            temp.push(arr[i])
            backtrack(list,temp,arr)
            temp.pop()
            }
        }
    }


    permute([1,2,3])/*?*/
var exist = function (board, word) {
    for (let row = 0; row < board.length; row++) {
        let cols = board[row];
        for (let col = 0; col < cols.length; col++) {
            if (backtrack(board, word, 0, row, col)) {
                return true;
            }
        }
    }
    return false
    function backtrack(board, word, start, row, col) {
        if (start === word.length) {
            return true;
        }
        if (word[start] === (board[row] || {})[col]) {
            let hold = board[row][col]
            board[row][col] = 0
            let exists = backtrack(board, word, start + 1, row + 1, col) ||
                backtrack(board, word, start + 1, row - 1, col) ||
                backtrack(board, word, start + 1, row, col + 1) ||
                backtrack(board, word, start + 1, row, col - 1);
            board[row][col] = hold
            return exists;
        } else return false;
    }
};

            exist(
                [["a","b"],["c","d"]]
                ,"cdba")  /*?*/





