// function deletionDistance(str1, str2){
//     if (str1.length < str2.length)
//         tmpStr = str1
//         str1 = str2
//         str2 = tmpStr

//     str1Len = str1.length
//     str2Len = str2.length
//     prevMemo = new Array(str2Len  + 1)
//     currMemo = new Array(str2Len  + 1)

//     for( i= 0;i< str1Len.length;i++){
//         for (let j=0; str2Len.length,j++){
//             if (i == 0){
//                 currMemo[j] = j
//             }else if (j == 0):
//                 currMemo[j] = i
//             else if (str1[i-1] == str2[j-1]):
//                 currMemo[j] = prevMemo[j-1]
//             else:
//                 currMemo[j] = 1 + min(prevMemo[j], currMemo[j-1])
//         }
//         prevMemo = currMemo
//         currMemo = new Array(str2Len + 1);  
//     }      
//     return prevMemo[str2Len]
// }

let str1=[['h',0],['e',1],['a',2],['t',3]]; 
let str2=[['h',0],['i',1],['t',2]];

function findPairs(nums,k){

const map = new Map()
let result = []

for(let i of nums)map.set(i,(map.get(i)||0)+1 ) 
for(let key  of map.keys() ){
    if(k===0){
    if(map.get(key)>=2){
    
    }
    }else{
        if(map.has(key+k) ){
            result.push([key+k,key])
    
        }
    }
}
result

}


findPairs([0, -1, -2, 2, 1],1)