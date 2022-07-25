// mergeSort merge
// this problem fits it sveral catagories. DFS, bottom up, divide and conqir, and a comparson sort. 
// there are two ways we could approach this problem that I am aware of. 
// 1. the first is to use a priority queue. We can use a heap to keep track of the values and an array to keep track of duplicates this will run O(n log n) because a heap accesses //elements in (log n) and for every element we access the heap once which adds to our O(n) + log(n) O(n log n) time. 

// another solution we can persue is divide and conqure. we can merge 2 lists thus createing a 2n list
// our solution thus becomes (n + n ) + (2n + n) + (3n + n) + ...+ ((k-1) n + n )
// simplfiying that we get 2n + 3n + 4n + ... + kn 
// simpliified even furhter we get O(k ^ 2n)
// the problem thus becames sorting an array of size kn except that each bock of n elements is already sotred. 
// this is exactly what we see in merge sort.  at the lognth level of the recursion tree. if the data breaks up 
//approprately. We can thus apply the same idea as the merge sort and apply this untill all the values have been merged. 
// we can do O(kn) work to merge the k arrays of size n into k/2 arrays of size 2n, and then continue doing O(kn) work O(log k) times untill we have a single array of size kn. Thus, the running time of this apprach is O(k log kn)
// in summery  Thre are exactly k^n ways of divinding n elements among k lists, which means you need at least n log k bit of information to merge them back again. This refercencse the multinomial theorm, also known as the librairan rule or whatever. 

// so knowing this we can do something better than using a heap or a queue along with a comparson sort
// as both these methods add additional computation burden. Instead we can use a binary tree to store pointers. This will strip down our comparson sort and make it faster 

var mergeKLists = function(lists, lo = 0 , hi = lists.length - 1) {
    if(!lists.length)return null;    
    if(lo === hi) return lists[lo]; 
    // capture value in recursion 
    const mid =  (lo + hi) >> 1
    const left = mergeKLists(lists, lo, mid)
    const right= mergeKLists(lists, mid + 1, hi)  
    return mergeTwoLists(left, right)
       
};

function mergeTwoLists(l1, l2){
    if(!l1) return l2;
    if(!l2) return l1
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1; 
    }else{
        l2.next = mergeTwoLists(l2.next, l1)
        return l2;
    }
    
    
}




  var mergeKLists = function(lists) {
    lists =lists.filter(list=> list)
    if(lists.length===0)return []
    if(lists.length===1)return lists[0]
   let base= lists.shift()
    for(let list of lists){
    base= mergeTwo(list,base)
    }
    return base;
};


function mergeTwo(a,b){
    if(!a)return b
    if(!b)return a;
    if(a.val<b.val){
        a.next=mergeTwo(a.next,b)
        return a
    }else{
        b.next=mergeTwo(b.next,a)
        return b
    }
}


var mergeKLists = function(lists) {
    return toArray(lists).sort((a, b) => a - b);
  };
  
  const toArray = lists => {
      let array = [];
      for (let l of lists) {
          let current = l;
  
          while (current !== null)  {
              array.push(current.val);
              current = current.next;
          }
      }
      return array;
  };




function mergeSort(list) {
list = list.map(val=>({val})) 
   let link = merge()
    const sorted = []
    while(link) sorted.push(link.val) , link = link.next;
    return sorted; 
    function merge(lo = 0, hi = list.length - 1) {
        if (lo === hi) return list[lo];
        const mid = lo + hi >> 1;
        const left = merge(lo, mid);
        const right = merge(mid + 1, hi);
          return  sort(left, right)
    }
    function sort(l1, l2) {
        if (!l1 || !l2) return !l1 ? l2 : l1;
        if (l1.val < l2.val) {
            l1.next = sort(l1.next, l2);
            return l1;
        } else {
            l2.next = sort(l2.next, l1);
            return l2;
        }
    }

}


mergeSort([4,5,6,7,8,9])/*?*/



let array = [[1,2],[3,4],[7,5]]


array = array.flatMap((h => (val, i, aa) => {
      val
         
    return h;
})([]) )


array