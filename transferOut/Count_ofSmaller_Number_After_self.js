
// segmented trees
var countSmaller = function (nums, min = null, max = null, res = []) {
 
  for (let i of nums) max = Math.max(max, i), min = Math.min(min, i);
  
  const SegmentNode = (start, end, count = 0) => ({start, end, count, mid : ((start, end) => (start + end >> 1))(start, end)});    
  
  const node = SegmentNode(min, max);

  while (nums.length) res.unshift(insert(node, nums.pop()))

  return res
  
  function insert(node, num) {
        node.count++
    if (node.start === node.end) return 0;
      
    if (!node.left) node.left = SegmentNode(node.start, node.mid), node.right = SegmentNode(node.mid + 1, node.end);
    
    return  num > node.left.end ? node.left.count + insert(node.right, num) : insert(node.left, num)
  }
};

//-2 -> 2





countSmaller([-1,-2]) /*?*/
countSmaller([5,2,6,1]) /*?*/



var binarySearch = function(arr, num) {
    let start = 0;
    let end = arr.length-1;
    
    while (start <= end) {
        let pivot = Math.floor((start + end) / 2 );
        let prev = pivot === 0 || num > arr[pivot-1];
        let cur  = num <= arr[pivot];  
        if (prev && cur) return pivot;
        else if (cur) end = pivot - 1;            
        else start = pivot + 1;
    }
    return arr.length;
};

var countSmaller2 = function(nums) {
    let sorted = [];
    let res    = [];
    //intialize an array called sorted and a res array
      
    for (let i= nums.length - 1; i >= 0; i--) {

        let idx = binarySearch(sorted, nums[i]);
        
        sorted.splice(idx, 0, nums[i]);
        res[i] = idx;
    }
    return res;
};

countSmaller2([5,2,6,1]) 





