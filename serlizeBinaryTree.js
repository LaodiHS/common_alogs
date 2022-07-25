

// var findMedianSortedArrays = function (nums1, nums2) {
//     let ar = []
//     let len = nums1.length + nums2.length
//     let half;

//     if (len % 2 === 0) {
//         half = len / 2
//     } else {
//         half = Math.ceil(len / 2)
//     }










//     // const handler1 = {
//     //     construct(target, args) {
//     //      this.a=0
//     //      this.b=0
//     //       // expected output: "monster1 constructor called"
      
//     //       return new target(...args);
//     //     },
//     //     get(target, key){

//     //         if(a>=nums1.length || nums1[a]> nums2[b]) key=nums2[b++]
//     //         else key=nums1[a++]
//     //         a
//     //         b
//     //         return key 
//     //         }
//     //   };

// // let a= 0
// // let b= 0



// //  ar= new Proxy(ar, {
// //   construct(){
// // this.a=0
// // this.b=0
// //   },


// // get(target, key){
// // this /*?*/
// // if(this.a>=nums1.length || nums1[this.a]> nums2[this.b])key=nums2[this.b++]
// // else key=nums1[a++]
// // a
// // b
// // return key 
// // }

// //     })





//     for (let i = 0, r1 = 0, r2 = 0; i <= len; i++) {
//         if (r1 >= nums1.length || nums1[r1] > nums2[r2]) ar[i] = nums2[r2++]
//         else ar[i] = nums1[r1++]

//         if (!nums1[i] && nums1.length === r1 ) {

//              ar = ar.concat(nums2.slice(r2))
           
//             return median(ar, len, half)
//         }
//         if (!nums2[i] && nums2.length === r2) {
//             ar = ar.concat(nums1.slice(r1))
//             return median(ar, len, half)
//         }
//         if (half === i) {
//             return median(ar, len, half)
//         }
//     }
//     function median(arr, len) {
//         if (len % 2 === 0) {
//             let half = len / 2

//             return median = (arr[half - 1] + arr[half]) / 2
//         } else {
//             let half = Math.ceil(len / 2)
//             return median = arr[half - 1]
//         }
//     }
// }
// findMedianSortedArrays([1,4],[2,3]) /*? */



// const BASIC = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
//                'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
// const TWENTIES = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
// const HUNDREDS = ['Hundred'];
// const THOUSANDS = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

// var numberToWords = function(num) {
//     if (num === 0) { return BASIC[0]; }
    
//     let ans = '';
//     for (let i = THOUSANDS.length - 1; i >= 0; i -= 1) {
//         const divider = 1000**i;
//         if (num < divider) {
//             continue;
//         }
//         ans += threePack(Math.floor(num / divider));
//         ans += THOUSANDS[i] === '' ? '' : THOUSANDS[i] + ' ';
//         num %= divider;
//     }
    
//     return ans.substring(0, ans.length - 1);
// };

// // num MUST BE less than 1000
// function threePack(num) {
//     let res = '';
//     if (num >= 100) {
//         res += BASIC[Math.floor(num / 100)] + ' ';
//         res += HUNDREDS[0] + ' ';
//         num %= 100;
//     }
//     if (num >= 20) {
//         res += TWENTIES[Math.floor(num / 10)] + ' ';
//         num %= 10;
//     }
//     if (num > 0) {
//         res += BASIC[num] + ' ';
//     }
//     return res;
// }


// console.log(numberToWords(123))











// var search = function (nums, target) {
//     let lo = 0, hi = nums.length ;
// let ar=[]
// while(lo<hi){
// mid= Math.floor((lo+hi)/2)

// let num;
// let middleValue=nums[mid]
// let begining= nums[0]
// //if the mid is less than array begining and target is less than array begining
// // than the number is the mid point value
// if( (middleValue< begining ) === (target< begining)){
//     num = middleValue
// //if the target is less than the begining of the array and the middle value is not less than 
// // the begining of the array
// // than the number is negative
// }else if(target<begining){
// begining 
// num= Number.NEGATIVE_INFINITY

// // else then when neither the target is less than the begining 
// //and the mid is not less than the begining the number is postive
// }else{
// num = Number.POSITIVE_INFINITY;
// }
// ar.push(num)

// // if the number is less than the target then  lo 
// if(num<target){ 
    
//     lo= mid+1


// }
// else if(num>target){
   
  
//     hi=mid;

// }
// else{
//     ar 
//     return mid;
// }
// }
// ar 
// return -1
// };

// search([4,5,6,7,0,1,2],0) /*?*/

function findTarget(array, target) {
    let lo = 0,
      hi = array.length,
     
      limit;
    while (lo < hi) {
let  mid = Math.floor((hi - lo) / 2)

      if ((array[mid] < array[0]) === (target < array[0])) {
        limit = array[mid]
      } else if (target < array[0]) {
        limit = Number.NEGATIVE_INFINITY
      } else {
        limit = Number.POSITIVE_INFINITY
      }

      if (limit < target) {
        lo = mid + 1
  
      } else if (limit > target) {
        hi = mid
      } else {
        return mid
      }
      break;
    }
    return -1
  }
  
  
  console.log(findTarget([4, 5, 6, 7, 0, 1, 2], 0))



  var calculate = function(str) {
    str = '+' + str + '+';
    let total = 0;
    let term = 0;
    let n;
    let op;
    for (let ii = 0; ii < str.length;) {
      //in >> op
      while((op = str[ii++]) === ' ') {}
  
      if (op === '+' || op === '-') {
        total += term;
        //in >> term
        term = '';
        while((/[0-9\s]/).test(str[ii])) {
          term += str[ii++];
        }
        term = parseInt(term);
  
        term *= 44 - op.charCodeAt(0);
      } else {
        //in >> n
        n = '';
        while((/[0-9\s]/).test(str[ii])) {
          n += str[ii++];
        }
        n = parseInt(n);
  
        if (op === '*') {
          term *= n;
        } else {
          term /= n;
          term = Math.trunc(term);
        }
      }
    }
    return total;
  };


  console.log(calculate("3/4+2"))





  var smallestFactorization = function(a) {
    if(a<2)return a;
    var MAX_INT = 2147483647
    let res= 0, mul=1;
    for(let i=9; i>=2; i--){
        while(a %i===0){
             a /= i;
             mul
             res
               i
             res=mul * i + res;
             mul *= 10 ;
        }
        
        
    }
    return a < 2 && res <= MAX_INT ?res: 0;
};

smallestFactorization(18000000) /*?*/


let grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]

for(let matrix of grid){
  for(let col of matrix  ){
      if(col=== 1){   
      }   
  }
}