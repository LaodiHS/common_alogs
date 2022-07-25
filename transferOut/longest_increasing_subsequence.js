var lengthOfLIS = function(nums) {
    
    if(!nums.length) return 0;
    
    // dynamic length because JavaScript is awesome like that :)
    // hence we don't need to track of the current running length of tails
    const tails = [];
    
    tails[0] = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        
        // replace current nums[i] with head if it's smaller
        if(nums[i] < tails[0]) {
            tails[0] = nums[i];     
        // if current nums[i] is bigger than the largest value we've recorded
        // we can extend our tails by current nums[i]
        } else if(nums[i] > tails[tails.length-1]) {
            tails.push(nums[i]);
        } else {
            // using binary search to find the insertion point of current nums[i]
            // return r because we're looking to replace index of tail that's greater than nums[i]
            let l = 0;
            let r = tails.length-1;
            while(l < r) {
                const mid = (l+r) >> 1;
                if(tails[mid] >= nums[i]) {
                    r = mid
                } else {
                    l = mid + 1;
                }
            }
            tails[r] = nums[i];
        }   
    }
    return tails.length;
};

lengthOfLIS([4,5,6,3]) /*?*/










//                  Longest Increasing SubSequance
// create an empty list
  // use i pointer to walk the values
   // push into the empty list, the value 1 for every iteration 
        // if the value in our orginal array nums at j is larger than the value at i
        // set the value of our list at i to be the max between the current value at i for our list
function LongestIncreasingSubSequance(nums){
    // create an empty list
    list = [];
  
for(let i = 0; i < nums.length; i++ ){
    // push into the empty list, the value 1 for every iteration 
    list.push(1)
    // start a second walk with j but only walk as far as the point i 
    for(let j = 0; j < i; j++){
        // if the value in our orginal array nums at j is larger than the value at i
    if(nums[j] < nums[i]){ 

        // set the value of our list at i to be the max between the current value at i for our list
        //  value       
    list[i] = Math.max(list[i], list[j] + 1);

        }    
    }
}
return nums.length ? Math.max(...list) : 0; 
}
 




LongestIncreasingSubSequance([4,5,6,3]) /*?*/