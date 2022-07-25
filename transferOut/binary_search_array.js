// search binary array
let even=[...Array(20)].map((_,i)=>i)
let odd=[...Array(21)].map((_,i)=>i)
let onRight = [-8,0,2,5]
let notThere = [-1,0,3,6]
let onLeft=[-8,-2,1,2,4]
let multiple=[-8,-2,3,3,4]
binarySearch(onRight) /*?*/
binarySearch(onLeft) /*?*/
binarySearch(notThere) /*?*/
binarySearch(multiple) /*?*/
function binarySearch(arr) {
    let right = arr.length - 1,
        low = 0,
        mid;
    while (low <= right) {
        mid = Math.floor((low + right) / 2)
        let val = arr[mid]
        if (val === mid) return mid;
        if (val > mid) {
            right = mid - 1
            continue;
        }
        if (val < mid) low = mid + 1;
    }
    return -1
}

