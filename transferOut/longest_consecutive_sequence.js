// we are going to create an adjancy list
// we are going to use a find operation to find our root node after coloring 
// we are going to use a union operation to unite adjacent nodes. 
var longestConsecutive = function (nums) {
    let n = nums.length;
    if (n < 2) return n;
     const rank =nums.reduce((acc,b)=> (acc[b]=1,acc),{}) , map = new Map(),
    id = nums.reduce((acc,val)=>(acc[val]=val, acc),{});
    for (let i = 0; i < n; i++)insert(nums[i], i);
    let res = 0;
    for (let i of nums)res= Math.max(res, rank[i]);  
    return res;
    function insert(num, index) {
        if (!map.has(num)) {
            map.set(num, index)
            if (map.has(num - 1))unite(num - 1, num);
            if (map.has(num + 1))unite(num + 1, num);
        }
    }
    function find (p){
        if (id[p] !== p) {
            id[p] = find(id[p]);
        }
        return id[p];
    
    }
    function unite(a, b) {
        let roota = find(a);
        let rootb = find(b);
    
        if (roota === rootb) return;
        if (rank[roota] > rank[rootb]) {
            id[rootb] = roota
            rank[roota] += rank[rootb]
        } else {
            id[roota] = rootb
            rank[rootb] += rank[roota]
            rank
        }
    }
};
longestConsecutive([0,-1]) /*?*/
//  longestConsecutive([100, 4, 200, 1, 3, 2]) /*?*/


 var longestConsecutive2 = function (nums) {
    if(nums.length<2)return nums.length
     nums = nums.reduce((ac, k) => (ac[k] = k, ac), {});
     let best = 1;
     for (let x in nums) {
         if (!(x - 1 in nums)) {
             x = x*1
             let y = x + 1
             while (y in nums) {
                 y = y*1
                 y += 1
                 best = Math.max(best, y - x)
             }
         }
     }
     return best
 };
 longestConsecutive2([100, 4, 200, 1, 3, 2]) /*?*/
 longestConsecutive2([0,0]) /*?*/






 var longestConsecutive3 = function(nums) {
    let map = {}, max = 0;
    nums.forEach(n => map[n] = true);
    nums.forEach(n => {
        if (map[n]) {
            let left = 0, right = 0, s = n, e = n;
            while (map[--s]) {
                left++;
                map[s] = false;
            }
            while (map[++e]) {
                right++;
                map[e] = false;
            }
            max = Math.max(max, left + right + 1);
        }
    });
    return max;
};
longestConsecutive3([0,0]) /*?*/




function slidingWindow(string, pattern){
// the front
let anterior=-1
// back 
let posterior=0
let minstr= ""
let window={}
pattern.split('').forEach(value=> window[value] = (window[value]||0)+1)

let count = Object.keys(pattern).length
while(anterior<string.length){
if(count === 0){
    // state of the count indicates the all nutritional requirments have been satisfied
   // we grab the string if it does not already exists and if it does we grab the string that is smallest
    if(!minstr || minstr.length >  anterior - posterior + 1)minstr = string.slice(posterior,anterior+1);
    // we begin burining up the letter being in this extended state and so our requirments on the tail end disappear
    // we indincate a deficiate by moving up the count
    if(window[string[posterior]] !== undefined ) window[string[posterior]]++;
    // if our window defficiet is greater than 0 we move our state count up one
    if(window[string[posterior]] !== undefined && window[string[posterior]]>0)count++;
    // we move the posterior forward
    posterior++
}else{
    // move anterior forward
    anterior++
if(window[string[anterior]] !== undefined )window[string[anterior]]--
if(window[string[anterior]] === 0)count--
    }
}

return minstr
}









