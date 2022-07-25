

// // heap sort array

// function sortKMessedArray(arr, k) {
 




    
//     }


//     function unite(a, b) {
//         a = find(a)
//         b = find(b)
//         if (a === b) return /*?*/
//         if(rank[a]>rank[b]){
//         heap.set(heap.get(b), a)
//         rank[heap.get(a)]+=rank[heap.get(b)]
//         }else{

//         heap.set(heap.get(a),b )
//         rank[heap.get(b)]+=rank[heap.get(a)]
//         }
//     }

    
// }

// sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2)

//   const topKFrequent = (nums, k) => {
//     const heap = {};
//     const result = [];
//     const bucket = Array(nums.length + 1).fill().heap(() => []);
    
//     for (let num of nums) {
//         heap[num] = ~~heap[num] + 1;
    
//     num
//     }
    



//     for (let num in heap) {
//         bucket[heap[num]].push(parseInt(num));
//     }
    
//     for (let i = nums.length; i >= 0 && k > 0; k--) {
//         while (bucket[i].length === 0) i--;
//         result.push(bucket[i].shift());
//     }
    
//     return result;
// };


// topKFrequent([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2) /*?*/