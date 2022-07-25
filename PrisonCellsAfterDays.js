var prisonAfterNDays = function(c, N) {

    let f_c = Array(c.length).fill(0), next_c = Array(c.length).fill(0)
    for(let cycle = 0; N-- > 0;  c = next_c.slice(), cycle++){
        for(let i = 1 ; i < c.length - 1; i++) next_c[i] = + (c[i - 1] === c[i + 1])
        if(cycle === 0) f_c = next_c.slice()
        else if(next_c.toString() === f_c.toString()) N %= cycle;
    }
    return c; 
};

prisonAfterNDays([0,1,0,1,1,0,0,1], 7) /*?*/