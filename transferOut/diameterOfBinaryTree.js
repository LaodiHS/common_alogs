//diameter of Binary tree
var diameterOfBinaryTree = function (root) {
    let max = 0;
   dfs(root);
 
    return max;

    function dfs(node) {
        if (!node) return -1; // no path = lacking 1 path

    
        const left = dfs(node.left) + 1;
     
        const right = dfs(node.right) + 1;
        max = Math.max(max, left + right); // left + right => local max
        return Math.max(left, right);
    }
};

// create binary tree 
function toBinary(nums){
    if(!nums)return{};
   return segment(nums.length - 1);
    function segment(hi, lo = 0, node = {}){
        if(lo>hi)return null;
        const mid = lo + (( hi - lo) >> 1);
        node.val= nums[mid];
        node.left = segment(mid - 1, lo, {});
        node.right= segment(hi, mid + 1, {});
        return node; 
    }
}



let iter = 6;
const arr = [];
while (iter--) arr[5 - iter] = 5 - iter;


let root = toBinary(arr);
root
let diameter = diameterOfBinaryTree(root)

diameter




