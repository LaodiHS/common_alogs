
var findCircleNum = function (matrix) {
    let visit = Array(matrix.length).fill(0);
    let count = 0;
    matrix.forEach((_, col) => {
        if (visit[col] === 0) {
            visit[col]=1
            count++;
            dfs(matrix, visit, col);      
        }
    })
    return count;
};
    var dfs = function (grid, visit, row) {
        grid.forEach((_,col)=> {
            if (grid[row][col] === 1 && visit[col] === 0) { 
                visit[col] = 1;
                dfs(grid, visit, col); 
            }
        })
    }
findCircleNum([
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 1]
]) /*?*/





 
