//consider the sequence 1,3,4,7,11,18,29.... in which each term is the sum of the 
// two previous terms after the first two terms. How many of the first 100
// terms of this equence are multiples of 5


// push n 1
// last val n  


function findMultiplesOfFive(){
// sequance
const sequance = [1,3]

            

let pattern  = n => {

if(!Number.isSafeInteger(n) || sequance.length>100)return 
 sequance.push( sequance[sequance.length - 2] + sequance[sequance.length-1])   
 pattern(sequance[sequance.length - 2] + sequance[sequance.length - 1] )
}
pattern(3)

// find pattern
const remainders = []
sequance.forEach( val => {

    remainders.push(val % 5)

})
remainders

// add one more than a multiple of five 3 more than a multiple of five ... infinite pattern 
// lets check the pattern  
const oneMoreThanAMultiple = []

function checkPattern(list ){
    list
let lo = 0 
let hi = 1
let third = hi + 1
let third_val = list[third]
while(list[third]){

let first_val = list[lo]
let second_val = list[hi]


if(third_val > 5 ){
    third_val -= 5
}
first_val
second_val 
if((first_val + second_val) === third_val){
    second_val
    first_val
    third_val
;[].push.apply(oneMoreThanAMultiple,[first_val, second_val, third_val])
} 
third++
lo++
hi++

} 





}


checkPattern(remainders)

oneMoreThanAMultiple 
oneMoreThanAMultiple

console.log(oneMoreThanAMultiple.length) 


console.log(sequance.length)
 return sequance
 
 



}

findMultiplesOfFive() /*?*/







