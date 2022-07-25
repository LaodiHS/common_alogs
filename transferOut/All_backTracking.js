


// //Backtracking algo:
// //n-queen problem:O(n!)
// //graph coloring problem:O(nm^n)//where n=no. of vertex,m=no. of color used
// //hamilton cycle:O(N!)
// //WordBreak and StringSegment:O(2^N)
// //subset sum problem:O(nW)
// var combine = function(n, k) {
//    // results array
//     const r = [];   

//     //recursive function takes in an arr a start which will be 1
//     // and a space represented by k or 4
//     const func = (arr, start, k) => {
//         // if k==== 0
//         // 
//       if (k === 0) {
//           //copy the array 
          
//         r.push(arr.slice());
//         return;
//       }
//       for (let i = start; i <= n - k + 1; i++) {
//         arr.push(i);
//         func(arr, i + 1, k - 1);
//         arr.pop();
//       }
//     }
//     func([], 1, k);
//     return r;
//   };
//   combine(4,3)



//   // Subsets,Permutations,and Combination sums;

//   //built ints
//   var subsets1 = function(nums) {
//     return nums.reduce((sets, value) => {
//         return sets.concat(sets.map(set => {
//             return [value, ...set];
//         }));
//     }, [[]])
// };



// var subsets2 = a => a.reduce((s, l) => s.concat(s.map(t => t.concat(l))), [[]]);
// var subsets3 = function(nums) {
//   if (nums.length === 0)
//       return [];
      
//   var len = nums.length,
//       count = Math.pow(2, len),
//       result = [];
      
//   for (var i = 0; i < count; i++) {
//       // to binary string
//       var str = i.toString(2);
      
//       // get one subset from binary string
//       var subset = [];
//       // iterate the string from back to front since our binary string is
//       // e.g.: "11" instead of "011" when i = 3 
//       for (var k = str.length - 1; k >= 0; k--) {
//           if (str[k] == '1')
//               subset.unshift(nums[len - str.length  + k]);
//       }
      
//       result.push(subset);
//   }
  
//   return result;
// };




//standard backtrack
  function subsets(nums) {
    const list = []
    nums.sort((a, b) => a - b)
    backtrack(list, [], nums, 0)
    return list

    function backtrack(list, tempList, nums, start){
      list.push(tempList.slice())
      for(let i=start; i < nums.length; i++){
        tempList.push(nums[i]);
        backtrack(list, tempList, nums, i + 1)
        tempList.pop()

      }

    }

  }

  subsets([1,2,3]) /*?*/




function subsetsWithDup(nums){
let list = []
nums.sort()
backtrack(list, [], nums, 0);
return list


function backtrack(list, temp, nums, start) {
  list.push(temp.slice())
  for (let i = start; i < nums.length; i++) {

    
    if (i > start && nums[i] === nums[i - 1]) continue; // skip duplicates
    temp.push(nums[i]);
    backtrack(list, temp, nums, i + 1)
    temp.pop()
  }


}

}


subsetsWithDup([1,2,3,4,5,6]) /*?*/

function permutations(nums) {
  list = []
  // nums.sort() // not nesseary
  backtrack(list, [], nums)
  return list;

  function backtrack(list, temp, nums) {
    if (temp.length === nums.length) {
      list.push(temp.slice())
    } else {
      for (let i = 0;i< nums.length; i++) {
        if (temp.includes(nums[i])) continue;
        temp.push(nums[i])
        backtrack(list, temp, nums);
        temp.pop()
      }
    }
  }
}

permutations([1,2,3]) /*?*/




// unique permutations usinga /*?*/
var permuteUniqueTree = function(nums) {
  const numsMap = {};
  nums.forEach(n=>numsMap[n]=(numsMap[n]||0) + 1);
  const tree = {};
  buildTree(numsMap, tree);
  const result = [];
  printTree(tree,result,[],nums.length);
  return result;
};

var buildTree = (numsMap, tree)=>{

  for(let value in numsMap){
      if(numsMap[value] <= 0)continue;
      tree[value] = {};
      numsMap[value]--;
      buildTree(numsMap,tree[value]);
      numsMap[value]++

  }

}

var printTree = (tree, result, temp, l)=>{
  if(temp.length === l){
      result.push(temp.concat([]));
      return;
  }
  for(let k in tree){
      temp.push(k|0);
      printTree(tree[k], result, temp, l);
      temp.pop();
  }
}
permuteUniqueTree([1,1,2]) /*?*/

//unique permutations
function permutationsII(nums){
let list = []
let unique = {}
nums.sort((a, b) => a - b)
backtrack(list, [], nums, {})

return list;


function backtrack(list, temp, nums, used){
  
  if(temp.length === nums.length){
  list.push(temp.slice())
   } else {
    for(let i = 0; i < nums.length; i++){
      if(used[i])continue;
      if( i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;
      temp.push(nums[i])
      used[i]=true;
      backtrack(list, temp, nums, used);
      temp.pop();
      used[i]=false
      }
    }
  }
}

permutationsII([1,1,2]) /*?*/


function combinationSum(candidates, target) {
  let list = []

  backtrack(list, [], candidates, target, 0)
  return list

  function backtrack(list, tempList, nums, remain, start) {
    if (remain < 0) return;
    if (remain === 0){ 
      list.push(tempList.slice())
      return        
    }
      for (let i = start; i < nums.length; i++) {
        i
        tempList
        tempList.push(nums[i])
        backtrack(list, tempList, nums, remain - nums[i], i) // not i+1 because we reuse the same element
        tempList.pop()
      }
    }
  }

combinationSum([2,3,6,7],7) /*?*/


function combinationSumsNonReusable(nums,tar){
let list=[]
let count={}
nums.sort((a,b)=> a - b)
nums.forEach(num => count[num] = (count[num] || 0) + 1)
let orginals= Object.assign({},count)
backtrack(list, [], nums, tar, 0)
  return list
function backtrack(list, tempList, nums, remain, start) {
  if (remain < 0) return
  if (remain === 0) {
      list.push(tempList.slice())
      return
  }
  for (let i = start; i < nums.length; i++) {  
      if(i > start && nums[i] === nums[i-1]) continue; 
      tempList.push(nums[i])
      backtrack(list, tempList, nums, remain - nums[i], i + 1)
      tempList.pop()
  }
}
}


combinationSumsNonReusable([2,3,6,1,7],7) /*?*/





function permute(arr){
  let result = []
  backtrack(arr)
  function backtrack(list, start = 0){
  if(start === list.length){
   result.push(list.slice())
    return;
  }
  
  for(let i = start; i < list.length; i++){
    list[start] = [list[i], list[i] = list[start]][0]
    backtrack(list, start + 1)
    list[start] = [list[i], list[i] = list[start]][0]
  }
  }
  return result; 
  }
  
  
  permute([1,2,3]) /*?*/