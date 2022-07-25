arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < arr.length; i++) {
console.log(arr[i] )
}

function binarySearch(searchValue) {
    var lowerIndex = 0,
        higherIndex = arr.length - 1,
        middleIndex,
        writeResult;

    while (lowerIndex <= higherIndex) {
        middleIndex = Math.floor((higherIndex + lowerIndex) / 2);
        if (searchValue == arr[middleIndex]) {
            break;
        }
        if (searchValue > arr[middleIndex]) {
            lowerIndex = middleIndex + 1;
        } else {
            higherIndex = middleIndex - 1;
        }
    }
}

binarySearch(5)