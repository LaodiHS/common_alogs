/// 



let min = null;
 
let no_of_node = 0
function insertion(val, node={}){
    node.key= val
    node.parent= null;
    node.child=null;
    node.left = node;
    node.right = node;
    if(min !== null){
        min.left.right = node; 
        node.right = min;
        node.left = min.left;
        min.left = node;
        if(node.key < min.key)min = node;
    }
    else min = node; 
    
no_of_node++
    
}







insertion(1)
insertion(2)
insertion(3)
insertion(4)
insertion(5)
insertion(6)
insertion(7)

console.log(min)
console.log(min.left.key)
min /*?*/
let i = 15;

while(i--){

min = min.left 
let val = min.key;
val


}

function verticalOrder(node) {
    let result = [];
    let queue = [
        [node, 0]
    ];
    let heap = {};
    let min = Infinity;
    let max = -Infinity;
    for (let element of queue) {
        const [node, id] = element;
        min = Math.min(min, id);
        max = Math.max(max, id);
        heap[id] = heap[id] || [];
        heap[id].push(node.val);
        if (node.left) queue.push([node.left, id - 1]);
        if (node.right) queue.push([node.right, id + 1]);
    }
    for (let i = min; i <= max; i++) {
        if (heap[i]) result.push(heap[i])
    }

    return result;
}


function BuildBinary(arr) {
  return heapify(0, arr.length - 1);
    function heapify(lo, hi, node = {}) {
        if (lo > hi) return null;
        let mid = lo + ((hi - lo) >> 1);
        node.val = arr[mid];
        node.left = heapify(lo, mid - 1, {});
        node.right = heapify(mid + 1, hi, {});
        
        return node;
    }

}

let d = 6; 
let arr = [];
while(d--)arr.push(5-d)

let heap = BuildBinary(arr);

let verticals = verticalOrder(heap)

function mergeSort(arr){
arr = arr.map(val => ({val}))

let result = []; 
let list = segment();

while(list)result.push(list.val), list = list.next;
return result; 

function segment(lo = 0, hi = arr.length ){
if(lo === hi) return arr[lo];
const mid =  lo + hi >> 1; 
const left = segment(lo,  mid);
const right = segment(mid+1 , hi);
return mergeLists(left, right);

}

function mergeLists(l1,l2){
    if(!l1 || !l2)return  !l2 ? l1 : l2;
    if(l1.val < l2.val){
    l1.next = mergeLists(l1.next,l2);
       return l1;
    } else {
    l2.next = mergeLists(l2.next, l1);
        return l2; 
    }
  }
}

const values = [10,9,3,4,5,6,7]
mergeSort(values) /*?*/