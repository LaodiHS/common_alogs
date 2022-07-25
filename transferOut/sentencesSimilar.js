// this is a graph problem 
var areSentencesSimilarTwo = function (words1, words2, pairs) {
    if(words1.length != words2.length ) return false;
    let hash = new Map();
    for (let [p1, p2] of pairs) {
        union(p1, p2)
    }
    for (let i = 0; i < words1.length; i++) {
        let a = find(hash.get(words1[i]))
        let b = find(hash.get(words2[i]))
        if (a !== b) {
            return false
        }
    }
    return true;
    function find(n) {
        if (!hash.has(n))hash.set(n,n);
        return hash.get(n)===n ? hash.get(n) : find(hash.get(n))
    }
    function union(a, b) {
        a = find(a)
        b = find(b)
        if (a !== b) {
        hash.set(a,b)
        }
    }
};








areSentencesSimilarTwo(
    
    ["great","acting","skills"],
    ["fine","drama","talent"],
    [["great","good"],["fine","good"],["drama","acting"],["skills","talent"]]) /*?*/




    
   