var shortestPalindrome = function(str) {
    str
// two anchors j and i to compare string from begining and end. 
   let s=0
    for(let e=str.length-1;e>=0;e--){
        //incrament j when the chars match
    if(str[e]===str[s]){
        str[e] /*?*/
        s+=1
        s
        }
    }
    //if the position of j and the string length match return the string. 
    if(s===str.length)return str;
    
    // we take the string as a suffix starting from j
    let suffix = str.substring(s)
    
    // we take that suffix reverse it and concatinate it to the recursive prefix ending at j appending it to the 
    //unreversed suffix.
    //cutt the string at it's ends and mirror the suffix around the center. 
    //sandwitch the non mirrable center between the mirror images of the suffix as a prefix and a suffix
    return suffix.split('').reverse().join('') + shortestPalindrome(str.substring(0,s)) + suffix
};


shortestPalindrome('abcd') /*?*/ 

var shortestPalindrome = function(s) {
    const l = s.length;
    if (!l) return "";
    
    let i = 0;
    for (var j = l - 1; j >= 0; j--) {
        if (s[i] === s[j])
            i++;
    }
    
    if (i === l)
      return s;
    
    let remain_rev = "";
    for (let j = l - 1; j >= i; --j) {
      remain_rev += s[j];
    }
    
    return remain_rev + shortestPalindrome(s.substr(0, i)) + s.substr(i);
  };