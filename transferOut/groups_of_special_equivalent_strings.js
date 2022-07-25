
var numSpecialEquivGroups = function(A) {
    
    const result=[]
    const solution=[]

    for(let i of A)(result[i]=(result[i]||[]),result[i].push(i));
    for(let key in result){
    let rev=  key.split('').reverse().join('')
        if(result[rev] && rev.length>1){
           result[key].push(rev)
           delete result[rev]
        }
    }
    for(let key in result){
        solution.push(result[key])
    }
    return solution
};


numSpecialEquivGroups(["aa","bb","ab","ba"]) /*?*/