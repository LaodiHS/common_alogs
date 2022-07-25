
//find all pairs 

function findPairs(nums,k){

    const map = new Map()
    let result = []
    
    for(let i of nums)map.set(i,(map.get(i)||0)+1 ) 
    for(let key  of map.keys() ){
        if(k===0){
        if(map.get(key)>=2){
        
        }
        }else{
            if(map.has(key+k) ){
                result.push([key+k,key])
        
            }
        }
    }
    result
    
    }