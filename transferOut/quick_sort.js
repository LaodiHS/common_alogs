
function quick_sort(origArray){
if(!origArray.length)return origArray;
const left = [];
const right = [];
const newArr = [];
const pivot = origArray.pop();

for(let node of origArray){
    if(node <= pivot)left.push(node);
    else right.push(node)
}
return newArr.concat(quick_sort(left),pivot,quick_sort(right) )
}


quick_sort([0,2,3,5,4,5,8,2,3]) /*?*/ 


var sortList = function(head) {
    if(!head) return head;
    let length = 0;
    let pointer = head;
    while(pointer) {
        length ++;
        pointer = pointer.next;
    }
    return sort(head, length);
};

function sort(head, length) {
    if(length === 1) return head;
    if (length === 2) {
        if(head.val > head.next.val) {
            let cache = head.next.val;
            head.next.val = head.val;
            head.val = cache;
        }
        return head;
    }
    let count = 1;
    let current = head;
    const bround = Math.ceil(length / 2);
    while(count < bround) {
        current = current.next;
        count ++;
    }
    let next = sort(current.next, length - count)
    current.next = null;
    head = sort(head, count);
    
    let newHead = new ListNode(0);
    current = newHead;
    while(head !== null && next !== null) {
        if(head.val < next.val) {
            current.next = head;
            head = head.next;
        }
        else {
            current.next = next;
            next = next.next;
        }
        current = current.next
    }
    if(head) {
        current.next = head;
    }
    else if(next) {
        current.next = next;
    }
    return newHead.next;
}



var mergeKLists = function(lists, lo = 0 , hi = lists.length - 1) {
    if(!lists.length)return null;    
    if(lo === hi) return lists[lo]; 
    const mid =  (lo + hi) >> 1
    const left = mergeKLists(lists, lo, mid)
    const right= mergeKLists(lists, mid + 1, hi)  
    return mergeTwoLists(left, right)
       
};

function mergeTwoLists(l1, l2){
    if(!l1 || !l2) return !l2 ? l1 : l2;
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1; 
    }else{
        l2.next = mergeTwoLists(l2.next, l1)
        return l2;
    }
    
}
let list = [6,7,8,9,10,5,3,2,1]; 
list = list.map(val => ({val}))

list = mergeKLists(list) /*?*/


let sorted = [];


while(list)sorted.push(list.val),list = list.next;


  