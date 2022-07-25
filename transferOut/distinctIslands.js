




const islands = [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
]


function depthFirst(graph, row,col,di) {
    if (row >= 0 && col >= 0 && row < graph.length && col < graph[0].length && graph[row][col]) {
    graph[row][col] = 0;

     let p=   di + depthFirst(graph, row + 1, col,'d') +depthFirst(graph, row - 1, col,'u') + depthFirst(graph, row, col + 1,'r')+depthFirst(graph, row, col - 1,'l')+'b' 
    p
     return p
}else{
    return ''
}
}
function numberOfIslands(graph) {
    if(graph.length===0){
        return 0
    }
    let pattern= new Set()
    graph.forEach((rows, row) => {
        rows.forEach((val, col) => {
            if (val === 1) {
let p = depthFirst(graph, row, col,'o')
           pattern.add(p)               
            }
        })
    })
    return pattern.size;
}


var numDistinctIslands = function(grid) {
    const stringBuilder= []
    function depthFirst(graph, rowp,colp,di) {
    if (rowp >= 0 && colp >= 0 && rowp < graph.length && colp < graph[0].length && graph[rowp][colp]) {
        stringBuilder[stringBuilder.length-1].push(di)
        graph[rowp][colp] = 0;
      depthFirst(graph, rowp + 1, colp,1) 
      depthFirst(graph, rowp - 1, colp,2) 
      depthFirst(graph, rowp, colp + 1,3)
      depthFirst(graph, rowp, colp - 1,4) 
      stringBuilder[stringBuilder.length-1].push(di)
    }
}
    function numberOfIslands(graph) {
    if(graph.length===0){
        return 0
    }
    let count = 0
    graph.forEach((row, rowP) => {
        row.forEach((col, colP) => {
            if (col === 1) {
                stringBuilder.push([])
                depthFirst(graph, rowP, colP,0)                     
            }
        })
    })
    let size=  new Set(stringBuilder.map(x=>x.toString())).size
    return size;
}
   return numberOfIslands(grid)
};

var permute = function(nums) { 
    function* permu(arr, l=arr.length){
        if(l<=0) yield arr.slice();
        else
            for(let i=0; i<l; i++){
                yield *permu(arr, l-1)
                const j = l % 2 ? 0 : i;
                arr[l-1]=[arr[j], arr[j] = arr[l-1]][0]
            }
    }
    return Array.from(permu(nums))
};

permute([1,2,3])






var combine = function(n, k) {
    
    

  }
  var combine = function(n, k) {
    const result = []
    
    function findCombinations(subArr, start) {
      // basecase. If our subArray is the length of k, we push a copy of the array into result
      if(subArr.length === k) {
        result.push(arr.slice())
      }
      
      // We need all the numbers from 1..n, so we must loop from 1..n to get all values
      for(let i = start; i <= n; i++) {
        // for each iteration, we push into subArray the starting value to build the array
        subArr.push(i)
        
       // immediately recurse increasing the starting value of i by 1. We need this to build the subArr 
      // from [] -> [1] -> [1, 2]. The next value of i will allow the next value to be pushed into the subArr
        findCombinations(arr, i+1)

      // We remove the last value we added to clean subArr for the next new starting number.
     // If we built all the values with 1, [1,2], [1,3], [1,4], we now pop 1 off and 
    // begin the loop with 2. [2, 3], [2, 4] 
       subArr.pop()
      }
    }
    
   // start subArray with an empty array that we will populate. The problem states we need numbers 
  // from 1..n, so we start counting at 1
    findCombinations([], 1)
    return result
};


function combinationSum(){
let root={}
return {add,rootIs}

function add(){
    let obj=root
    for(let i = 1;i<=4;i++){
        for(let j= 2;j<=4;j++)
obj=obj[i]=obj[i]||{j}
    }
}


function rootIs(){
    return root
}
}

let heap= new combinationSum()






heap.add()



let root = heap.rootIs()

let b= root[1]
b=root[1]
b
b =root[1][1][1][2][2][2][3][3][3][4][4]
b



var combine = function(n, k) {
    let result = [];
    
    function dfs(current, start) {
        if(current.length == k) {
            result.push(current);
            return;
        }
        if(current.length > k) {
            return;
        }
        
        for(let i = start; i <= n; i++) {
            dfs(current.concat(i), i + 1);
        }
        
    }
    
    dfs([], 1);
    return result;
};


function combinations(n, k) {
    let result = [];
  
    function traverse(arr, depth) {
      if (arr.length === k) {
        result.push(arr);
        return;
      }
      
      if (depth > n) {      
        return;
      }
  
      traverse(arr, depth + 1);  
      traverse(arr.concat(depth), depth + 1);
    }
  
    traverse([], 1);
  
    return result;
  }




  var combine = function(n, k) {
    if(k > n) {
        return []
    }
    var res = []
    var comb = function(d, n, k, arr) {
        if(k === 0) {
            res.push(arr.slice(0))
            return
        }
        for(var i = n; i >= k; i--) {
            arr[d] = i
            comb(d + 1, i - 1, k - 1, arr)
        }
    }
    comb(0, n, k, [])
    return res
};