

var NumArray = function (nums) {

    let n = nums.length
    let tree = []


let a =     1 << 1 /*?*/
a
    for (let i = n; i < n << 1; i++) tree[i] = nums[i - n]
    for (let i = n - 1; i > 0; i--) tree[i] = tree[i << 1] + tree[i << 1 | 1]

  

tree

    return {
        update, sumRange
    }




    function update(i, val) {
        for (tree[i += n] = val; i > 0; i >>= 1) tree[i >> 1] = tree[i] + tree[i ^ 1]
    }

    function sumRange(i, j) {
        let ret = 0
        for (i += n, j += n; i <= j; i >>= 1, j >>= 1) {
            if ((i & 1) === 1) ret += tree[i++];
            if ((j & 1) === 0) ret += tree[j--]
        }
        return ret;
    }
};





function NumArray2 (nums){

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
        let sum = 0
        for (i += 1; i > 0; i -= -i & i) sum += BIT[i]
        return sum
      }
  
      function sumRange(i, j){ return prefixSum(j) - prefixSum(i - 1)}
  
      
    
  }

let bt2=  NumArray2([1,3,5]) /*?*/
bt2.update(1,2)
bt2.sumRange(0,2) /*?*/

let bt1 = new NumArray([1,3,5])

bt1.update(1,2)
bt1.sumRange(0,2) /*?*/