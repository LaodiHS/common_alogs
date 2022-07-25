


var findMaxLength = function(nums) {
    let first = new Array(2*nums.length + 1).fill(-2);
    first
    let now = 0, max = 0;
    first[now + nums.length] = -1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i])++now;
        else --now;
        if (first[now + nums.length] != -2)max = Math.max(max, i - first[now + nums.length]);
        else first[now + nums.length] = i;
    }
    return max;    
};
findMaxLength([0,1,0,1]) /*?*/








