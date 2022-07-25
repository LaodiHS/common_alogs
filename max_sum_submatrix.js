// var maxSumSubmatrix = function(matrix, k) {
    
    

    

//     let row = matrix.length, col = matrix[0].length, res = -Infinity
//     for(let l = 0; l < col; l++){
//         let sums = Array(row).fill(0);
//         for(let r = l; r < col; r++){
//             for( let i = 0; i< row; i++){
//                 sums[i] += matrix[i][r]    
//             }    

        

      



//         let accuSet= [0]
//         let curMax = -Infinity
//         let curSum = 0
//         for(let sum of sums){
//         curSum += sum
//             let n = curSum-2
//             n
//         let it = accuSet.indexOf(curSum - 2)
       
        
//         it = it === -1 ? 0: it
//         if(it !== accuSet.length - 1) curMax = Math.max(curMax, curSum - accuSet[it]) 
//         accuSet.unshift(curSum)
//             }        
            
//             res = Math.max(res, curMax)
            
//         }
    
//     }
//     return res
        
//     }



    



       


    





//     maxSumSubmatrix([[1,0,1],[0,-2,3]], 2) /*?*/


    // function maxSumSubmatrix(matrix, target) {
    //     let result = -Infinity;
    //     let rows = matrix.length,
    //         cols = matrix[0].length;
    //     if (rows == 0) {
    //         return 0;
    //     }
    //     for (let i = 0; i < rows; i++) {
    //         const sumPer = Array(cols).fill(0)
    //         for (let j = i; j >= 0; j--) {
    //             let sumCur = 0;
    //             const sumSet = new treeSet();
    //             sumSet.add(0);
    //             for (let k = 0; k < cols; k++) {
    //                 sumPer[k] += matrix[j][k];
    //                 sumCur += sumPer[k];
    //                 let subRes = sumSet.ceiling(sumCur - target);
    //                 if (subRes !== null) {
    //                     result = Math.max(result, sumCur - subRes);
    //                 }
    //                 sumSet.add(sumCur);
    //             }
    //         }
    //     }
    //     return result;
    // }



    // class treeSet extends Set {
    //     ceiling(value) {
    //         let values = this.values()
    //         let val = values.next()
    //         while (!val.done) {
    //             if (value <= val.value) {
    //                 return val.value;
    //             }
    //             val = values.next()
    //         }
    //         return null;
    //     }
    // }



    
    //O(min(m, n)^2 * max(m, n) * log(max(m, n))), Space: O(m + n)

    function maxSumSubmatrix(matrix, k) {
        const row = matrix.length,col = matrix[0].length;
        let result = -Infinity;
        for (let i = 0; i < col; i++) {
            let rowSum = Array(row).fill(0);
            for (let j = i; j < col; j++) {
                let sum = 0, max = -Infinity;
                for (let r = 0; r < row; r++) {
                    rowSum[r] += matrix[r][j];
                    if (sum < 0) sum = 0;
                    sum += rowSum[r];
                    max = Math.max(max, sum)
                }
                if (max <= k) result = Math.max(result, max);
                else {
                    max = -Infinity;
                    for (let m = 0; m < row; m++) {
                        sum = 0;
                        for (let n = m; n < row; n++) {
                            sum += rowSum[n];
                            if (sum <= k) max = Math.max(max, sum)
                        }
                    }
                    result = Math.max(result, max)
                }
                if (result === k) return k;
            }
        }
        return result;
    }
    maxSumSubmatrix([
        [5, -4, -3, 4],
        [-3, -4, 4, 5],
        [5, 1, 5, -4]
    ], 10) /*?*/


    




var MaxStack = function () {

    const num = {0:0, 1:0}
    const heapP = {}
    const heapN = {}
    const stack = [heapP, heapN]
    const location = []

return { push, pop, top, peekMax, popMax }
function key(val){
 return val >= 0 ? (num[0]++,0) : (num[1]++,1)
}
    function push(val) {
      
      let turn = key(val)
        if (stack[turn][flip(val)]) {
            stack[turn][flip(val)].push(val)
        } else {
            stack[turn][flip(val)] = [];
            stack[turn][flip(val)].push(val);
        }
        
        location.unshift(val)
    }

    function pop() {
        if( num[0] === 0 && num[1] === 0) return; 

        let first = location.shift()
        let turn = first >= 0 ? (num[0]--,0 ) : (num[1]--, 1)
        stack[turn][flip(first)].pop()
        if (stack[turn][flip(first)] && !stack[turn][flip(first)].length) {
            delete stack[turn][flip(first)];
        }
          
        return first
    }

    function top() {
        return location[0]
    }
    function peekMax() {
        if( num[0] === 0 && num[1] === 0) return; 
        let turn = num[0]>num[1]?(num[0]--,0 ):(num[1]--,1)
        for (let val in stack[turn]) {
            return flip(val)
        }
    }
    function popMax() {
        if( num[0] === 0 && num[1] === 0) return; 
        let turn = num[0]>num[1]?(num[0]--,0 ):(num[1]--,1)
        for (let val in stack[turn]) {
           let member= stack[turn][val].pop()
            if (!stack[turn][val].length) {
                delete stack[turn][val]
            }
           let first = location.indexOf(member)
           first =  location.splice(first, 1)[0]
            return first
        }
    }
    function flip(x) {
        return  x >= 0? Math.trunc(Number.MAX_SAFE_INTEGER /2) - x :  Math.trunc(Number.MAX_SAFE_INTEGER / 2) + x
    }
};

    let stack = new MaxStack()

    stack.push(5)

    stack.push(1)
    stack.push(5)
    stack.top()/*?*/
stack.popMax() /*?*/
stack.top() /*?*/
stack.peekMax() /*?*/
stack.pop() /*?*/
stack.top() /*?*/
stack.push(-1)
stack.push(-25)
stack.top() /*?*/
stack.pop() /*?*/




    






