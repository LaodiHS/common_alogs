function maxsub(arr){

ct=0; ca= -Infinity;
let t ={val:0}
const val = max(0, arr.length-1,t);


return val
function  max(lo, hi ){
if(lo === hi)return arr[lo];

let mid = lo + hi >> 1 

let l = max(lo, mid,t);
let r = max(mid + 1, hi,t);



ct += l;
if(ct < 0)ct=0;
if(ct > t.val)t.val = ct;


ct += r;  
if(ct < 0)ct=0; 
if(ct > t.val)t.val = ct;


if(hi=== arr.length-1)return t;

return 0



}



}


maxsub([-2, -3, 4, -1, -2, 1, 5, -3]) /*?*/