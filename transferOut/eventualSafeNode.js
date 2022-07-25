// value of color represents three states:
// 0:have not been visited
// 1:safe
// 2:unsafe
// For DFS,we need to do some optimization.When we travel a path,we mark the node with 2 
// which represents having been visited,and when we encounter a node which results in a cycle,
// we return false,all node in the path stays 2 and it represents unsafe.And in the following traveling,
// whenever we encounter a node which points to a node marked with 2,we know it will results in a cycle,
// so we can stop traveling.On the contrary,when a node is safe,we can mark it with 1
//  and whenever we encounter a safe node,we know it will not results in a cycle.
// var eventualSafeNodes = function (graph) {
//     const safe=[];
//     const color=[];
//     for (let i = 0; i < graph.length; i++) {
//         if (isSafe(graph,i,color)) safe.push(i);
//     }
//     return safe;
//     function isSafe(graph,start,color) {
//         if (color[start]){    
//             return color[start]===1
//         }
//         color[start] = 2;   
//         for (let node of graph[start]) {
//             if (!isSafe(graph,node,color)) return false;
//         }
//         color[start]= 1; 
//         return true;
//     }   
// };




// eventualSafeNodes([[],[0,2,3,4],[3],[4],[]]) /*?*/
//  eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]) /*?*/
//  eventualSafeNodes([[1,2,3,4],[1,2],[3,4],[0,4],[]]) /*?*/
//  eventualSafeNodes([[0],[2,3,4],[3,4],[0,4],[]]) /*?*/



 //eventual safesate is a directed graph and we are trying to find a noncircular state
// The best apprach for keeping track of nodes in a graph is coloring.
//Since we are only looking to determin if a node will eventually lead to a dead end 
// We only need to color in the node traversals
// we will need to two colors. one color to indicated touch and another to indicate exit. 
var eventualSafeNodes = function(graph) {
    //we will traverse the nodes
   const pallet =[]
    const result=[]
    for(let i=0;i<graph.length;i++){
        // we will check every node and since this is a directed graph we don't need a safty on 
        //visited nodes will be checked and if a node does not loop back in on it's self 
        // we will know that the node can be pushed into our set of resutls.     
        if(isSafe(graph,i,pallet))result.push(i)
    }
    return result; 
    // our isVisted function will take a graph our current node and a ledger
    // to keep track of the nodes already visited. 
    function isSafe(graph, node, pallet){
        // we will use two colors to mark the nodes 1 on exiting and 2 on entering
        // if we encounter a 2 we know that that's a cycle
        if(pallet[node])return pallet[node]===1
        // else every node we enter get's marked with a 2 as unsafe
        pallet[node]=2
        //we will walk every subsquent node 
        for(let next of graph[node]){
            // we will check in that node space for a 2 and if it's a 2 we know it's false
            if(!isSafe(graph,next,pallet)) return false; 
        }
        // we mark node as safe 
        pallet[node]=1;
     return true; 
    }
}
eventualSafeNodes([[],[0,2,3,4],[3],[4],[]]) /*?*/
 eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]) /*?*/
 eventualSafeNodes([[1,2,3,4],[1,2],[3,4],[0,4],[]]) /*?*/
 eventualSafeNodes([[0],[2,3,4],[3,4],[0,4],[]]) /*?*/



