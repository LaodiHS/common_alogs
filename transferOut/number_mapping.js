//Given a list of valid words and a mapping of numbers to letters - something like 1 -> ABC, 2 ->DEF -
   // how would I write a function that returns a list of strings that are valid.

var dictionary = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' },
    number = '345';



let result = [...number] 
    .map(n => [...dictionary[n]])
    .reduce((a, b) =>  a.reduce((r, v) => r.concat(b.map(w => v + w)), []))

 

result /*?*/
 



