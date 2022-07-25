// find duplicates in two sorted arrays
// optimal space time. 
function findDuplicates(a, b) {
    const dups = [];
    let [i, j] = [0, 0];
    while (i < a.length && j < b.length) {
        if (a[i] === b[j]) {
            dups.push(a[i])
            i++
            j++
            continue;
        }
        if (a[i] < b[j])i++
        else j++;
    }
    return dups
}

findDuplicates([1,1,1], [1,1,1]) /*?*/




//O(m*logn)// O(mlogn)

function findDuplicates2(arr1, arr2) {
    let dups = [];
    arr2.forEach(element => {
        let temp = arr1;
        while (temp.length) {
            let half = temp.length>>1;
            if (temp[half] === element) {
                dups.push(element)
                break;
            }
            if (temp.length === 1 && temp.pop() === element){ 
                dups.push(element)
                break;
            };
            temp = temp[half] > element ? temp.slice(0, half) : temp.slice(half);
        }
    })
    return dups;
}
 findDuplicates2([1,2,3,5,6,7], [7,8,9,10,11,12])