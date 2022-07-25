//778. Swim in Rising Water
// On an N x N grid, each square grid[i][j] represents the elevation at that point (i,j).

// Now rain starts to fall. At time t, the depth of the water everywhere is t. 
// You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t.
// You can swim infinite distance in zero time. Of course, you must stay within the boundaries of the grid during your swim.
// You start at the top left square (0, 0). What is the least time until you can reach the bottom right square (N-1, N-1)?
var swimInWater = function (grid) {
    let n = grid.length
    let N = grid.length * grid[0].length
    let id = {}
   let time = grid[0][0]
    while (!isConnected(0, N - 1)) {
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
            if ((grid[row] || {})[col] > time) continue;
        if(row<n-1 && (grid[row+1]||{})[col]<=time)
        union(row*n+col,row*n+col+n);
        if(col<n-1 && (grid[row]||{})[col+1]<=time )
        union(row*n+col,row*n+col+1);
            }
        }
        time++
    }
    return time - 1
    function isConnected(a, b) {
        return find(a) === find(b)
    }
    function find(n) {
        if (!id[n]) id[n] = n
        return id[n] === n ? n : find(id[n])
    }
    function union(a, b) {
        a = find(a)
        b = find(b)
        if (a !== b) {
            id[a] = b
        }
    }
};

swimInWater([
    [0, 1, 2, 3, 4],
    [24, 23, 22, 21, 5],
    [12, 13, 14, 15, 16],
    [11, 17, 18, 19, 20],
    [10, 9, 8, 7, 6]
]) /*?*/





