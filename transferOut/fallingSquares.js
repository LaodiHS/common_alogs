function fallingSquares(p) {
    let max = -Infinity
    const list = []
    const ans = []
    //const segment = (s, center, end) => ({ s, center, end })

    for (let s of p) {
        node = [s[0], s[0] + s[1], s[1]]
        ans.push(getMax(list, node))
    }
    return ans;
    function getMax(list, node) {
        let height = 0
        for (e of list) {
            if (e[0] >= node[1] || e[1] <= node[0]) continue;
            height = Math.max(height, e[2])
        }
        node[2] += height
        list.push(node)
        max = Math.max(max, node[2])
        return max;

    }
  }

  //fallingSquares([[1,2],[2,3],[6,1]]) /*?*/

//   fallingSquares([[100,100],[200,100]]) /*?*/













  var fallingSquares3 = function(positions) {
    var squares = [], 
    res = new Array(positions.length)
    for (var i = 0; i < positions.length; i++) {


        var h1 = positions[i][1],
        s1 = positions[i][0],
         e1 = s1 + h1, highest = 0

         squares
        for (var j = 0; j < squares.length; j++) {
            
            
            
            var s2 = squares[j][0],
            
             e2 = squares[j][1], 
             h2 = squares[j][2]
            if (s1 < e2 && s2 < e1) {
                highest = Math.max(highest, h2)
            }
        }

        highest += h1

        squares.push([s1, e1, highest])
        
        res[i] = i > 0 ? Math.max(highest, res[i - 1]) : highest
    }
    
    return res
};

// fallingSquares3([[1,2],[2,3],[6,1]]) /*?*/

// function fallingSquares4(positions){
  
       
//             let res=[];
//             // sq is a list sorted by right boundary
//             let sq=[];
            
//             let max=0;
//             for (let pos of positions){
//                 let localMax=pos[1];
                
//                 // find the starting position to compare through binary search
//                 // skip all those positions that don't overlap with the curr position
        
//                 let lo=0, hi=sq.length-1;
//                 while (lo <= hi){
//                     let mi=lo+(hi-lo)/2;
                    
//                     if (sq[mi][0] <= pos[0]){
//                         lo=mi+1;
//                     }else{
//                         hi=mi-1;
//                     }
//                 }
                
//                 // find the localMax comparing to those overlapped positions
//                 for (let i=lo;i<sq.length;i++){
//                     if (pos[0] + pos[1] <= sq[i][0]-sq[i][1]) continue;
//                     localMax=Math.max(localMax, sq.get(i)[2]+pos[1]);
//                 }
                
//                 // find the position to insert the new position
//                 let iPos=0;
//                 for (iPos=lo;iPos<sq.length;iPos++)
//                     if (sq[iPos][0] >= pos[0]+pos[1]) break;
//                 sq.push(iPos, [pos[0]+pos[1], pos[1], localMax]);
                
//                 max=Math.max(max, localMax);
//                 res.push(max);
//             }
//             return res;
        
    
// }
// fallingSquares4([[1,2],[2,3],[6,1]]) /*?*/



function NumArray (nums){

    const N = nums.length
    const BIT = Array(N + 1).fill(0)
    const vals = Array(N).fill(0)
      nums.forEach((n, i) => update(i, n))
    return {update, sumRange}

    function update(i, val){
      const delta = val - vals[i]
      vals[i] = val
      for (i += 1; i <= N; i += -i & i) BIT[i] += delta
    }

    function prefixSum (i){
      let sum = 0;
      for (i += 1; i > 0; i -= -i & i) sum += BIT[i];
        
      return sum;
    }

    function sumRange(i, j){ 
        return prefixSum(j) - prefixSum(i - 1)
    }

    
  
}
