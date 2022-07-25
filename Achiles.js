
// // Euler’s Totient Function
// // Euler’s Totient function ?(n) for an input n is count of numbers in {1, 2, 3, …, n} that are relatively prime to n, i.e., the numbers whose GCD (Greatest Common Divisor) with n is 1.





//   // sort from lo to 
//     //  as we expand to the right we check 
//     // the next highest value if the first check is successfull
//     // if not we double back to our last most successfull value
//     // sorting will require O(nlogn) which will probably be our time complexity
//     // 
//     //euclids algorithim 
// // take the divisor and recursivly take the remainder 
// 500,864,1944,2000,2592,3456,5000,10125,10368,12348,12500,16875,19652,
//  19773,30375,31104,32000,33275,37044,40500,49392,50000,52488,55296,

//  61731,64827,67500,69984,78608,80000,81000,83349,84375,93312,108000


// function gcd(a, b) { 
//   return  a !== 0 ? gcd(b % a, a) : b; 
// } 
// function v(arr) {
// if(arr.find(x=> x===1))return 0
//     let r = arr[0]
//     for (let i = 1; i < arr.length; i++){ 
//     r = gcd(arr[i], r);
//     }
//     return r;
// }
// function F(n, f=[]) {
//     while (n % 2 === 0)f.push(2), n/= 2;
//     for (let i = 3; i <= Math.sqrt(n); i = i+ 2){
//         while (n % i === 0)f.push(i), n/= i;
//     }
//     if(n>2)f.push(n)
//   return  f.map((h => x =>(h[x] = (h[x]|0)+1,h))({}))[0]
// }

// function A(tar) {
//       return v(Object.values(F(tar))) === 1 ? true : false
// }

// function phi(n,r=1) { 
//     for (let i = 2; i < n; i++){
//         if(gcd(i, n) === 1)  r++; 
//          } 
//     return r
// } 
// function isA(val){
//     if(!val)return null
//     return A(phi(val))
// }
// const d = (m, n)=> n>m?d(n,m):m%n||m<=n?m==n:d(n,m/n), c = [1,1,1,1], e = (a,b) => a*a*a*b*b,l = {};
// let m = 3
// let n = 0
// count=0
// while(1 ){
// while ((m + 1) ** 2 * 8 < n) c[++m] = 1
// for(let a = 2; a < m + 1; a++){
// if( !(a**.5 % 1 ) )continue;
// let b =  c[a] + 1  
//     while(1){
//         let r= e(a,b)
//         if( r <= n || d(a, b) || b**(1./3) % 1 === 0 ) {
//             b += 1; continue;
//         }
//           l[r] = [r, b, a];
//              break;
//     };
// }
//  let [r,b,a] = [(()=> {for(let k in l){let b = l[k]; delete l[k]; return b}})()][0];
//  n = r; c[a] = b;
//  if(isA(r)){
// console.log(r)

//  }

// }

// console.log(++count)






