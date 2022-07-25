var numberToWords = function(num) {
    const to19 = `One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen`.split(' '),
        tens = `Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety`.split(' '),
        toBil = `Thousand Million Billion`.split(' ')
     let words= word(num)
     words = words.split(/\s+/).join(' ')
     return words?words.trim() : 'Zero'
     function word(n) {
         if (n < 20) return to19.slice(n - 1, n)[0]||''
         if (n < 100) return tens[Math.trunc(n / 10) - 2] +' '+ word(n % 10);
         if (n < 1000) return to19[Math.trunc(n / 100) - 1] + ' Hundred ' + word(n % 100)
         for (let i = 0, p = 1; i < toBil.length; p++, i++) {
             if (n < 1000 ** (p + 1)) {
                 return word(n / 1000 ** p)+ ' '+toBil[i]  +' '+ word(n % 1000 ** p)
             }
         }
     }
 }

 numberToWords(125) /*?*/



function numberToWord(num){
    let to19 = `One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen`.split(' ')
    let tens = `Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety`.split(' ')
    let toBil = `Thousand Million Billion`.split(' ')

}