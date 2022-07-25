// const crypto = require('crypto');

const {gzip, ungzip}= require('node-gzip');

const arr = ['hello', 'world', 'this', 'is', 'a', 'sentence'];

const result = async function zip(arr){

// const result = Promise.map(arr,async(val)=>gzip(val)  ));

return result
}


const val = result(arr);

val.then(x=>{
x


}) 

// console.log(crypto.getHashes());
// console.log(crypto.getCiphers());


// crypto.randomBytes(16,(error, buf) =>{
// console.log(buf)


// })

// let iv = crypto.randomBytes(16);


// let hash = crypto.createHash('sha256')



function sum(n){
const MOD = 1e9 + 7;
let dp =Array(1e6+7);
dp.fill(0);


let m = n * (n + 1) / 2;
let smax = n * (n + 1) / 2;
    if(m % 2 == 1) console.log(0)
    else{
       

        for(let i = 1; i <= n; i++){

            for(let j = smax; j >= 1; j--){

                if(dp[j]){

                    dp[i + j] += dp[j];
                    dp[i + j] %= MOD;
                }
            }
            dp[i]++;
            dp[i] %= MOD;
        }
return  dp[m / 2] / 2;


        // console.log( a   );
    };
}
sum(7);