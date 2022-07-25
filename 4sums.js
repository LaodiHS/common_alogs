


function fourSums(nums, target) {
    nums.sort((a, b) => a - b)
    const sum4 = []
    const highestVal = nums[nums.length - 1];
    backtrack();
    return sum4

    function backtrack(from = 0, branch = [], branchSum = 0, len = branch.length) {

        if (len === 4) return sum4.push(branch.slice());
        for (let i = from; i < nums.length; i++) {
       
            const val = nums[i]
            // skip over duplicates
            if ( i > from && val === nums[i - 1] )continue;
              
            // upper branch bound 
            // if the missing indexes were the the highest values 
            // would the sum of this branch path still be less than our target
            
            // 3 because we add the current value to the branch total
            // and the highest values fill the differnce
            if (branchSum + val + (3 - len) * highestVal < target) continue;
            
            // if the missing indexes were filled by the current value
            // and the total of the branch exceeded the target
            // kill branch exploration

            // 4 because the current value fills all remaining empty positions
            // to produce the possible total 
            if (branchSum + (4 - len) * val > target) break;
            branch.push(val)
         
            backtrack(i + 1, branch, branchSum + val)
           
            branch.pop()
        }

    }

}


fourSums([-3,-2,-1,0,0,1,2,3], 0) /*?*/





function threeSum(nums, target) {
    let sums3 = []
    nums.sort((a, b) => a - b)

    // walk with two pointers and two followers and a third spotter
    // outer-loop implcit  while->      <-while   implicit
    //[spotter, follower, pointer,... pointer, follower]

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let lef = i + 1
        let rig = nums.length - 1;

        while (lef < rig) {
            // check when the result add to zero
            if (!(nums[i] + nums[lef] + nums[rig])) {
                // push the result
                sums3.push([nums[i], nums[lef], nums[rig]])

                // pass over duplicates
                do lef++; while (rig > lef && nums[lef] === nums[lef - 1])
                do rig--; while (rig > lef && nums[rig] === nums[rig + 1])

                //because sorted, spotter needs to negate itself as we check check every subsquent calculation 
                // increase left pointer when the summation of left and right is less than the negation 
                // decrease the right pointer when the summation is greater than the spotter
                // when we need the number to be bigger move up and when we need it to be smaller move down
            } else if (nums[lef] + nums[rig] < -nums[i]) lef++
            else rig--

        }
    }
    return sums3
    }

threeSum([-1, 0, 1, 2, -1, -4], 0) /*?*/


function threeSums(nums) {
nums.sort((a, b) => a - b)
let sums3 = [];
nums.sort((a, b) => a - b)
backtrack(0, 0, 0)
return sums3

function backtrack(pos, count, sum, path = []) {
    if (count === 3) return sums3.push(path.slice())
    for (let i = pos; i < nums.length; i++) {
        if (i !== pos && nums[i] === nums[i - 1]) continue;
        if (sum + nums[i] + (2 - count) * nums[nums.length - 1] < 0) continue;
        if (sum + (3 - count) * nums[i] > 0) break;
        path.push(nums[i])
        backtrack(i + 1, count + 1, sum + nums[i], path)
        path.pop()
    }

}

}

threeSums([-1, 0, 1, 2, -1, -4], 0) /*?*/






function TwoSum(nums) {
    nums.sort((a, b) => a - b)
    let sums3 = [];
    nums.sort((a, b) => a - b)
    backtrack(0, 0, 0)
    return sums3

    function backtrack(pos, count, sum, path = []) {
        if (count === 2) return sums3.push(path.slice())
        for (let i = pos; i < nums.length; i++) {

            if (i !== pos && nums[i] === nums[i - 1]) continue;

            if (sum + nums[i] + (1 - count) * nums[nums.length - 1] < 0) continue;

            let b = sum + (2 - count) * nums[i]

            if (sum + (2 - count) * nums[i] > 0) break;

            path.push(nums[i])
            backtrack(i + 1, count + 1, sum + nums[i], path)

            path.pop()

        }

    }

}

TwoSum([-7, 7]) /*?*/




var fourSum = function(nums, target) {
    const ans = [];
  
    if (nums.length < 4) return ans;
  
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length - 3; i++) {
      if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break; //first candidate too large, search finished
      if (nums[i] + nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3] < target) continue; //first candidate too small
      if (i > 0 && nums[i] === nums[i - 1]) continue; //prevents duplicate result in ans list
  
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break; //second candidate too large
        if (nums[i] + nums[j] + nums[nums.length - 1] + nums[nums.length - 2] < target) continue; //second candidate too small
        if (j > i + 1 && nums[j] == nums[j - 1]) continue; //prevents duplicate results in ans list
          
        let low = j + 1,high = nums.length - 1;
          
        while (low < high) {
          let sum = nums[i] + nums[j] + nums[low] + nums[high];
          if (sum == target) {
            ans.push([nums[i], nums[j], nums[low], nums[high]]);
            while (low < high && nums[low] === nums[low + 1]) low++; //skipping over duplicate on low
            while (low < high && nums[high] === nums[high - 1]) high--; //skipping over duplicate on high
            low++;
            high--;
          }
          //move window
          else if (sum < target) low++;
          else high--;
        }
      }
    }
      
    return ans;
  };