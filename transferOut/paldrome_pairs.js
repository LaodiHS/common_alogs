let words= ["abcd","dcba","lls","s","sssll"]

let pmu=[]

function uniquePlidrome(words){



let list = [...permu(words)]


list.forEach(word=>{

if(word.split('').reverse().join()===word){


word



}

})




}


function *permu(ar,l=ar.length){
if(ar.length<=0)yield ar.slice();
else
    for(let i=0; i<l;i++){
        yield *permu(ar, l-1)
        const j= l%2?0:i;
        pmu.push(ar[j].concat(ar[l-1]))

    }



} 

[...permu(words)]

    pmu 