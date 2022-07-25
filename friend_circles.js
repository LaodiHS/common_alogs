
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
    
let friend_circles =[
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 1]
]
let m = findCircleNum([
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 1]
]) 


let nodes = [];
let x = 0
let count = 0;
let cache_loop_traversal = {};
let max_x = friend_circles.length - 1;
 let max_y = friend_circles[x].length - 1;
while (x < friend_circles.length) {
    let y = 0;
   
    while (y < friend_circles[x].length) {
        if (cache_loop_traversal[x_+ y]) continue;

        let value = friend_circles[x][y];
        if (value === 1) {
            
            
            let x_1 = [x + 1, x - 1]; let y_1 = [y + 1, y - 1];
            while (x_1.length && y_1.length) {
                cache_loop_traversal[x] = true;
                cache_loop_traversal[y] = true;
                let x_ = x_1.pop();
                let y_ = y_1.pop();
                if (x_ < 0 || x_ > max_x) continue;
                if (y_ < 0 || y_ > max_y) continue;
                cache_loop_traversal[x + y_] = true;
                cache_loop_traversal[x_ + y] = true;
                if (friend_circles[x_][y]) {
                    if(!cache_loop_traversal)
                    x_1.push(x_ + 1)
                }
            };
    
                
            

            
            y++;
        }
            
            





        x++;
    };
}
 
// function dfs(x, y){

//     if (x >= friend_circles.length) return 0;
//     if (y >= friend_circles[0].length) return 0; 



// }


// friend_circles.forEach((col, x) =>
// {
    
//     col.forEach((rowVal, y) =>
//     {
//         if (rowVal === 1) {
        
//                 dfs(x, y)

//     }



// })



// } )