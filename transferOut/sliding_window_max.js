

//optimal and efficnet using sliding maximums from both right and left O(n)
//   For Example: A = [2,1,3,4,6,3,8,9,10,12,56], w=4

// partition the array in blocks of size w=4. The last block may have less then w.
// 2, 1, 3, 4 | 6, 3, 8, 9 | 10, 12, 56|

// Traverse the list from start to end and calculate max_so_far. Reset max after each block boundary (of w elements).
// left_max[] = 2, 2, 3, 4 | 6, 6, 8, 9 | 10, 12, 56

// Similarly calculate max in future by traversing from end to start.
// right_max[] = 4, 4, 4, 4 | 9, 9, 9, 9 | 56, 56, 56

// now, sliding max at each position i in current window, sliding-max(i) = max{right_max(i), left_max(i+w-1)}
// sliding_max = 4, 6, 6, 8, 9, 10, 12, 56

function slidingWindowMax1(nums, w) {
    if (nums.length < 1) return nums;
    let max_left = []
    let max_right = []
    max_left[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        max_left[i] = i % w === 0 ? nums[i] : Math.max(max_left[i - 1], nums[i])
        let j = nums.length - i - 1;
        max_right[j] = j % w === 0 ? nums[j] : Math.max(max_right[j + 1], nums[j])
    }

    let sliding_max = []

    for (let i = 0, j = 0; i + w <= nums.length; j++, i++) {
       
        sliding_max[j] = Math.max(max_left[i + w - 1], max_right[i] || -Infinity)

    }

    return sliding_max
    
}

slidingWindowMax1([2,1,3,4,6,3,8,9,10,12,56],4) /*?*/
// slidingWindowMax3([1, -1], 1) /*?*/
// slidingWindowMax3([1,3,-1,-3,5,3,6,7],  3) /*?*/




//using que O(n) 
// queue
var maxSlidingWindow2 = function(nums, w) {
    let queue = [], output = [];
    for (let i = 0; i < nums.length; i++) {
      while (queue.length > 0 && nums[i] > queue[queue.length - 1]) {
        queue.pop();
      }
      queue.push(nums[i]);
      if (i < w - 1) { 
          continue; 
        }
      output.push(queue[0]);

      if (queue[0] === nums[i - w + 1]) {
           queue.shift();
         }
    }
    return output
  };

  maxSlidingWindow2([1,3,-1,-3,5,3,6,7],  3) /*?*/


var maxSlidingWindow3 = function(nums, w) {
    const currentWindowMaxes = [];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        while (currentWindowMaxes.length !== 0 && nums[i] > nums[currentWindowMaxes[currentWindowMaxes.length-1]]) {
            currentWindowMaxes.pop();
        }
        currentWindowMaxes.push(i);
        const idx = i - w + 1;
        if (idx >= 0) {
            result.push(nums[currentWindowMaxes[0]]);
            if (currentWindowMaxes[0] === idx) {
                currentWindowMaxes.shift();
            }
        }
    }
    return result;
};
maxSlidingWindow3([2,1,3,4,6,3,8,9,10,12,56],4)  /*?*/
// not optimal

var maxSlidingWindow4 = function (nums, k) {

    let back = 0
    let front = k
    let maximums = []
    while (front <= nums.length) {
        let temp = nums
        let interval = getWindow(temp, back, front)
        
        if(interval.length){
        maximums.push(Math.max.apply([], interval))
        }
        back++
        front++
    }
    return maximums

    function getWindow(nums, back, front) {
        return nums.slice(back, front)
    }
};

//not optimal
var maxSlidingWindow5 = function(nums, k) {
    if (!nums || nums.length == 0) return [];
    let cmax = Math.max(...nums.slice(0, k));
    if (nums.length <= k) return [cmax];
    let res = [cmax];


    for (let i = 1; i < nums.length - k + 1; i++) {
        let l = i + k - 1;
        let p = i - 1;
        if (nums[l] > cmax) {
            cmax = nums[l];
        } else if (nums[p] == cmax) {
            cmax = Math.max(...nums.slice(p + 1, l + 1));
        }
        res.push(cmax);
    }
    return res;
};

