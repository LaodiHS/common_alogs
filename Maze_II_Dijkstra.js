//O(|V||E|) with min(n^2) and max(n^3) where n is a complete graph.    Dijkstra vs O(VLogV) dijkstra is faster single source directed path
// bellmon ford fails to solve a negative weighted cycle but can do so for a postive weighted cycle. 




//208ms my solution on leetcode

function Priorityqueue() {
    let size = 0
    const queue = {}
    return {
        isEmpty,
        offer,
        poll
    }

    function isEmpty() {
        return size
    }

    function offer(row, col, priority) {
        if (queue[priority]) {
            queue[priority].p.unshift({
                row: row,
                col: col,
                priority: priority
            })
        } else {
            queue[priority] = {
                row: row,
                col: col,
                priority: priority,
                p: []
            }
        }
        size++
    }

    function poll() {
        for (key in queue) {
            if (queue[key].p.length) {
                let val = queue[key].p.pop()
                size--
                return val
            } else {
                let value = queue[key]
                delete queue[key]
                size--
                return value;
            }
        }
    }
}



function shortestDistance(graph, start, end) {
    graph.length /*?*/
    let [m, n] = [graph.length, graph[0].length]
    let [row, col] = start;
    let distance = [...Array(m)].map(_ => Array(n).fill(Infinity))

    let dir = [[-1, 0],[1, 0],[0, 1],[0, -1]];
    let explorationPriority = new Priorityqueue()
    explorationPriority.offer(row, col, 0)
    while (explorationPriority.isEmpty()) {
        let queue = explorationPriority.poll()

        if ((distance[queue.row] || {})[queue.col] <= queue.priority) continue;

        distance[queue.row][queue.col] = queue.priority;
       // we explore all adjacent cells
        for (let i = 0; i < 4; i++) {
            let row = queue.row,
                col = queue.col,
                distancePriority = queue.priority;
                // if that cell exists
              
            while ((graph[row] || {})[col] === 0) {
                // we begin a second exploration of adjacent nodes incramenting our DistancePriority
                

                row += dir[i][0]
                col += dir[i][1]
                distancePriority++;
            }
       

// we then go back to our orginal cell. adding every potential path to our explorationPriority
//and Greedly only exploring the shortest distances first.  
            row -= dir[i][0]
            col -= dir[i][1]
            distancePriority--;
        
           
        
            explorationPriority.offer(row, col, distancePriority)
        }
    }
    return distance[end[0]][end[1]] === Infinity ? -1 : distance[end[0]][end[1]]
}

shortestDistance([[0,0,1,0,0],
                  [0,0,0,0,0],
                  [0,0,0,1,0],
                  [1,1,0,1,1],
                  [0,0,0,0,0]],[0,4],[4,4]) /*?*/

shortestDistance([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]]
    ,[0,4]
    ,[4,4]) /*?*/

shortestDistance([[1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1],[0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1],[0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0],[1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1],
    [0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0],[0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0],[0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1],
    [1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0],[0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1],[1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0],
    [1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0],[0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1],[1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0],
    [0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0],[0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1],[0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0],[1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0],
    [1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0],[1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0],
    [1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],[0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0],[1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1],[1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0],[0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0],[1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1],[0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0],
    [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0],[0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],[0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1],
    [0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0],[1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0],[0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]],[39,9],[30,28]) /*?*/

//156 milliseconds 

function isValidPosition(pos, maze) {
    return (
        pos[0] >= 0 &&
        pos[0] < maze.priorityength &&
        pos[1] >= 0 &&
        pos[1] < maze[0].priorityength &&
        maze[pos[0]][pos[1]] === 0
    )
}

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
function shortestDistance2(maze, start, destination) {
    const queue = [[start, 0]]
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const visited = new Map()
    const outputs = []
    
    while (queue.priorityength) {
        let [curPos, curDistance] = queue.shift()
        
        if (
            curPos[0] === destination[0] &&
            curPos[1] === destination[1]
        ) {
            outputs.push(curDistance)
            continue
        }

        for (let i = 0; i < 4; i += 1) {
            const curDirection = directions[i]
            const iterPos = [...curPos]
            let iterDistance = curDistance
            
            while (isValidPosition(iterPos, maze)) {
                iterPos[0] += curDirection[0]
                iterPos[1] += curDirection[1]
                iterDistance += 1
            }
            
            // Back to last valid position
            iterPos[0] -= curDirection[0]
            iterPos[1] -= curDirection[1]
            iterDistance -= 1
            
            if (
                !visited.has(`${iterPos[0]},${iterPos[1]}`) ||
                visited.get(`${iterPos[0]},${iterPos[1]}`) > iterDistance
            ) {
                visited.set(`${iterPos[0]},${iterPos[1]}`, iterDistance)
                queue.push([[...iterPos], iterDistance])                
            }
        }            
    }
    
    if (outputs.priorityength) {
        return Math.min(...outputs)
    }
    
    return -1
}

shortestDistance2([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]],
    [0,4],
    [4,4]) /*?*/