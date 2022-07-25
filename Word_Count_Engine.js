

function wordCountEngine(document) {
    str=document.trim().split(' ').map(word=> word.toLowerCase().trim().split('')
    .filter(letter=>'a'.charCodeAt() <= letter.charCodeAt() && letter.charCodeAt()<= 'z'.charCodeAt() )
    .join('') ) 
    const counts = {}
    const wordCounts = str.reduce((acc,val)=>(acc[val]=(acc[val]||0 )+1,acc ), {})
    let arrayWordCounts=[]
    for(let key in wordCounts)arrayWordCounts.push([key, wordCounts[key]])
     arrayWordCounts= arrayWordCounts.map((v,i) =>( {idx:i,val:v}) )
    return arrayWordCounts.sort((a,b)=>{
      if( b.val[1] <a.val[1] )return -1
      if( b.val[1]>a.val[1])return 1
     else return a.idx- b.idx     
    }).map(x=>[x.val[0],x.val[1].toString()])
    }

     wordCountEngine(" Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ")
    

    function decrypt(word) {
        word = word.split('').map(l => l.charCodeAt())
        let uncrypt = [word.shift() - 1]
        let sum = uncrypt[0]
        for (let previous of uncrypt) {
            if (!word.length) break;
            let letter = word.shift()
            letter -= sum
            while (letter < 'a'.charCodeAt())letter += 26;
            sum += --letter
            uncrypt.push(letter)
        }
        return uncrypt.map(x => String.fromCharCode(x)).join('')
    }
      decrypt('dnotq') /*?*/

      
      function decrypt2( word ) 
{
    
    word=word.split('').map(x=>x.charCodeAt())

  let sum = 0;
  let res = word;

  for(let i = 0; i< word.length; i++){
    let temp = res[i];
 
    while(temp<98){
      temp+=26;
    }

  
    temp--;
    res[i] = temp;

    sum += res[i];
    sum
  }
  res
  return res.map(x=>String.fromCharCode(x));
}

decrypt2('dnotq') /*?*/



function root(x, n) {
 
    
  
  for(let i= 0;i< x ;++i){
          
    if(x===Math.pow(n,i) ){
      return i
    }
    
    
  }  
  
    
    
  }


  root(9,2) /*?*/