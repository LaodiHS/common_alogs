function minWindow(s, t) {

    const map = {};
    let count = 0

    for (let c of t) map[c] = (map[c] || 0) + 1, count++;

    let start = 0;
    end = 0;
    head = 0;
    d = Infinity;

    while (end < s.length) {

        if (map[s[end++]]-- > 0) count--;
        
        while (count === 0) {

            if (end - start < d) {
                d = end - start;
                head = start;
            }
            if (map[s[start++]]++ >= 0) count++;
        }
    }


    let k = s.slice(head, head + d);

    return d === Infinity ? "" : s.slice(head, head + d);

}

 let a = minWindow("ADOBECODEBANC", "ABC");



