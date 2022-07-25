import { log } from "util";

// function findOrder(numCourses, prerequisites) {
// const seen = new Set()
// const seeing= new Set()
// const res= []


// let a= []
// let node =  [...Array(numCourses)].map(x=>[])
// for(let [u,v] of prerequisites)node[u].push(v);
// for(let i =0; i < numCourses; i++){
//   if(!dfs(i))return []
// }

// return res.reverse()

// function dfs(v){
//   if(seen.has(v))return true; 
//   if(seeing.has(v))return true; 
//   seeing.add(v)
//   for(let possable of node[v]){
//         if(!dfs(possable)){
//           return false; 
//         }
//   }
// seeing.delete(v)
// seen.add(v)
// res.push(v)
// return true; 
// }
// }
// findOrder(4,[[1,0],[2,0],[3,1],[3,2]]) /*?*/




// var sequenceReconstruction = function(org, seqs) {
//   let seeing = new Set()
//   let seen= new Set()
//   let res= []
// let node= [...Array(org.length)].map(_=>[])

// for(let [u, v] of seqs)node[u].push(v);

// node
//   for(let i =0; i< org.length; i++){

//       if(!dfs(i))return [];
//   }
  
//   return res.reverse(); 
//   function dfs(v){ 
//       if(seen.has(v))return true;
//       if(seeing.has(v))return false;
//       seeing.add(v)

//       for(let pos of node[v]){
//         pos
//         if(!dfs(pos)){
//              return false; 
//              }    
//       }
//       seeing.delete(v)
//       seen.add(v)
//       res.push(v)
//       return true;
//   }
// };
 

// sequenceReconstruction([1,2,3],[[1,2],[1,3]]) /*?*/


var findOrder = function(numCourses, prerequisites) {
    const graph= Array(numCourses).fill(0).map(_=>new Set())    
    // we create the grid





for(let [u,v] of prerequisites)graph[u].add(v); 

    // after having created the grid we are going to need an array to stack the courses. 
    graph
    let stack= []; 
    // we are going to need a marker to indicating node we already visited 
    const mark=[]
    // we are going to need a visited to determin if we counter a cycle. 
    const visited=[]
    let hasCycles = false;
// we are going to traverse the keys 
    Object.keys(graph).map(explore)
    return hasCycles ? []: stack.reverse(); 
    function explore(node){
        //if we encounter a marked node we don't want to reexplore 
        if(mark[node])return 
        // if we encounter a visited node we also want to exit. 
        if(visited[node]){
        
         hasCycles = true;
          return
        } 
        visited[node]=true; 
        graph[node].forEach(explore)
        // mark the node as explored. 
        mark[node]=true
        stack.unshift(node)         
    }
};

findOrder(4,[[1,0],[2,0],[3,1],[3,2]]) /*?*/








