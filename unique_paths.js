var uniquePaths = function(m, n) {
    const R = m - 1
    const D = n - 1
    const N = R + D
    const k = R > D ? D : R
    
    let res = 1
    for (let i = 1; i <= k; i++) {
        res = res * (N - k + i) / i
    }
    return res
};

uniquePaths(3,2) /*?*/


var uniquePaths2 = function(m, n) {
    let currentRow = new Array(n);
    // Assigning a 1 to matrix[0][0] is simply a shortcut that skips some later computation
    // as matrix[i][0] will never change in this iterative process
    for (let i = 0; i < n; i++) {
        currentRow[i] = 1;
    }
    for (let row = 1; row < m; row++) {
        for (let i = 1; i < n; i++) {
            currentRow[i] += currentRow[i - 1];
        }
    }
    return currentRow[n - 1];
};