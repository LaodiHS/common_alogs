var multiply = function(num1, num2) {
 let m= num1.length, n= num2.length;
 let build = []
 
for(let i= m-1; i>=0;i--){
    for(let j=n-1;j>=0;j--){
    // multiply values
        let mul=   (+num1.charAt(i))*(+num2.charAt(j) )
// get first and second indexes in the iteration
     let second = i +j,first =i+j+1;
// add the multiplication result with the remainder if one exists
    let sum = mul+(!build[first]?0: build[first])
     // set the remainder on the second slot
    build[second]=(!build[second]?0:build[second]) + parseInt(sum/10)
    // set the base value on the first 
     build[first]=sum %10;
    }
}
if(build[0]===0){
build.shift()
}
build.join('') /*?*/
}

multiply("5","325")