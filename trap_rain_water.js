



// we esentially given a mountain range. And we are try go to find the vol water 
// in the crevasis  
//optimal approach. Have two walkers one on the right and another on the left
// we start on the side with the higher elevation
// each walker will have two gauges. and they give the differance in elevation between the two
//  

function trap(height){

let left = 0, right = height.length - 1; 
let leftGage = 0, rightGage = 0, vol = 0;

while(right > left){
   leftGage =  Math.max(leftGage, height[left])
    rightGage = Math.max(rightGage, height[right])
    if(leftGage < rightGage){
    vol += leftGage - height[left]
    left++
    }else{
    vol += rightGage - height[right]
    right--
}
    }
   
return vol
}



trap([0,1,0,2,1,0,1,3,2,1,2,1])


function productExceptSelf( nums) {
    let n = nums.length;
    let res = Array(n).fill(1);
    let p= 1;
    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];

    }
    res
    return res;
}

productExceptSelf([1,2,3,4])