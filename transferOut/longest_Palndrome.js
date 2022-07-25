

// walk the string
// assign the left side to the initial walk
// assign the right to walk no more than one away from the first value
// if both match expand the temp pointers

// and right to scan one away from the index
// if we encounter a condition where the left and the right chars are equal 
//  we are going to decremnt the left and expand the right while that condition remains true;
// if the right minus the left is larger than our previous value then we know that, that is our new max palidrome
// this approach works because when we capture the individual element as being a palandrome it will expand outward on every individual capture. 
// for example when we have a string 'bab', a is captured is it considered a palandrome and then the pointer will move to both the left and the right and if those match up we would have captured 
// a larger palandrome.
// exmaple 
//          'bab'
//           |
//           b
//          /\
//      null  a
//            'bab'
//              |
//              a
//             / \
//            b   b
function longestPalindrome(str) {
    let maxString = ""
    for (let leftScan = 0; leftScan < str.length; leftScan++) {
        for (let rightScan = 0; rightScan < 2; rightScan++) {
            let left = leftScan;
            let right = leftScan + rightScan;
                 while (str[left] && str[left] === str[right]){
                  if((right - left) >= maxString.length){ 
                    maxString = str.substring(left, right+1);
                  }

                  left--;
                  right++;
                 }
               
          
        }
    }
return maxString;
}

longestPalindrome('bab')/*?*/
for(let i = 0; i< 2; i++){
  i
}

var longestPalindrome2 = function(s) {
    var max = '';
    for (var i = 0; i < s.length; i++) {
      for (var j = 0; j < 2; j++) {
        var left = i;
        var right = i + j;
        let r = s[right]
        let l = s[left]

        while (s[left] && s[left] === s[right]) {
          left--;
          right++;
        }
    
        if ((right - left - 1) > max.length) {
          max = s.substring(left + 1, right);
        }
      }
    }
    return max;
  };

  
longestPalindrome2('bab') /*?*/


// cbbd














































