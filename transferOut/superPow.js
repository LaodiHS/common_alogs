function superPow(a, b) {
    const MOD = 1337;
    let res = 1

    for (let n of b) {
        let next = 1
        for (let i = 0; i < 10; i++) {
            next *= res
            next %= MOD
        }
        for (let i = 0; i < n; i++) {

            next *= a
            next %= MOD
        };

        res = next
    }
    return res;
}


superPow(2,[2,0,0]) /*?*/