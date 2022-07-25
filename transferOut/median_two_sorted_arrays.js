

// median of two sorted Arrays 

function findMedian(a_vector, b_vector){
// we are going to get the length of the combined vectros so that we have a median 
// we will need the median to do an early exit so that our answer runs in O(logMin(n,m))
let length = a_vector.length + b_vector.length
// we are going to get our median by using the shift operator to divide by two as that will throw out any remainder 
// as all bit operations are 32bit operations 
let median = length >> 1
// we are going to need both the index's and values of both vectors since this will make it easy to traverse both values in parallel  
// the positions
let a_pos = 0;
let b_pos = 0;
// the values
let a_val = a_vector[0]
let b_val = b_vector[0] 

// we are not going to need account for our total length of our array being even. Because when it's even we need to divide the 
// tow middle values. 
// so we will need a current and last values as we traverse these two lists
// we know that when the array is even the current and the last will be the median value and the value imdeidanely to the right of it
// we can keep track of these two values by using two varables, a current and a last. 
let current;
let last;

// we are going to use a do while loop as that will make the logic more readable
do{
// in our do while loop we are going to immedieatly set our our last to current 
// since we will need to update current at every step of the iteration 
last = current; 
//  since we are only letersted in one or two values of both combined arrays. We will need to zig zag our traversal of the vector values
// walking a stitch of successive values
// we do this by first checking to see if the first a_val is less than the b_val or if the b_val is undefined 

if( a_val <= b_val || b_val === undefined ){
// when this case is true we update or current value to be our a_val
current = a_val
// we now need to update our a value and we can only update it when it's current postion is less than it's current vector index
// otherwise to can set it to undefined. and discard it 

a_val = a_pos < a_vector.length? a_vector[++a_pos] : undefined

}else{
// otherwise we know that b will be the next value in the succesive ordering since it will be the lesser value when a_val is not less than it;

current = b_val

b_val = b_pos < b_vector.length ?  b_vector[++b_pos] : undefined

}  

// the conitions we are going to use to break this while loop. We are going to check to see if our positions. Which represent elements we have 
// visited once added together are less than or equal to our median
// once that conitions is no longer true we are going to break of that conitions 
}while((a_pos + b_pos) <= median); 



// once we reach the median we will have the middle vale or the two values that will provide us the middle value
// inorder to make sure we check the length which we go from adding up both vectors and see if they are odd or even.  
// if even we know to return the value inbetween the last and the current
// if odd we know to return the middle value
return length % 2 ? current  :   (last + current)/2



}
  
findMedian([1,2],[3,4]) /*?*/


//O(log min(n,m))

function findMedianSortedArrays(long_vec, short_vec) {
  // identify the long and short vectors
 if(long_vec.length < short_vec.length) return findMedian(short_vec, long_vec);
  // assign the long vector length as the diamiter
  let diam = long_vec.length; // long array
  // assign the raidus as the shorter vector length
  let raid = short_vec.length; // short array
  // create a min starting at 0 and a max startig at the radius 
  // create a half varable which is the addtion of both vector lengths add an additional unit to the 
  // combined length and divide by 2 
  let min = 0, max = raid, half = (diam + raid + 1) / 2;
  // set a left max var and a right min var to undefined 
  let left_max, right_min
  // as long as the min starting at zero is less than or equal to the length of the 
  // the smaller vector length 
  while (min <= max) {
    // we want to establish a left_mid var
    let left_mid = (min + max) >> 1, 
    // we also want to establish a right_mid var 
    right_mid = Math.trunc((raid + diam) / 2 - left_mid);

  // here we want to establish a new mid and a new max when our conditions are being met
  // when our left_mid is less than our smaller vector length.
  // and the long_vector mid value is > than the short vec left mid
  // we make the left mid + 1 our new min 

  // else we check to see if the left_mid is > 0 and the shortVec mid value  is grater than the log_vec right_mid value
  // and if it is we move the max to the right

  if (left_mid < raid && long_vec[right_mid - 1] > short_vec[left_mid]) min = left_mid + 1;
  else if (left_mid > 0 && short_vec[left_mid - 1] > long_vec[right_mid]) max = left_mid - 1;

    else {

      // however if none of the top conditions are met 
      // we check to see if the left mid has reached the end of the vector
      //    
      if (left_mid === raid) right_min = long_vec[right_mid]
      else if (right_mid === diam) right_min = short_vec[left_mid]
      else right_min = Math.min(short_vec[left_mid], long_vec[right_mid])

      if ((diam + raid) % 2) return right_min;

      if (left_mid === 0) left_max = long_vec[right_mid - 1]
      else if (right_mid === 0) left_max = short_vec[left_mid - 1]
      else left_max = Math.max(short_vec[left_mid - 1], long_vec[right_mid - 1]);

      return (right_min + left_max) / 2

    }
  }

  return 0;

}



