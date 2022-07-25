
function mergeSort(a){
return segment()
    function segment(lo = 0, hi = a.length-1){
    if(lo === hi)return {val: a[hi]}; 
    const mid = lo + hi >> 1;
    const left =  segment(lo, mid); 
    const right = segment(mid + 1, hi);
    return bind(left, right);
}

    function bind(l1, l2){
        if(!l1 || !l2) return !l1 ? l2 : l1;
         return l1.val < l2.val ? (l1.next = bind(l1.next, l2), l1): (l2.next = bind(l2.next, l1), l2);
    }

}

let b = mergeSort([10,9,8,7,6,3,4,5,2,1,0])

while(b){
let val = b.val
val
    b = b.next;
}

function iterMergeSort(arr) {
    while (arr.length) {
        let l1 = arr.pop();
        l1 = typeof l1 === 'object' ? l1: Number.isInteger(l1) ? {val:l1} : null;
        let l2 = arr.pop();
        l2 = typeof l2 === 'object' ? l2:Number.isInteger(l2) ? {val:l2} : null;
        const root = {}; let obj = root;
        let L1 = l1 , L2 = l2;
        while (L1 && L2) {
            if (L1.val < L2.val) obj.next = L1, L1 = L1.next;
             else obj.next = L2, L2 = L2.next;
        obj = obj.next;  
     }
     obj.next = L1 ? L1 : L2;
        if (root.next) arr.push(root.next);
        if (!l1 || !l2) {
            return root.next;
        }

    }

}


let f = iterMergeSort([9,5,3,2,1,0,4,6,7,8]) 

while(f){
const c = f.val;
    f=f.next
}
var merge = function(nums1, m, nums2, n) {
    
    var len = m + n;
    m--;
    n--;
    while (len--) {
        if (n < 0 || nums1[m] > nums2[n]) {
            nums1[len] = nums1[m--];
        } else {
            nums1[len] = nums2[n--];
        }
    }
    

};
