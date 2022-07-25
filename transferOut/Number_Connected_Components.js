//path compression. 
var countComponents = function(n, edges) {
    const adj = [...Array(n).fill(null).keys()];
    for(let i=0; i<edges.length; i++) {
        const a = find(adj, edges[i][0]);
        const b = find(adj, edges[i][1]);
        if(a != b) {
            adj[a] = b;
            n--;
        }
    }
    return n;    
};
function find(adj, v) {
   
    while(v !== adj[v]) {
        adj[v] = adj[adj[v]];
        v = adj[v];
    }
    return v;
}

// countComponents(5, [[0, 1], [1, 2], [3, 4]]) /*?*/
// countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]]) /*?*/
// countComponents(5, [[0,1],[0,2],[1,2],[2,3],[2,4]]) /*?*/
countComponents(3, [[2,0],[2,1]]) /*?*/






// var countComponents = function (n, edges) {
//   const adj = Array(n).fill(0).map(_ => null)
//     for (let [v1, v2] of edges) {
//         let a = find(adj, v1)
//         let b = find(adj, v2)
//         if(a===b){
//             continue;
//         }
//         adj[a] = b
//     }
//     let comp = 0
//     for (let com of adj) {
//         if (com === null) {
//             comp++
//         }
//     }
  
//     return comp
// };
// function find(adj, v) {
//     v
//     if (adj[v] ===null) return v;
//     else return find(adj, adj[v])
// }
// countComponents(5, [[0, 1], [1, 2], [3, 4]]) /*?*/
// countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]]) /*?*/
// countComponents(5, [[0,1],[0,2],[1,2],[2,3],[2,4]]) /*?*/
//countComponents(3, [[2,0],[2,1]]) /*?*/



