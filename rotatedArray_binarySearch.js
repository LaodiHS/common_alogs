var search = function(nums, target) {
    
    let lo = 0; 
    let hi = nums.length;

    while(lo < hi){
        const mid = (lo + hi) >> 1
        const section = nums[0] > nums[mid]
        const targetSection = nums[0] > target
        
        if(section === targetSection){
            if(nums[mid] > target) hi = mid;  
                else lo = mid + 1; 
    

        }else if(targetSection)lo = mid + 1;  
                else hi = mid; 
        
            if(target === nums[mid])return mid
    
        }
    
    return -1; 
};



search([4,5,6,7,1,2,3],3) /*?*/