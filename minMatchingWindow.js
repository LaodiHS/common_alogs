function getShortestUniqueSubstring(str, vitamins) {

    // this is a problem where we need to find the min window of said array
    // we will most likely need to visit each item twice 
    // thing we will need are two pointers 
    // a worm object containing our key as letter and the number occurances they apprear in the pattern
    // we will need an anterior for our front pointer
    // and a posterior for the back end of our worm object

    // as the anterior of our worm moves forward it only eats the letters nesseary  to fill it's nutritional requirments
    // (those being the key values being eaten)
    // the state of our worm is the totoal number of letters. 
    // once we fill a nutritional requirment our energy state will get decremented toward zero. Once we reach zero
    // we will have enough engergy to more our posterior forward and in so doing we lose that initial engery we captured
    // we can keep track of the shortest distance keeping track of the shortest extention we had to make to grab all nesseary vitamins.
vitamins = vitamins.split('');
    let min = ''
    let vitaminWorm = vitamins.reduce((acc, vit) => (acc[vit] = (acc[vit] || 0) + 1, acc), {}) // linear

    let state = Object.keys(vitaminWorm).length //linear

    let anterior = -1
    let posterior = 0

    while (anterior < str.length) {
        if (state === 0) { // if the state of our worm is zero we know that we have enough energy to move our posterior forward
            if (min === '' || min.length > posterior + anterior + 1) min = str.slice(posterior, anterior + 1)
            // as we move our posterior forward we need to indicate that our tank is empty by one esential vitamin
            if (vitaminWorm[str[posterior]] !== undefined) vitaminWorm[str[posterior]]++
            if (vitaminWorm[str[posterior]] >= 0) state++
            posterior++
        } else { //else we are vitamin deficent and we need to move our anterior forword
            anterior++
            //     // we snif the vitamins and that vitamin is part of our nutritional requirment
            //     // we are going to collect it and indicate that our tank for that requirment is one less than it was before
            if (vitaminWorm[str[anterior]] !== undefined) vitaminWorm[str[anterior]]--
            // if our nutritional requirment for that vitamin is full our state also moves in that direction 
            if (vitaminWorm[str[anterior]] !== undefined && vitaminWorm[str[anterior]] === 0) state--
        }
    }




    return min

}



getShortestUniqueSubstring( "ADOBECODEBANC","ABC" )  /*?*/


// getShortestUniqueSubstring("xyyzyzyx", ['x', 'y', 'z']) /*?*/




// sliding problem 


// min window
function minWindow(string, match) {
    let left = 0;
    let right = -1;
    let minStr = '';
    let map = {};
    match.split('').forEach(chr => map[chr] = (map[chr] || 0) + 1);
    let count = Object.keys(map).length;
    while (right < string.length) {
        if (count === 0) {
            if (!minStr || right - left + 1 < minStr.length) minStr = string.slice(left, right + 1);
            if (map[string[left]] !== undefined) map[string[left]]++;
            if (map[string[left]] > 0) count++;
            left++;
        } else {
            right++;
            if (map[string[right]] !== undefined) map[string[right]]--;
            if (map[string[right]] === 0) count--;
        }
    }
    return minStr;
}

minWindow("xyyzyzyx", "xyz") /*?*/
minWindow( "ADOBECODEBANC","ABCC" )  /*?*/
// function minWindow(str, match) {
//     let map = {}, count = match.length;
//     match.split('').forEach(c => map[c] = (map[c] || 0) + 1);
//     let left = 0, right = 0;
//     let start = 0, end = 0;
//     let min = Infinity;
//     while (right < str.length) {
//         if (map[str[right++]]-- > 0) count--;  /* modify counter here */ 
//         while (count === 0) { 
//               /* update d here if finding minimum*/
//                 //increase begin to make it invalid/valid again
//             if (right - left < min) {    
             
//                 min = right - left
//                 start = left
//                 end = right
//             }
//             /*modify counter here*/
//             if (map[str[left++]]++ === 0) count++;
//         }
//      /* update d here if finding maximum*/
   
//     }
//  return min === Infinity ? "" : str.slice(start, end)
// }

// int findSubstring(string s){
//     vector<int> map(128,0);
//     int counter; // check whether the substring is valid
//     int begin=0, end=0; //two pointers, one point to tail and one  head
//     int d; //the length of substring

//     for() { /* initialize the hash map here */ }
 //// }
//     while(end<s.size()){

//         if(map[s[end++]]-- ?){  /* modify counter here */ }

//         while(/* counter condition */){ 

//              /* update d here if finding minimum*/

//             //increase begin to make it invalid/valid again

//             if(map[s[begin++]]++ ?){ /*modify counter here*/ }
//         }  

//         /* update d here if finding maximum*/
//     }
//     return d;
// }




