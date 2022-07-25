var sequenceReconstruction = function (org, seqs) {
    const pairs = {};
    const idxs = {};

    for (let i = 0; i < org.length; i++)
        idxs[org[i]] = i;

    for (let s of seqs) {

        for (let i = 0; i < s.length; i++) {

            if (idxs[s[i]] === null) return false;

            if (i > 0 && idxs[s[i - 1]] >= idxs[s[i]]) return false;
            pairs

            pairs[`${s[i - 1]}_${s[i]}`] = 1;
        }
    }

    for (let i = 0; i < org.length; i++)
        if (pairs[`${org[i - 1]}_${org[i]}`] == null) return false;

    return true;
};

 sequenceReconstruction([1,2,3],[[1,2],[1,3]]) /*?*/

sequenceReconstruction([4,1,5,2,6,3],[[5,2,6,3],[4,1,5,2]]) /*?*/

sequenceReconstruction([1,2,3],[[1,2],[1,3],[2,3]]) /*?*/