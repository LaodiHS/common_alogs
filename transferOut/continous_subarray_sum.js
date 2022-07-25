var checkSubarraySum = function(nums, k) {
    k = Math.abs(k);
    let obj = {},
      sum = nums[0];
      obj[sum % k] = 1;
    for (let i = 1; i < nums.length; i++) {
      sum += nums[i];
      if (sum % k === 0 || (sum === 0 && k === 0)) {
        return true;
      }
      if (k !== 0 && obj[sum % k]) {
        return true;
      }
      obj[sum % k] = 1;
    }
    return false;
  };

    checkSubarraySum([23,2,4,6,7, 6]) /*?*/