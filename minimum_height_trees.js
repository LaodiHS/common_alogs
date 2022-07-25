var findMinHeightTrees = function (n, edges) {
    // create a graph from the undrected edges of the vertaces
    const graph = Array(n).fill(0).map(_ => new Set())
    for (let [n, v] of edges) graph[n].add(v), graph[v].add(n);
    let leaves = [];
    // handle edge case where n is the only vertext in the graph.
    if (n === 1) {
        leaves.push(0)
        return leaves;
    }
    // get the digrees/stems of each vertext which are equal to one.
    // and then push them into our current digree array; 
    const stems = []
    for (let i = 0; i < n; i++) {
        if (graph[i].size === 1) leaves.push(i);
    };
    while (true) {
        // we are going to use a temprary seasaw array which we will populate with parent nodes
        const sheer = [];
        // walk over the single digree vertexes
        for (let leaf of leaves) {
            // and graph their parent node
            for (branch of graph[leaf]) {
                // we will delete the leaf node from the parent branch in the graph  
                graph[branch].delete(leaf)
                // if after the deletion there are still leaves on the branches on the parent node
                // we are going to push it on to our sheering array to prune it again
                if (graph[branch].size === 1) sheer.push(branch)
            }
        }
        // if the length of our seering array will tell us if all the leaves have been removed from the main branch. 
        if (!sheer.length) return leaves
        // we will assign our current to our newly populated next
        leaves = sheer;
    }

    return leaves
}



  findMinHeightTrees(6,[[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]) /*?*/

//  findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]) /*?*/

//  findMinHeightTrees(2, [[0,1]]) /*?*/

// findMinHeightTrees(4, [[1,0],[1,2],[1,3]]) /*?*/
