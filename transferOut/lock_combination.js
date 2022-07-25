

let str = 'geeks', roll = [1, 2, 5];

function rollString(str, roll) {
    let strLen = str.length
    // set a roll for all letters in str
    let letterRotationCount = Array(strLen).fill(0)
    //indicate whether a letter has a roll.
    roll.forEach((num) => {
        letterRotationCount[num - 1] = (letterRotationCount[num - 1] | 0) + 1
    })
    letterRotationCount
    // walk the string counts from the beginning in the letter location count array 
    // add the counts to each letter. 
    for (let index = roll.length; index >= 0; index--) {
        letterRotationCount[index] += letterRotationCount[index + 1]
    }
    let letters = str.split('')
    //update the letters based on their letter location count 
    letterRotationCount.forEach((_, index) => {
        letters[index] = String.fromCharCode(letters[index] === 'z' ? letters[index] = 'a' : letters[index].charCodeAt(0) + letterRotationCount[index])
    })
  return  letters.join('')
}

rollString(str, roll) /*?*/





let arr= [2007,3,3,2007, 2,3000,5,7000]


let b= []


arr.forEach(x=>{
    b[x]=(b[x]|0)+1
})
b.forEach(x=>{

console.log(x)

})

b

var people = [{ birth: 1720, death: 1860 },{ birth: 1720, death: 1860 },{ birth:1803, death: 1809},{ birth: 1730, death: 1810 },{ birth: 1920, death: 1950 },{ birth: 1930, death: 1940 },{ birth: 1940, death: 1990 }, { birth: 1970, death: 2010 }];

var counts = people.reduce((a, v) => (a[v.birth] = (a[v.birth] | 0) + 1,  a[v.death] = (a[v.death] | 0) - 1, a), []);


                                      console.log(counts) /*?*/



var maxYear = 0, maxCount = 0, count = 0;
counts.forEach((c, y) => {
console.log(y)
    console.log(c)
//   count += c;
//   if (maxCount < count) {
//     maxCount = count;
//     maxYear = y;
//   }
});

console.log( maxYear, maxCount );
console.log( { ...counts } );


const x=  [1];x[10]=2


x.forEach(x=>{

    x})

