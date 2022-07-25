function divide( dividend, divisor) {
    let result =  dividend * divisor**-1
    
    if (result > 0) {
        result = Math.floor(result)
    } else {
        result = Math.ceil(result)
    }
    
    if(result >> 0 !== result) return 2147483647
    return result
}

divide(2,1) /*?*/





