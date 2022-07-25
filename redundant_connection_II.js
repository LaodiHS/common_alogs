// var findRedundantDirectedConnection = function(edges) {
//     // to store the possible reudndant connect edge
//    let cand1 = null;
//    let cand2 = null;
   
//     // since all the nodes are in order we can use a disjoint 
//     // initiate all the node to a different group
//    let parent = Array(edges.length).fill(0).map((_,i)=>i)
   
//    for(let edge of edges){ 

//      let xroot = find(parent, edge[0]-1);
//      let yroot = find(parent, edge[1]-1);
//      // if they are not equal it means
//      if(xroot !== yroot) {
//        // belong to different group
//        if(yroot !== edge[1]-1){
//          //record the last edge which results in "multiple parents" issue
//          cand1 = edge; // record the last e 
//        }else {
//          parent[yroot] = xroot; // 合并两个group
//        }
//      } else {
//        cand2 = edge;
//      }
//    }
//      // if there is only one issue, return this one
//      if(cand1 === null) return cand2;
//      if(cand2 === null) return cand1;
     
//      // If both issues present, then the answer should be the first edge which results in "multiple parents" issue
//          // Could use map to skip this pass, but will use more memory.
//      for(let edge of edges){
//        if(edge[1] === cand1[1]) {
//          return edge
//        }
//      }
     
//      return [];
        
//  }
     
//  function find(parent, p) {

//      while(p != parent[p]) {
        
//          parent[p] = parent[parent[p]]; 
//          p = parent[p];
//      }    
//      return p;
//  }

// findRedundantDirectedConnection([[1,2], [1,3], [2,3]])
//     /*?*/
// findRedundantDirectedConnection([[1,2], [2,3], [3,4], [4,1], [1,5]]) /*?*/

// findRedundantDirectedConnection([[1,2], [2,3], [3,4], [4,1], [1,5], [4,2]]) /*?*/



// var findRedundantDirectedConnection2 = function(edges) {
//   let candidate1=null
//   let candidate2=null
// // since the nodes are in order it is easy mirror their nodes on to an adjacancy list 
// // whose order matches that of the directed graph
// let parent= Array(edges.length).fill(0).map((_,i)=>i)

// for(edge of edges){
// let rootNodeV1=findRoot(parent, edge[0]-1)
// let rootNodeV2=findRoot(parent, edge[1]-1)
// // if the rootNodes don't match we are going to paint the outlying node to that of it's parent. 


// // if the two root vertexes do not form a cycle  
// if(rootNodeV1 !==rootNodeV2){

// // if the vertexes do not form a cycle
//   // and we encounter an edge already colored by another vertext
//    // we know that it could be a candidate to forming a tree
  
//   if(parent[rootNodeV2] !== edge[1]-1)candidate1=edge;
//   else parent[rootNodeV2] = rootNodeV1;
// }
// // if the edges do equal each other we would have found a cycle and that cycle would be 
// // composed of the nodes assocated with those edges 
// else candidate2= edge
// }
// // in the case of candidate1, if we encountered an edge whose child compliment  
// // has never been colored by more than vertex.

// // and an edge exists such that it cycles back to a root.  
// if(candidate1 ===null)return candidate2;
// if(candidate2 ===null)return candidate1;

// // we know that the connecting vertext is one composed of the two connecting vertacies

// for(let edge of edges){

// if(candidate1[1]=== edge[1]){
//   return edge
// }


// }


//  }

// // we are going to walk the nodes and where the nodes match 
// // themselves we are going to return those values and where they don't 
// //  we are going to return the last nodes which does, as that will be the root node
// // function findRoot(parent,node){
// //   if(parent[node] !== node)return findRoot(parent,parent[node]);
// //   return node
  
// } 


// findRedundantDirectedConnection2 ([[1,2], [1,3], [2,3]])
// /*?*/
// findRedundantDirectedConnection2 ([[1,2], [2,3], [3,4], [4,1], [1,5]]) /*?*/

// findRedundantDirectedConnection2 ([[1,2], [2,3], [3,4], [4,1], [1,5], [4,2]]) /*?*/



// var findRedundantDirectedConnection = function(edges) {
    
//   const root = new Array(edges.length+1).fill(0).map((a,i) => i);
//   const parents = new Array(edges.length+1).fill(0);
  
//   let cand1;
//   let cand2;
  
//   for(let e of edges) {
//       // already assigned a parent
//       if(parents[e[1]] !== 0) {
//           cand1 = e;
//           cand2 = [parents[e[1]], e[1]];
//       } 
//       parents[e[1]] = e[0];
//   }
  
//   function find(t) {
//       while(t !== root[t]) {
//           t = root[t];
//       }
//       return root[t];
//   }
  
//   function union(a,b) {
//       if(root[find(a)] === root[find(b)]) {
//           return true;
//       }
//       // assign a to b as parent
//       root[find(a)] = find(b);
//       return false;
//   }
  
//   for(let e of edges) {
//       if(cand1 && cand1[0] === e[0] && cand1[1] === e[1]) continue;
//       if(union(e[0], e[1])) {
//           if(!cand2) {
//               return e;
//           }
//           return cand2;
//       }; 
//   }
  
//   return cand1;
  
// };




function findRedundantDirectedConnection(edges) {

  let cand1 = null,cand2 = null;
  let colorPallet = {}
  for (let [source,target] of edges)colorPallet[source] = source,colorPallet[target]=target;
  for (let [source, target] of edges) {
    let rootSource = find(colorPallet, source)
    let rootTarget = find(colorPallet, target)
    if (rootSource !== rootTarget) {
      if (rootTarget !== target) {
        cand1 = [source, target]
      } else {
        colorPallet[rootTarget] = rootSource
      }
    } else {
      cand2 = [source, target]
    }
  }
  if (!cand1) return cand2
  if (!cand2) return cand1
  for (let [source, target] of edges) {
    if (target === cand1[1]) {
      return [source, target]
    }
  }
return []
  function find(pallet, value) {
    if (pallet[value] !== value) {
      return find(pallet, pallet[value])
    }
    return pallet[value]
  }

}







// findRedundantDirectedConnection([[1,2], [1,3], [2,3]])
    /*?*/
// findRedundantDirectedConnection([[1,2], [2,3], [3,4], [4,1], [1,5]]) /*?*/

// findRedundantDirectedConnection([[1,2], [2,3], [3,4], [4,1], [1,5], [4,2]]) /*?*/

findRedundantDirectedConnection([[2,1],[3,1],[4,2],[1,4]]) /*?*/

//findRedundantDirectedConnection([[3,4],[4,1],[1,2],[2,3],[5,1]]) /*?*/

//findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,1],[1,5]]) /*?*/

