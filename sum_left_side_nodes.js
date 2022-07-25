var sumOfLeftLeaves = function(root) {
    let total= 0;
    traverse (root)
      return total 
  function traverse (node){
      if(node){ 
          if((node || {}).left && !(node.left||{}).left && !(node.left||{}).right) total+= node.left.val;
        return (traverse(node.left) , traverse(node.right))
          }
      }
  };


  const traverse = (node, isLeft) => {
    
    if(!node) {
        console.log(node);
        return 0;
    }
    let sum = 0;
    
    if(!node.left && !node.right && isLeft) {
        sum += node.val;
    }
    
    if(node.left) {
        sum += traverse(node.left, true);
    }
    if(node.right) {
        sum += traverse(node.right, false);
    }
    
    return sum;
}

var sumOfLeftLeaves = function(root) {
    return traverse(root, false);
};