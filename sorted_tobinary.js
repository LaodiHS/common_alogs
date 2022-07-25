

  function TreeNode(val) {
        this.val = val;
         this.left = this.right = null;
     }




var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
      return null;
    }

    let midIndex = Math.floor(nums.length/2);

    let root = new TreeNode(nums[midIndex]);

    root.left = sortedArrayToBST(nums.slice(0, midIndex));
    root.right = sortedArrayToBST(nums.slice(midIndex + 1));
    return root;
  
};
sortedArrayToBST([1,2,3,4,5,6]) /*?*/




