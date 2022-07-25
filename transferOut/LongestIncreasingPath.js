

function longestIncreasingPath(arr) {

    if (!arr.length)return 0; 
     let rows = arr.length;
    let cols = arr[0].length;
    f = [...Array(rows)].map(x=>[...Array(cols)].fill(0));
  
    let res = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            res = Math.max(res, DFS(r, c));
        }
    }

    return res

    function DFS(r, c) {
        if (f[r][c] > 0) return f[r][c];
        let res = 1;
        if (r + 1 < rows && arr[r + 1][c] > arr[r][c]) res = Math.max(res, 1 + DFS( r + 1, c));
        if (r - 1 >= 0   && arr[r - 1][c] > arr[r][c]) res = Math.max(res, 1 + DFS( r - 1, c));
        if (c + 1 < cols && arr[r][c + 1] > arr[r][c]) res = Math.max(res, 1 + DFS( r, c + 1));
        if (c - 1 >= 0   && arr[r][c - 1] > arr[r][c]) res = Math.max(res, 1 + DFS( r, c - 1));
        f[r][c] = res;
        return f[r][c];
    }
}
let ar = [[9,9,4],[6,6,8],[2,1,1]];

longestIncreasingPath(ar) /*?*/