



function BSTIterator(root) {
  const stack = []

  return {
    next,
    hasNext
  }

  function next() {
    while (root) {
      stack.push(root)
      root = root.left;
    }
    const val = stack.pop();
    root = val.right;
    return val.val;
  }

  function hasNext() {
    return root || stack.length;
  }

}


function ToBinary(arr){

return bind()

function bind(lo = 0, hi = arr.length - 1, node = {}){
if(lo > hi)return null;
const mid = lo + (hi - lo >> 1);
node.val = arr[mid]; 
node.left = bind(lo, mid - 1, {});
node.right = bind(mid + 1, hi, {});
return node;
  }
}




const arr = [2,7,3,15,20];

const binaryTree = ToBinary(arr);

let iterator = new BSTIterator(binaryTree);

let a = iterator/*?*/



a.next() /*?*/
a.next()/*?*/
iterator.hasNext() /*?*/
a.next() /*?*/
iterator.next() /*?*/
iterator.hasNext() /*?*/
iterator.next() /*?*/

iterator.hasNext() /*?*/









