
// the words are in lexical order, that means their listings go down then across
// we go down untill we meet a new letter
var alienOrder = function(words) {
    // generate a graph using an object
    const graph={}
    // we create a Set for Each letter in the graph. 
    //such that every letter can hold it's neighboring letter node as a directed edge.
    words.forEach(x=>x.split('').forEach(g=>graph[g]=new Set()))
    // we iterate the words in order with their neighbor, 
    words.reduce((prev,curr)=>{
        // iterate the strings using the smallest length 
        for(let i=0;i<Math.min(prev.length,curr.length);i++){
            // on any missmatch 
            //every letter can hold it's neighboring letter node as a directed edge.
            if(prev[i] !== curr[i]){
                // use the first letter string as a key to the graph object set
                // add the missmatched neighbor to the set of the previous missmatch
            graph[prev[i]].add(curr[i])
            // break out of the comparson on the first missmatch in the current string comparson
            break;
            }
        }
        // return the curr as the previous
    return curr
    })

// used marked to indicate a node has been explored. 
// use a visisted hash to mark the current node being explored in the recusive call
// such that if we encounter the parent node in the children we know that it is a cycle. 
const marked={},visited={};
let str='';
// use hosting to determin a cycle in the graph
let hasCycle=false;


//iterate over the keys of the graph
Object.keys(graph).map(visit)
//if has Cycle is true return an empty string;
return hasCycle?'':str;


function visit(n){
    //if the key has been marked exit the recursive call. 
    if(marked[n])return;
    
    // if the key has been marked visited mark the graph as having a cycle with the hoisted var and exit the recursive function
    if(visited[n]){
        hasCycle=true;
        return; 
    }
//if the node/key is not visited or marked, indicated that we are visiting all the child nodes of the current node 
//by marking it as true 
visited[n]=true;
// recursively visit all of the nodes in the parent node
graph[n].forEach(visit)
// mark the node has having been visited should we encouter the node once more. 
marked[n]=true;
// append the key to the string after having visited all the nodes and not found a cycle 
str=n+str;
}
}





alienOrder(["wrt","wrf","er","ett","rftt"]) /*?*/ 








// DFS topological sort

// visited: -1 - non-existent / 0 - unvisited / 1 - visiting / 2 - visited

const N = 26 // 26 letters in lowercase
const chars = Array.from(
    new Array(N),
    (_, i) => String.fromCharCode(i + 'a'.charCodeAt(0))
)

var alienOrder = function(words) {
    
    const adj = {}
    const visited = {}
    buildGraph(words, adj, visited)
    const strArr = []
    const el = Object.keys(visited).filter(k => visited[k] === 0)
    for (let i = 0; i < el.length; i++) {
        if (visited[el[i]] === 0) {
            if (!dfs(el[i], strArr, adj, visited)) return ''
        }
    }
    
    return strArr.reverse().join('')
}

function dfs (char, res, adj, visited) {
    visited[char] = 1 // visiting
    
    for (c of adj[char]) {
        if (visited[c] === 1) return false
        if (visited[c] === 0) {
            if (!dfs(c, res, adj, visited)) return false
        }
    }
    visited[char] = 2
    res.push(char)
    return true
}

function buildGraph (words, adj, visited) {
    chars.forEach(c => {
        adj[c] = new Set()
        visited[c] = -1
    })
    words.join('').split('').forEach(c => visited[c] = 0)
    
    let prev
    let curr
    let minLen
    for (let i = 1; i < words.length; i++) {
        prev = words[i - 1]
        curr = words[i]
        minLen = Math.min(prev.length, curr.length)

        for (let j = 0; j < minLen; j++) {
            if (prev[j] !== curr[j]) {
                adj[prev[j]].add(curr[j])
                break
            }
        }
    }
}


// BFS topological sort


var alienOrder = function(words) {
    if (words.length === 0) return ''
    
    const degree = {}
    const map = {}
    
    words.join('').split('').forEach(c => degree[c] = 0)
    
    let prev
    let curr
    let minLen
    
    // Build up degree
    for (let i = 1; i < words.length; i++) {
        prev = words[i - 1]
        curr = words[i]
        minLen = Math.min(prev.length, curr.length)

        for (let j = 0; j < minLen; j++) {
            if (prev[j] !== curr[j]) {
                const set = map[prev[j]] || new Set()
                if (!set.has(curr[j])) {
                    set.add(curr[j])
                    degree[curr[j]] += 1
                    map[prev[j]] = set
                }
                break
            }
        }
    }
    
    // Put all elements with degree 0 into q
    const q = Object.keys(degree).filter(k => degree[k] === 0)
    
    let char
    let str = ''
    while (q.length !== 0) {
        char = q.pop()
        str += char
        
        // Has adj element
        if (map[char]) {
            for (c of map[char]) {
                degree[c] -= 1
                if (degree[c] === 0) q.unshift(c)
            }
        }
    }
    
    return str.length === Object.keys(degree).length ? str : ''
};


