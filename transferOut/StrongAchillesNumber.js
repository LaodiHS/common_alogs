

// func fib(N int) int {
//     sqrt5 := math.Sqrt(5.)
//     phi := (1. + sqrt5) / 2.
//     return int(math.Round(math.Pow(phi, float64(N)) / sqrt5))
// }

let max = 0
const fib2 = N => {
    const memo = {};
     fibRec(N, memo);
};

const fibRec = (N, memo) => {
  
  
    if (memo[N])return memo[N];
     
    else {

        if (N < 2)   return N;

        else {

            memo[N] = fibRec(N - 1, memo) + fibRec(N - 2, memo);
          
            if( !(memo[N] % 2) ){ 

                max += memo[N]
                
            }
              if(memo[N] >= 4.0e6)return; 
            return memo[N];
        }
    }
};


function fib1(N){
    
    let sqrt5 = Math.sqrt(5)
    phi = (1 + sqrt5) / 2
    return Math.round(Math.pow(phi, N) / sqrt5)
    
}

function Big(N, memo = {}) {
    if (memo[N]) return memo[N];
    else {

        if (N < 2) return N

        else {
            return memo[N] = fib1(N - 1, memo) + fib1(N - 2, memo)
        }
    }
}

Big(12) /*?*/

 
fib1(6) /*?*/
fib1(6) /*?*/

fib2(75) /*?*/
max
var fib3 = function(N) {
    return fn(N,0,1);
};

function fn(n,a,b){
    if(n==0) return a;
    if(n==1) return b;
    
    return fn(n - 1, b, a + b);
}











var climbStairs = function(n) {
  
    a = b = 1
    while (n--)a = (b += a) - a
    return a
};

climbStairs(10) /*?*/

