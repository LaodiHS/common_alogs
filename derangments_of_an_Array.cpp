// In combinatorial mathematics, a derangement is a permutation of the elements of a set, such that no element appears in its original position.

// There's originally an array consisting of  n integers from 1 to  n in ascending order, you need to find the number of derangement it can generate.

// Also, since the answer may be very large, you should return the output mod 10 9  + 7.

// Example 1:

// Input: 3
// Output: 2
// Explanation: The original array is [1,2,3]. The two derangements are [2,3,1] and [3,1,2].
 

// Note: 
// n is in the range of [1, 106].

 

// This question gives us an array, let us ask for the number of misplaced, the so-called staggered is that each of the numbers 1 to n are not in their original position,
// all messed up, how many kinds can be asked Misplaced way. The blogger noticed that this question allowed a large number to be taken, and each time the big number is 10 9  + 7, why do you prefer this number? 
//Is there anything special? According to the blogger's previous experience, this kind of result is very big, and all of them are done with dp. Then build a one-dimensional dp array, where dp[i] means 1 to i. 
//The number of misaligned arrays. 
//The hard part is to find the formula for recursion. Let's look at the simplest situation:

// 0 misalignment when n = 1

// 1 staggered when n = 2 [2, 1]

// There are 2 staggers when n = 3 [3, 1, 2], [2, 3, 1]

//Then the blogger is wondering about dp[2], can find dp[3], and consider whether it is the number of cases where the number 3 is added. As a result, looking left and right, 
//I found that there is no special law, and I wonder if there is any hidden information that needs to be mined, or I have not figured it out. 
//So I took a look at the label and found that it was Math, my God, is it the title of the primary school Olympiad? After struggling for a long time, 
//I finally gave up and went online to search for the solutions of the gods. In fact, this question is a misplacement problem of combinatorial mathematics , and there is a special recursive formula.

// Let's think about how to ask for n = 4, let's assume that we put 4 in the kth position, here we let k = 3, then we put 4 in the 3 position and become:

// Xx 4 x

// We look at where 3 is occupied by 4, where it should be placed. There are two situations here. If 3 is placed in the 4 position, then there are:

// Xx 4 3

// Then the positions of 4 and 3 are determined at this time. In fact, only rows 1 and 2 are used, so it is equivalent to only rows 1 and 2, which is the value of dp[2], which is known. Then look at the second case, 3 is not in the 4 position, then when we remove 4, it becomes:

// Xxx

// Here 3 can't be placed in the 3rd position of x. Before removing 4, here is the position of 4 before moving 4, then in fact this becomes the case of row 1, 2, 3, which is dp[3] Value.

// Going back to the beginning when we chose k, we chose k = 3 at the time. In fact, k can be equal to 1, 2, 3, that is, there are three cases, so dp[4] = 3 * (dp[3] + dp [2]).

// Then the recursion formula comes out:

// Dp[i] = (i - 1) * (dp[i - 1] + dp[i - 2])

// With the recursion formula, the code is not difficult to write, see the code below:
// solution 1
#include <vector>
class Solution1 {
 public :
     int findDerangement( int n) {
         if (n < 2 ) return  0 ;
        std::vector < long  long > dp(n + 1 , 0 );
        Dp[ 1 ] = 0 ; dp[ 2 ] = 1 ;
         for ( int i = 3 ; i <= n; ++ i) {
            Dp[i] = (dp[i - 1 ] + dp[i - 2 ]) * (i - 1 ) % 1000000007 ;
        }
        return dp[n];
    }
};

// //solution 2
// The following solution simplifies the space, because the current value is only related to the first two values, 
// so there is no need to keep the entire array, just use two variables to record the first two values, and each time you update it, see the code below :
class Solution2 {
 public :
    int findDerangement( int n) {
         long  long a = 0 , b = 1 , res = 1 ;
         for ( int i = 3 ; i <= n; ++ i) {
          res = (i - 1 ) * (a + b) % 1000000007 ;
            a = b;
            b = res;
        }
        return (n == 1 ) ? 0 : res;
     };
};


// The following method is to deduct the previous recursion formula so that it is only related to the previous number. The specific derivation steps are as follows:

// We assume that e[i] = dp[i] - i * dp[i - 1]

// The recurrence formula is: dp[i] = (i - 1) * (dp[i - 1] + dp[i - 2])

// Bring the recursion formula into the hypothesis and get:

// e[i] = -dp[i - 1] + (n - 1) * dp[i - 2] = -e[i - 1]

// Thus obtaining e[i] = (-1)^n

// Then bring back the hypothesis formula, you can get: dp[i] = i * dp[i - 1] + (-1)^n

// According to this new recursion formula, you can write the code as follows:


//solution 3

class Solution3 {
 public :
     int findDerangement ( int n) {
         long  long res = 1 ;
         for ( int i = 1 ; i <= n; ++ i) {
            res = (i * res + (i% 2 == 0 ? 1 : -1 ))% 1000000007 ;
        }
        return res;
    }
};