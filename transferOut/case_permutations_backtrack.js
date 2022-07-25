//100ms 19.4mb
var letterCasePermutation = function (S) {
    let s = S.split('')
    const list = []
    backtrack(s, 0, list)

    function backtrack(s, i, ans) {
        if (i === s.length) {
            ans.push(s.slice().join(''))
            return;
        }
        // save initial value
        let c = s[i]
        s[i] = s[i] === s[i].toUpperCase() ? s[i].toLowerCase() : s[i].toUpperCase()
        // path1: toggle lower/upper case
        backtrack(s, i + 1, ans)
        // path2: reset back(NOT go to this path if c is digit)
        if (!(+c >= 0)) {
            s[i] = c
  return  backtrack(s, i + 1, ans)
        }
    }

    return list;
};

letterCasePermutation("a1b2") /*?*/



// 80 ms consise buetyfull code 
var letterCasePermutation = function(S) {
    const chars = S.split('').reverse();
    
    let result = new Set(['']);
    
    while (chars.length) {
      const newResult = new Set();
      const next = chars.pop();
      result.forEach(r => {
       
        newResult.add(r + next.toLowerCase())
        newResult.add(r + next.toUpperCase())
      });
      result = newResult;
    }
    
    return [...result];
  };

  letterCasePermutation("a1b2") /*?*/





















// 68ms 18.4mb
var result = [];
var letterCasePermutation = function(S) {
    result = [];
    if(S==""){return [""];}
    backtrack(0,"",S);
    return result;
};

function backtrack(i,str,S)
{
    let one = str + S[i].toLowerCase();
    let two = str + S[i].toUpperCase();
    if(i == S.length-1){
        if(one == two){
            result.push(one);
        }
        else{
            result.push(one);
            result.push(two);
        }
    }
    else
    {
        if(one == two)
        {
            backtrack(i+1,one,S);    
        }
        else
        {
            backtrack(i+1,one,S);    
            backtrack(i+1,two,S);    
        }
    }
}