var topKFrequent = function(words, k) {
    let count=[];
    words.forEach(word=>{
        if(count[word])count[word].push(word)
        if(!count[word])count[word]=[word]       
    })
    let len=[]
        for(let word in count){
            len.push(count[word])
        }
    len.sort((a,b)=> {
        if(a.length===b.length)return a[0].localeCompare(b[0])
        if(a.length<b.length)return 1;
        if(a.length>b.length)return -1;
    })
    return len.map(x=>x[0]).slice(0,k)
};