//https://www.youtube.com/watch?v=XiuSW_mEn7g

//I have this data  PIP51L GKK69M CRJ03K LWC50Q MUF23X VHK65K XWB90O TPU62F GBV26Y UNC74L
  
//How would you efficiently sort this?
//PIP51L GKK69M CRJ03K ... are all the same length.
// Assuming 1 character == 1 byte this means each can be represented by 6 bytes
// .. so a std::uint64_t (or the fast/least variant) works to keep it.

// class Solution:
//     # @param num, a list of integer
//     # @return an integer
//     def maximumGap(self, num):
//         if len(num) < 2:
//             return 0
//         num = self.radixSort(num)
//         res = 0
//         for i in range(1, len(num)):
//             res = max(num[i] - num[i - 1], res)
//         return res
    
    // def radixSort(self, num):
    //     for i in range(31):
    //         onebucket = []
    //         zerobucket = []
    //         needle = 1 << i
    //         for j in range(len(num)):
    //             if num[j] & needle != 0:
    //                 onebucket.append(num[j])
    //             else:
    //                 zerobucket.append(num[j])
    //         num = []
    //         num += zerobucket
    //         num += onebucket
    //     return num


function redixSort(num) {
    let i = 0; 
    while(i<31)
     {
        const onebucket = [];
        const zerobucket = [];
        let needle = 1 << i;
        for (let j = 0; j < num.length; j++) {
            if ( (num[j] & needle) !== 0){ 
                onebucket.push(num[j]);
            }else{
                 zerobucket.push(num[j]);
             } 
        }
        num = [];
        [].push.apply(num,zerobucket);
        [].push.apply(num, onebucket);
    i++
    }

    return num;
}

redixSort([7,9,33,4,5,11]) /*?*/

