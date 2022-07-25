var lengthOfLongestSubstring = function(s) {
    let dict =[], maxLen = 0, start = -1;
    for(let i = 0; i < s.length; i++){

        if(dict[s[i]] > start){
            start = dict[s[i]];
        }
        dict[s[i]] = i;
    
        maxLen = Math.max(maxLen, i - start );
    }
    return maxLen; 
};




let a = lengthOfLongestSubstring('cabcabcbb');

a