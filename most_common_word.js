function mostCommonWord(paragraph, banned) {
    paragraph = paragraph.toLowerCase()
    let m = {}
    for (let i = 0; i < paragraph.length;) {
        let s = ""
        while (i < paragraph.length && isalpha(paragraph[i]))s += paragraph[i++];
        while (i < paragraph.length && !isalpha(paragraph[i])) i++;
        m[s] = (m[s] || 0) + 1;
    }
    for (let x of banned) m[x] = 0;
    let res = ""
    let count = 0;
    for (let x in m) [count, res] = m[x] > count ? [m[x], x] : [count, res];
    return res;
}
function isalpha(x) { return 'a'.charCodeAt() <= x.charCodeAt() && x.charCodeAt() <= 'z'.charCodeAt() }

mostCommonWord("Bob hit a ball, the hit's BALL flew far after it was hit.", ["hit"])/*?*/


