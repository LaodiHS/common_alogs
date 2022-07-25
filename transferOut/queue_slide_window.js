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