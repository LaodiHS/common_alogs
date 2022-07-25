
const gcd=(a , b)=>0 == b ? a : gcd(b, a % b);


// function rotate(arr, d, n){

// for(let i = 0; i< gcd(d, n); i++ ){

// let temp = arr[i];
// let j = i;
// while(true){
//     let k = j + d;
//     if(k>=n)k = k - n;
//     if(k===i)break;
//     arr[j] = arr[k];
//     j = k;
//     }
//     arr[j] = temp
// }

// return arr
// }
let rotate = function(nums, k) {
     nums.unshift(...nums.splice(nums.length-k));
     return nums
};
const rotateMod = function(nums, k){
     let copy = Object.assign([],nums); 
     let l = nums.length;
     for(let i = 0; i< nums.length; i++){
     nums[i]= copy[(i + k ) % l]
     }

     nums
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let n = arr.length / arr[0] 
rotateMod(arr,3)
//rotate(arr,6) /*?*/