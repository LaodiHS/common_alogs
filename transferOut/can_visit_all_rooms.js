
var canVisitAllRooms = function (rooms) {
    let visited = Array(rooms.length).fill(false)
    visited[0] = true;
    let stack = rooms[0]
    while (stack.length) {
        const opened = stack.pop()
        if (visited[opened] !== true)for(let key of rooms[opened])stack.push(key);;
         visited[opened] = true;
    } 
return visited.indexOf(false)===-1;
}



var canVisitAllRooms = function (rooms) {  
    let visited = Array(rooms.length).fill(0)
    visited[0]=1
    room=rooms[0]
    traverse(room)
  function traverse(room){
    while(room.length){
            const pop= room.pop()
             visited[pop]=1
             traverse(rooms[pop])      
        }   
    }
    return visited.indexOf(0)===-1;
}
canVisitAllRooms([[1,3],[1,4],[2,3,2,4,1],[],[4,3,2]]) /*?*/