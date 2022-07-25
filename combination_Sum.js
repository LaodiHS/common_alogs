var combinationSum = function(candidates, target) {
    
    let buffer= []
    let results=[]
    dfs(0,target)
        return results;
        
    function dfs(indx,target){
     if(target===0){
       results.push(buffer.slice())
       return 
       };
       // if the target is out of bound in the negative direction or if the index is out of bound in the postive direction 
       //  return to the previous values and remove the bad value from the buffer
       if(target < 0 || indx === candidates.length)return; 
            buffer.push(candidates[indx])
            // when the index position and target cancel out the array, the array is viable  
        dfs(indx,target-candidates[indx])
           //remove out of bound value
            buffer.pop()
        //set new index at the lower bound
       let n= dfs(indx+1, target)
        }
    };
    
    console.log(combinationSum([2,3,6,7],7))


