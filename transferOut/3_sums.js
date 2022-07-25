


function threeSum( num) {
    const res= []

    num.sort((a,b)=>a-b)

    for (let i = 0; i < num.length-2; i++) {
      
        if (i > 0 && num[i] === num[i-1]) continue;
        
            let lo = i+1, hi = num.length-1, sum = 0 - num[i];
       
            while (lo < hi) {
               
                if (num[lo] + num[hi] == sum) {
                    res.push([num[i], num[lo], num[hi]]);
                 do lo++; while (hi > lo && num[lo] === num[lo - 1]);
                 do hi--; while (hi > lo && num[hi] === num[hi + 1]);

                }else if (num[lo] + num[hi] < sum) lo++;
                else hi--;
           }
    }

    return res;
}
threeSum( [-1, 0, 1, 2, -1, -4]) /*?*/





