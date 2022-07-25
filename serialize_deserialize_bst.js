var serialize = function(root) {
    
    let string = '';
        
        function buildString(node) {
            
          if(!node) string += '# ';
            else{
                
                string += node.val + ' ';
                
                buildString(node.left);
                
                buildString(node.right);
            }
        }
        
        buildString(root)
        
        return string;
    };
    
    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    
    var deserialize = function(data) {
     
      const nodes = data.split(' ');
        function buildTree() {
            let val = nodes.shift();
           return  val === '#' ? null : (val = new TreeNode(+(val)), val.left = buildTree(), val.right = buildTree(), val);
            }
        return buildTree();
    };
    
    /**
     * Your functions will be called as such:
     * deserialize(serialize(root));
     */


