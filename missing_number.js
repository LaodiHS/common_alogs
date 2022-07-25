
function findMissing(){


let ar= [3,4,6,7,8,9]



let b= [],c=0

for(let i =0; i< ar.length+1;i++){
    b[ar[i]]=(b[ar[i]]|0)+1
    
    
    if(b[ar[i]]){
        c=true

    }


}
return b
}

findMissing()/*?*/





