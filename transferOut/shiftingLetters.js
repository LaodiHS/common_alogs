// shifting Letters



function shiftingLetters(s, shifts){

 let i = shifts.length;
 let carry = 0;
 while(i--){  
     let a = shifts[i-1]
     let b = shifts[i]


b
a



if(s[i-1] === s[i]){
    
    carry = shifts[i]; 
        //shifts[i] = String.fromCharCode(s[i].charCodeAt() + (shifts[i] % 26) ); 
         continue;
     
     
        }
     shifts[i] += carry; 
     carry = shifts[i]; 
     shifts[i] = String.fromCharCode(s[i].charCodeAt() + (shifts[i] % 26) ); 
     
    }shifts
 return shifts.join('')

}


shiftingLetters('ruu',[26,9,17])/*?*/

'u'.charCodeAt() + 'u'.charCodeAt()  /*?*/


let num = 234 %26
num