




function Solution(){


let first =  null;
let second =  null;
let prev =  {val:-Infinity}
return {recover}

function recover(root){
    traverse(root);
    first.val=[second.val, second.val = first.val][0]; 
  
    return root;
}

function traverse(node){
if(node){
    traverse(node.left);
    if(!first && prev.val >= node.val)first = prev;
    if(first && prev.val >= node.val)second = node;
    prev = node;
    traverse(node.right);
        }
    }
}


const obj = new Solution ()
const a= obj.recover({"val":1,"right":null,"left":{"val":3,"right":{"val":2,"right":null,"left":null},"left":null}})
const arr = [];
let i = 3;
while (i--) arr.push(3 - i);
arr
function toBinary(arr) {
    const serial = [];
    return {
        bind,
        seralize
    };

    function bind(lo = 0, hi = arr.length - 1, node = {}) {
        if (lo > hi) return null;
        const mid = lo + ((hi - lo) >> 1);
        node.val = arr[mid]
        node.left = bind(lo, mid - 1, {})
        
        node.right = bind(mid + 1, hi, {})
        return node;
    }

    function seralize(node) {
        if(!node){ 
            serial.push(null)
            return;
        } else {
          serial.push(node.val);
            seralize(node.left);
              
            seralize(node.right);
        }
        return serial;
    }



}



let tree = new toBinary(arr);

let root = tree.bind()




let node = tree.seralize(root)

node





