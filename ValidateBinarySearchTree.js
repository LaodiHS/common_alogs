
let root= {"val":20,"right":{"val":30,"right":{"val":33,"right":{"val":34,"right":null,"left":null},"left":{"val":32,"right":null,"left":null}},"left":{"val":29,"right":null,"left":null}},"left":{"val":15,"right":{"val":16,"right":{"val":17,"right":null,"left":null},"left":null},"left":{"val":10,"right":{"val":11,"right":null,"left":null},"left":{"val":5,"right":null,"left":null}}}}

function validate(root, min, max){
min
if(!root)return true; 
// on the first pass both will match expected result
if( root.val>=max ||root.val<=min)return false;
// on every subsquent left traversal every parent node has to be grater than it's left child
 return validate(root.left,min,root.val)&& 
 // on every subsquent right traveral every child will need to be greater than it's parent
 validate(root.right,root.val, max)
// min and max are redefined as they pass through the left nodes first and then travel back up the call stack 
//visiting every right node along the way  redfining the max along the way.  
}
//min will always be lower and the max will always be more
validate(root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER) /*?*/

