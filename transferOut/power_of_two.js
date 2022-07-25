var isPowerOfTwo = function(n) {
    if(n === 0) {
        return false;
    }
    while(n % 2 === 0) {
        n = n / 2;
    }
    return n === 1;
};

var isPowerOfTwo = function(n) {
    return Math.log2(n) % 1 === 0
};

var isPowerOfTwo = function(n) {
    return Number.isInteger(Math.log(n/4)/Math.log(2));
};
