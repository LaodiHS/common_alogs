var validTree = function (n, edges) {
    var roots = [];
    for (var i = 0; i < edges.length; i++) {
        var x = find(roots, edges[i][0]), y = find(roots, edges[i][1]);
        if (x === y) return false;
        roots[x] = y;
    }

    return edges.length == n - 1;
};

var find = function (roots, i) {
    if (roots[i] === undefined) return i;
    return find(roots, roots[i]);
}

// //iteratively
// function validTreeDFS(n, edges) {
//     let roots = []
//     for (let v = 0; v < edges.length; v++) {
//         let x = find(roots, edges[v][0])
//         let y = find(roots, edges[v][1])
//         if (x === y) return false;
//         roots[x] = y
//     }
//     return edges.length === n - 1
//     function find(root, v) {
//         if (!root[v]) return v;
//         let clear = root[v]
//         while (clear) {
//             if (!root[clear]) {
//                 return clear
//             }
//             clear = root[clear]
//         }

//     }

// }

// //   validTreeBFS(5, [[0,1], [0,2], [0,3], [1,4]]) /*?*/
 let a = validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3]])
 a 
// // validTreeBFS(5, [[0,1], [0,2], [0,3], [1,4]])/*?*/
// //  validTreeBFS(4, [[0,1],[2,3]])/*?*/

// //union find
// function validTreeUnion(n, edges) {
//     let parent = Array(n).fill(0).map((_, i) => i)
//     const find = x => parent[x] === x ? x : find(parent[x]);
//     const union = xy => {
//         const [x, y] = xy.map(find, xy)
//         parent[x] = y
//         return x !== y
//     }
//     return edges.length === n - 1 && edges.map(union).every(x => x)
// }



// validTreeUnion(5, [[0, 1], [0, 2], [0, 3], [1, 4]]) /*?*/
// validTreeUnion(5, [[0, 1], [1, 2], [2, 3], [1, 3]]) /*?*/
// // validTreeBFS(5, [[0,1], [0,2], [0,3], [1,4]])/*?*/
// //  validTreeBFS(4, [[0,1],[2,3]])/*?*/



// function BFS(n, edges) {
//     if (edges.length !== n - 1) return false;
//     const neighbors = Array(n).fill(0).map(_ => new Set())
//     for (let [v, w] of edges) {
//         neighbors[v].add(w)
//         neighbors[w].add(v)
//     }
//     let queue = [0]
//     const visited = new Set()
//     for (let root of queue) {
//         if (visited.has(root)) return false;
//         visited.add(root);
//         for (let b of neighbors[root]) {
//             queue.push(b)
//             neighbors[b].delete(root)
//         }
//     }
//     return visited.size === n
// }



// // BFS(5, [[0,1], [1,2], [2,3], [1,3]]) /*?*/
// BFS(5, [[0, 1], [0, 2], [0, 3], [1, 4]]) /*?*/
//   // BFS(5, [[0,1],[0,2],[2,3],[2,4]]) /*?*/

//   //BFS(5,[[0,1],[0,2],[1,2],[2,3],[2,4]]) /*?*/
//  //BFS(4,[[0,1],[0,2],[1,2]]) /*?*/
//  //BFS(5,[[0,1],[0,2],[2,3],[2,4]]) /*?*/



var validTree = function(n, edges) {
    if(edges.length !==n-1)return false; 
   const graph= Array(n).fill(0).map(_=>new Set())
   for(let [v1,v2] of edges )graph[v1].add(v2),graph[v2].add(v1);
   let queue=[]
   let mark=[]
   let visited=new Set()
   let isTree=true
   Object.keys(graph).map(explore)
   return isTree
   function explore(node){
       if(mark[node])return; 
       if(visited.has(node)){
           isTree=false
           return
       }
       visited.add(node)
       for(let next of graph[node]){
           graph[next].delete(node)   
            explore(next) 
       }
       mark[node]=true
       queue.unshift(node)
   }
};
validTree(5,[[0,1], [0,2], [0,3], [1,4]]) /*?*/
validTree(5,[[0,1], [1,2], [2,3], [1,3], [1,4]]) /*?*/
validTree(4,[[0,1],[2,3] ]) /*?*/

function validTree2(n, edges) {
    // if the number of nodes is not equal to the number of edges-1 then we know it is not a valid tree
        if (edges.length !== n - 1) return false;
        // walk the nodes and create an undirected graph
         const neighbors = Array(n).fill(0).map(_ => new Set())
        for (let [v, w] of edges)neighbors[v].add(w),neighbors[w].add(v);
      // create a queue starting at 0
     let queue=[0]
     // and a visited sets container
    const visited= new Set()
    // walk the queue
     for(let root of queue){
         // if the value from the queue is in the visited pile return false
         visited
    if(visited.has(root)) return false;
         // add to visisted if not alredy present 
    visited.add(root);
         //inside the queue loop, visit the graph nodes starting at set index 0
        // we walk the nodes of the set
    for(let b of neighbors[root]){
     // pushing the node key into the queue 
    queue.push(b)
        // while also deleteing the root node from any subsquent set in the child sets
     neighbors[b].delete(root)
    }    
     }
        // after having visited all the nodes buring all our bridges back
     return visited.size===n
    }

    validTree2(5,[[0,1], [0,2], [0,3], [1,4]]) /*?*/




















 

  
  
  
  
  





