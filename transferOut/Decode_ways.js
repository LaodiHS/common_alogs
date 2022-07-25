function numDecodingsForward(num) {

    let dp = Array(num.length + 1).fill(0)


    dp[0] = 1

    dp[1] = num[1] === 0 ? 0 : 1
    for (let i = 2; i <= num.length; i++) {

        if (num[i - 1] !== '0') {
            dp
            dp[i] += dp[i - 1]
            dp


        }

        if (num[i - 2] === '1' || num[i - 2] === '2' && num[i - 1] <= '6') {

            dp[i] += dp[i - 2]
            dp
        }
    }

    return dp[num.length]

}

numDecodingsForward('06') /*?*/




function numsDecodingsTree(s) { // Inefficient backtracking solution. But works flawlessely!
    if (s.length === 0) return 0;
    let map = new Map();

    return numsDecodingsi(s);


    function numsDecodingsi(s) {

        if (s.length === 0) return 1;
        let res = 0;

        for (let i = 0; i < s.length; i++) { // Will run twice basically. What the heck I was thinking ?
            val = s.slice(0, i + 1);
            s
            i
            val
            if (val <= 26 && val > 0) {

                if (map.has(s)) {

                    let get = map.get(s)

                    return get;
                }

                res += numsDecodingsi(s.slice(i + 1, s.length));

            } else break;
        }
        map
        s
        res
        map.set(s, res);
        res
        return res;
    }
}

numsDecodingsTree('226') /*?*/

function numDecodingsBackWard(s) {
    let p = 1, pp, n = s.length;
    for (let i = n - 1; i >= 0; i--) {
        let cur = s[i] === '0' ? 0 : p;
        if (i < n - 1 && (s[i] === '1' || s[i] === '2' || s[i + 1] < '7')) {
            cur += pp;
        }
        pp = p
        p = cur;
    }

    return !s.length ? 0 : p;


}

numDecodingsBackWard('226') /*?*/





