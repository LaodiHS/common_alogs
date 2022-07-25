// intersection of two arrays
// If you assumed they were sorted for you. 
// And you had linear time and constant space constraints. 

function intersections(l1, l2) {
    const intersections = []
    let l = 0, r = 0;
    while ((l2[l] && l1[r]) !== void 0) {
       const left = l1[r], right = l2[l];
        if (right === left) {
            intersections.push(right)
            while (left === l1[r]) r++;
            while (right === l2[l]) l++;
            continue;
        }
        if (right > left) while (left === l1[r]) r++;
         else while (right === l2[l]) l++;
    }
    return intersections;
}

intersections([9,4,9,8,7,4,0],[0,7,4,9,5]) /*?*/

let l1=[2,3]
l2 =[5,7]  



f=n=>g=a=>{
  let b =  a +a
  b
 let z =   a.splice(0,n)
 z
   return  a+a&&[a.splice(0,n),...g(a)]
}
for(n = 1; n < 8; n++) {
    console.log(`n = ${n}: ` + JSON.stringify(f(n)([1,2,3,4,5,6])));
  }