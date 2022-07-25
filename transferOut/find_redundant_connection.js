/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const adj = []
    for (let edge of edges) {
        const a = find(adj, edge[0]),
            b = find(adj, edge[1]);
        if (a === b) return edge;
        adj[a] = b
    }
    return [];

    function find(edges, node) {
        if (!adj[node]) return node
        else return find(edges, edges[node])
    }
}

findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]])/*?*/
findRedundantConnection([[1,2], [1,3], [2,3]]) /*?*/
findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]])/*?*/
findRedundantConnection([[1,2], [1,3], [2,3]]) /*?*/
findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]])/*?*/


























function findRedundant(edges){
    const sol = Array(edges.length + 1).fill(-1)

    for (let edge of edges) {
        let a = find(sol, edge[0])
        let b = find(sol, edge[1])
        if (a === b) {
            return edge
        }
        sol[a] = b
    }
    function find(edges, node) {
        if (sol[node] === -1) {
            return node
        } else {
            return find(edges, edges[node])
        }

    }


}



findRedundant([[1,2],[1,3],[2,3]]) /*?*/












