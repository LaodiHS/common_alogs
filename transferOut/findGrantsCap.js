
function findGrantsCap(grantsArray, newBudget) {
    let sort={}, sorted=[];
    grantsArray.forEach(val=>sort[val]=val)
    for(let val in sort)sorted.push(val);
        grantsArray=sorted
        let avg =newBudget/ grantsArray.length
        let len = 1
        for(let i=0; i<grantsArray.length;i++){
          let val =grantsArray[i]
          if(val<avg){
           let surplus =avg-val
               avg += (surplus/(grantsArray.length - len))   
               len++ 
          }
    }
   //fuck you
    return avg%1!==0?+parseFloat(avg).toFixed(1):avg
  }

  findGrantsCap([2,100,50,120,167], 400) /*?*/
  findGrantsCap([2,4,6], 3) /*?*/
  
findGrantsCap([210,200,150,193,130,110,209,342,117], 1530) /*?*/







function indexEqualsValueSearch(arr) {
    // your code goes here
    /**
    value which matches the index
    if such value exists rturn value/index
    if no value index exists then return -1
    for loop over values check if index equals the values
   if such value exists return value continue search
    
    **/
    
    let index = Math.floor(arr.length / 2)
     let start = 0
     let end = arr.length
    let count=0
    while (arr[index] && index >= start) {
        let val = arr[index]
 
      if (arr[index] === index) return arr[index];
        
        if ( index < val ) {
            start = index
            index = Math.floor((end - index) / 2)
           
         if(++count>5)break;
            continue;
        }
       if (index <arr[index]  ) {
            end = index
            index = Math.floor(index / 2)
     
      
            if(++count>5)break;
            continue;
        }
        if(++count>5)break;
    }
  
    return -1
    }
  indexEqualsValueSearch( [-8,0,1,3,5]) /*?*/