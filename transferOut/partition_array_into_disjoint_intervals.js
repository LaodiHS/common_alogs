//confusing question 
// Given an array A, partition it into two (contiguous) subarrays left and right so that:

//Every element in left is less than or equal to every element in right.
//left and right are non-empty.
//left has the smallest possible size.
//Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.
var partitionDisjoint = function(A) {
    let localMax=A[0], partIdx=0,max=localMax;
    for(let i =1; i<A.length;i++){
        if(localMax>A[i]){
            localMax= max
            localMax
            partIdx=i
        }else{
            max=Math.max(max,A[i])
        }        
    }
return partIdx+1;
            }

            partitionDisjoint([5,6,0,3,8]) /*?*/