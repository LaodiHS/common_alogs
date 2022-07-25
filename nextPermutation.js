// next permutation 
function nextPermutation(nums){
let  i = nums.length -1; k = i;

while(i && nums[i-1] >= nums[i])i--;
    for(let j = i; j < k; j++, k--)nums[j] = [nums[k], nums[k] = nums[j]][0];
    if(i > 0){
    k = i--; 
    while(nums[k] <= nums[i])k++;
    nums[i] = [nums[k], nums[k] = nums[i]][0];
}
    return nums

}


nextPermutation([1]) /*?*/


