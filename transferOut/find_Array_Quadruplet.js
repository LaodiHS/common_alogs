function findArrayQuadruplet(arr, s) {
    // your code goes here
    // sort  i'll [1,2,3,4,5,6,7] untill totoal =20
  // as i count up the arr I an going to push into a seperate array those values that add up 
    // to the totoal 
   // there might be an edge case where the higher value will before a lowervalue
    
    
    const result = []
    let runningTotoal=0
//   arr.sort((a,b)=>a-b)
//     for(let i=0; i< arr.length;i++){
//       for(let j=i+1; j<arr.length;j++){
//        let [a,ain]=[arr[i],arr[i+1]]
//        let [b,bin]=[arr[j], arr[j-1]]
//         while(i+1<j-1){
//             if(a+ain+b+bin ===20){
//                 return [a,ain,b,bin]
//         }
//       }
//     }
//   }
}
  
  findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20)
  
//   function getShortestUniqueSubstring(arr, str) {
//   let counts= {}
//   const lenArray=[]
//   for(let i of arr)counts[i]=0
//   let keys= Object.keys(counts)
//   let right =0
//   let left= 0
 
//   while(right< str.length ){
    
//   let val= str[right++]
//       counts[val]++

//   if(keys.every(x=> counts[x] >= 1) ){
    
    
//     while(left<right){
//     lenArray.push(right-left)
//     let val= str[left++]
//     counts[val]--
  
//     }
//   }

    


//  }
 


getShortestUniqueSubstring(['x','y','z'],"xyyzyzyx")








