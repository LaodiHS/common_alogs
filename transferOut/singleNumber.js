var singleNumber = function(nums) {
    let zero = 0
    for(let num of nums){   
        zero^=num
    }
        return zero
        
    };
    var singleNumber = function(nums) {
    const find =[];
    for(let num of nums){ 
        find[num]=(find[num]|0)+1
    }
        for(let key in find){
            if(find[key]===1){
                return key
            }
        }   
    };