findMedianSortedArrays([1,3],[2]) /*?*/















// we knew that our number follows a pattern  one-> 19teen are all uniqe
// we know that our tens follow also a unique set of pattern 20 30 40 50 60 70 80 90 100
// we know tht hundreds 100 also follow a pattern but that pattern is a combination of the one's and the word + hundred 
// we know that the 
// var numberToWords = function(num) {
//   const to19 = `One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen`.split(' ')
//    , tens = `Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety`.split(' ')
//    , toBil = `Thousand Million Billion`.split(' ')
//    num
//    let words= word(num)
//    words = words.split(/\s+/).join(' ')
//    return words ? words.trim() : 'Zero'
//    function word(n) {
       
//        if (n < 20) return to19.slice(n - 1, n)[0] || ''
      
//        if (n < 100) return tens[Math.trunc(n / 10) - 2] +' '+ word(n % 10);
//        if (n < 1000) return to19[Math.trunc(n / 100) - 1] + ' Hundred ' + word(n % 100)
//        for (let i = 0, p = 1; i < toBil.length; p++, i++) {
//            if (n < 1000 ** (p + 1)) {
//                return word(n / 1000 ** p)+ ' '+toBil[i]  +' '+ word(n % 1000 ** p)
//            }
//        }
//    }
// }

// numberToWords('1234567891') /*?*/




function numberToWords(num){
  const basic = `One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen`.split(' ')
   , tens = `Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety`.split(' ')
   , toBil = `Thousand Million Billion`.split(' ')

count = 0
let words = word(num)
words 
// check if the number is less than 20 to check for 19 
// check if the number is less than a 100 to check if in the 10
// check if the number is less than a 1000 to check if in the 1000
// check the bil to see if it is in the thou mil or bill since these used like prefixes


function word(n){

if(count++>5)return n;
n
  if(n < 20) return basic[n+1]    ;// do here
if(n < 100) return tens[Math.trunc(n/100)] + word(Math.trunc(n / 10) ) ; // do here
if(n < 1000)return  word(~~(n / 1000) ) + '' + 'Hundred'  +' '+  word(~~(n/100))   ;
// for the billions we can walk the billion array
// and check if anyone of these values apply
// we know that a million is just a multiple of a thousand 
// and we know that billion is also a multiple of a thousand 

for(let i = 0, exp = 1; i < toBil.length; exp++, i++ ){
// we check if the the value is one biger than our value because we will know that the word that it matches will be one less than that

           if( n < 1000**(exp + 1) ){
// we get the ones by recursing over the ones postions by dividing by billions
             return word(~~(n/1000**exp)) + ' ' + toBil[i] + ' ' + word(n % 1000**exp)

           }

}
}





}






// let root ={"val":1,"right":{"val":3,"right":null,"left":null},"left":{"val":2,"right":null,"left":null}};
let root= {"val":-10,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}}
root = {val:1, left:null, right:null}
maxPathSum(root) /*?*/


function maxPathSum(root) {
    
     
  let max = -Infinity
  traverse(root)
  return max
  
function traverse(node){
if(!node)return null
let left = Math.max(0, traverse(node.left))
let right = Math.max(0, traverse(node.right))

  max=Math.max(max,  left + right + node.val)
  return Math.max(left , right) + node.val
          
  }
}





function findMedianSortedArrays(long_vec, short_vec) {
  // identify the long and short vectors
  [long_vec, short_vec] = long_vec.length < short_vec.length ? [short_vec, long_vec] : [long_vec, short_vec];
  // assign the long vector length as the diamiter
  let diam = long_vec.length; // long array
  // assign the raidus as the shorter vector length
  let raid = short_vec.length; // short array
  // create a min starting at 0 and a max startig at the radius 
  // create a half varable which is the addtion of both vector lengths add an additional unit to the 
  // combined length and divide by 2 
  let min = 0, max = raid, half = (diam + raid + 1) >> 1;
  // set a left max var and a right min var to undefined 
  let left_max, right_min
  // as long as the min starting at zero is less than or equal to the length of the 
  // the smaller vector length 
  while (min <= max) {
    // we want to establish a left_mid var
    let left_mid = (min + max) >> 1, 
    // we also want to establish a right_mid var 
    right_mid = ((raid + diam)  >> 1) - left_mid;

  // here we want to establish a new mid and a new max when our conditions are being met
  // when our left_mid is less than our smaller vector length.
  // and the long_vector mid value is > than the short vec left mid
  // we make the left mid + 1 our new min 

  // else we check to see if the left_mid is > 0 and the shortVec mid value  is grater than the log_vec right_mid value
  // and if it is we move the max to the right

  if (left_mid < raid && long_vec[right_mid - 1] > short_vec[left_mid]) min = left_mid + 1;
  else if (left_mid > 0 && short_vec[left_mid - 1] > long_vec[right_mid]) max = left_mid - 1;

    else {

      // however if none of the top conditions are met 
      // we check to see if the left mid has reached the end of the vector
      //    
      if (left_mid === raid) right_min = long_vec[right_mid]
      else if (right_mid === diam) right_min = short_vec[left_mid]
      else right_min = Math.min(short_vec[left_mid], long_vec[right_mid])

      if ((diam + raid) % 2) return right_min;

      if (left_mid === 0) left_max = long_vec[right_mid - 1]
      else if (right_mid === 0) left_max = short_vec[left_mid - 1]
      else left_max = Math.max(short_vec[left_mid - 1], long_vec[right_mid - 1]);

      return (right_min + left_max) / 2

    }
  }

  return 0;

}









