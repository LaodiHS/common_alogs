// var checkValidString = function(s) {
//     let star = [];
//     let left = [];
//     for (let i = 0; i < s.length; i++){
//         if (s[i] === '*'){
//             star.push(i);
//         } else if (s[i] === '('){
//             left.push(i);
//             left
//         } else {
//             if (star.length === 0 && left.length === 0){  
//                 return false;
//             }
//             if (left.length !== 0){
//                 left.pop();
//             } else {
//                 star.pop();
//             }
//         }
//     }
//     while (left.length !== 0 && star.length !== 0){
//         left
//         star
//         if (left[left.length - 1] > star[star.length - 1]){ 
//             return false;
//         }
//         left.pop();
//         star.pop();
//     }
//     return left.length === 0 ? true : false;
// }

var checkValidString = function (s) {
    let low = 0,
        high = 0;
    for (let i = 0; i < s.length; i++) {
        s[i]
        if (s[i] === '(') low++, high++;
        else if (s[i] === "*") low--, high++;
        else {
            low--
            if (--high < 0)
                break;
        }
        if (low < 0) low = 0;
    }
    return low === 0
}






checkValidString("(*()") /*?*/

