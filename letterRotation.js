

//combination lock suit case lock
let str = 'geeks', roll = [1, 2, 5];

function rollString(str, roll) {
    let strLen = str.length
    // set a roll for all letters in str
    let letterRotationCount = Array(strLen).fill(0)
    //indicate whether a letter has a roll.
    letterRotationCount

    roll.forEach((num) => {
        num
        letterRotationCount[num - 1] = (letterRotationCount[num - 1] | 0) + 1
    })
    letterRotationCount
    // walk the string counts from the begining in the letter location count array 
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



