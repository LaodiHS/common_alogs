// const isBipartite = function(graph) {
// const colors=Array(graph.length).fill(0)
// for(let i = 0; i< graph.length; i++){
//     if(colors[i]===0 && !validColor(graph,colors,1,i)){
//         return false
//     }
// }
// return true; 
// function validColor(graph,colors,color,node){
// if(colors[node]){
//     return colors[nodef]===color;
// }
// colors[node]=color;
// for(let next of graph[node]){
//     return !validColor(graph,colors,-color,next)
// }
// return true; 
// }
// };

// isBipartite([[1,3], [0,2], [1,3], [0,2]]) /*?*/

// isBipartite([[1,2,3], [0,2], [0,1,3], [0,2]]) /*?*/

function isBipartite(graph) {
    let colors = Array(graph.length).fill(0)
    for (let n = 0; n < graph.length; n++) {
        if (!validateColor(n, colors, 1, graph)) {
            return false;
        }
    }
    return true;
}
function validateColor(n, colors, color, graph) {

    for (let nodes of graph[n]) {
        if (!colors[nodes]) {
            colors[nodes] = color;
            if (!validateColor(nodes, colors, -color, graph)) {
                return false;
            }
        }
    }
    return true;
}

isBipartite([[1,3], [0,2], [1,3], [0,2]]) /*?*/

//isBipartite([[1,2,3], [0,2], [0,1,3], [0,2]]) /*?*/




















isBipartite([[1,3], [0,2], [1,3], [0,2]]) /*?*/

//isBipartite([[1,2,3], [0,2], [0,1,3], [0,2]]) /*?*/