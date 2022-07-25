
// In fact, the proof is really straightforward.
// You probably apply a DFS, from one stone to next connected stone.
// You can remove stones in reversed order.
// In this way, all stones can be removed but the stone that you start your DFS.

// One more step of explanation:
// In the view of DFS, a graph is explored in the structure of a tree.
// As we discussed previously,
// a tree can be removed in topological order,
// from leaves to root.

// 4. Count the number of islands
// We call a connected graph as an island.
// One island must have at least one stone left.
// The maximum stones can be removed = stones number - islands number

// The whole problem is transferred to:
// What is the number of islands?

// You can show all your skills on a DFS implementation,
// and solve this problem as a normal one.

// 5. Unify index
// Struggle between rows and cols?
// You may duplicate your codes when you try to the same thing on rows and cols.
// In fact, no logical difference between col index and rows index.

// An easy trick is that, add 10000 to col index.
// So we use 0 ~ 9999 for row index and 10000 ~ 19999 for col.

// 6. Search on the index, not the points
// When we search on points,
// we alternately change our view on a row and on a col.

// We think:
// a row index, connect two stones on this row
// a col index, connect two stones on this col.

// In another view：
// A stone, connect a row index and col.

// Have this idea in mind, the solution can be much simpler.
// The number of islands of points,
// is the same as the number of islands of indexes.

// 7. Union-Find
// I use union find to solve this problem.
// As I mentioned, the elements are not the points, but the indexes.

// for each point, union two indexes.
// return points number - union number
// Copy a template of union-find,
// write 2 lines above,
// you can solve this problem in several minutes.
var removeStones = function(stones) {
// use the index to match the nodes 
let islands=0;

const hash={}
    for (let stone = 0; stone < stones.length; stone++) {
          stones[stone][0] /*?*/
        ~stones[stone][1] /*?*/
           
        union(stones[stone][0], ~stones[stone][1])
    }
    hash
return stones.length - islands
    

function find(n) {

        //incrament the number of islands on find
        if (!hash[n]) hash[n] = n, islands++;
        return hash[n] === n ?hash[n]: hash[n] = find(hash[n]) 
    }
    function union(a, b) {
        a = find(a)
        b = find(b)
        
        if (a !== b) {
            hash[a] = b
            islands--
        }
    }

}
removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]])/*?*/


