import { log } from "util";

var minSwapsCouples = function(row) {
    let res= 0, N=row.length;
   const pos= {}
   for(let i=0; i<N; i++) pos[row[i]]=i;
    
   for(let i=1; i< N; i+=2){
       while((row[i]^1) !== row[i-1]){
           let idx= pos[row[i]^1]^1;
           row[i] = [row[idx], row[idx]=row[i]][0];
           res++;    
       }
   }
   return res
}

var minSwapsCouples = function(row) {
    if (row === null || row.length % 2 !== 0) {
        return -1;
    }
    const n = Math.trunc(row.length / 2);
    const groups = Array(n);
    for (let i = 0; i < n; i++) groups[i] = i;
    
    let swaps = 0;
    for (let i = 0, m = 2 * n; i < m; i += 2) {
        const g1 = findGroup(Math.trunc(row[i] / 2));
        const g2 = findGroup(Math.trunc(row[i + 1] / 2));
        if (g1 !== g2) {
            swaps++;
            if (g1 > g2) {
                groups[g2] = g1;
            } else {
                groups[g1] = g2;
            }
        }
    }
    return swaps;
    function findGroup(num) {
        while (num !== groups[num]) {
            num = groups[groups[num]];
        }
        return num;
    }
};


minSwapsCouples([0, 2, 1, 3]) /*?*/

minSwapsCouples([3, 2, 0, 1]) /*?*/