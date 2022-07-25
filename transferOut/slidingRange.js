// best answer
https://join.slack.com/t/datastructuresjs/shared_invite/enQtNDY2MTg1ODY3NTQxLTNkZmJkMjIyZDljZjNmOTQwMGFlYTEwNjk1NGU3MDdmODk2MGY0MjA2ZmQ3NjRlMmUxY2I1MjhkNzRlNjM0NTE
var numFriendRequests = function (ages) {
    let nums = Array(121).fill(0),
        res = 0;
    for (let age of ages) nums[age]++;
    let sum = 0, minAge = 15
    for (var i = 15; i <= 120; res += nums[i++] * (sum - 1)) {
        sum += nums[i]
        while (minAge <= 0.5 * i + 7) sum -= nums[minAge++]
    };
    return res;
};
console.log(numFriendRequests([20,30,100,110,120]))




function frendRequestes(ages) {
    const nums = Array(121).fill(0)
    for (let age of ages) nums[age]++
    let sum = 0, min = 15, req = 0;
    for (let i = 15; i < 121; req += nums[i++] * (sum - 1)) {
        sum += nums[i]
        while (min <= 0.5 * i + 7) sum -= nums[min++];
    }
    return req;
}

frendRequestes([20,30,100,110,120]) /*?*/