function findMedianSortedArrays(long_vec, short_vec) {

  [long_vec, short_vec] = long_vec.length < short_vec.length ? [short_vec, long_vec] : [long_vec, short_vec];

  let diam = long_vec.length; // long array

  let raid = short_vec.length; // short array

  let min = 0, max = raid, half = (diam + raid + 1) >> 1;

  let left_max, right_min
  
  while (min <= max) {

    let left_mid = (min + max) >> 1; 
  
    let right_mid = ((raid + diam)  >> 1) - left_mid;


  if (left_mid < raid && long_vec[right_mid - 1] > short_vec[left_mid]) min = left_mid + 1;
  else if (left_mid > 0 && short_vec[left_mid - 1] > long_vec[right_mid]) max = left_mid - 1;

    else {

  
      if (left_mid === raid) right_min = long_vec[right_mid];
      else if (right_mid === diam) right_min = short_vec[left_mid];
      else right_min = Math.min(short_vec[left_mid], long_vec[right_mid]);

      if ((diam + raid) % 2) return right_min;

      if (left_mid === 0) left_max = long_vec[right_mid - 1]
      else if (right_mid === 0) left_max = short_vec[left_mid - 1]
      else left_max = Math.max(short_vec[left_mid - 1], long_vec[right_mid - 1]);

      return (right_min + left_max) / 2

    }
  }

  return 0;

}




// function findMedianSortedArrays(nums1, nums2) {
// if(nums1.length < nums2.length) return findMedianSortedArrays(nums2, nums1);

//   let m = nums1.length, n = nums2.length;
//   let lo = 0, hi = n;

//   let left_max, right_min;

//   while (lo <= hi) {
//     let left_mid = (lo + hi) >> 1, right_mid = ((n + m)  >> 1) - left_mid;

//   if (left_mid < n && nums1[right_mid - 1] > nums2[left_mid]) lo = left_mid + 1;
//   else if (left_mid > 0 && nums2[left_mid - 1] > nums1[right_mid]) hi = left_mid ;

//     else {

//       if (left_mid === n) right_min = nums1[right_mid]
//       else if (right_mid === m) right_min = nums2[left_mid]
//       else right_min = Math.min(nums2[left_mid], nums1[right_mid])

//       if ((m + n) % 2) return right_min;

//       if (left_mid === 0) left_max = nums1[right_mid - 1]
//       else if (right_mid === 0) left_max = nums2[left_mid - 1]
//       else left_max = Math.max(nums2[left_mid - 1], nums1[right_mid - 1]);

//       return (right_min + left_max) / 2

//     }
//   }

//   return 0;

// }







// findMedianSortedArrays([1,2],[3,4]) /*?*/







function generalizedGCD(n, arr){
    // sort from lo to 
    //  as we expand to the right we check 
    // the next highest value if the first check is successfull
    // if not we double back to our last most successfull value
    // sorting will require O(nlogn) which will probably be our time complexity
    // 



    //euclids algorithim 
// take the divisor and recursivly take the remainder 
let result = arr[0]

for(let i = 1 ; i < n; i++){
  result = gcd(arr[i], result); 
  return  result; 

}





function gcd(a,b){
  if(a === 0)return b;
  return gcd(b%a,a) 
}





}


generalizedGCD(5,[6,2,12,50,21]) /*?*/




function GCDOfArrayOfNumbers(n , arr){

  let i = 0; 
  let result = arr[0]

let len = arr.length 

let lo = 0;
let hi = len - 1;

  function gcd(lo, hi, arr){
if(lo !== hi) return lo;


    let mid = len >> 1; 


  }


return result; 


}

GCDOfArrayOfNumbers(5,[3,5]) /*?*/