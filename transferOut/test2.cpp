#include <iostream>
#include <math.h>
using namespace std;

const int N = 1e6;
const int INF = 2e9;
const int MOD = 1e9 + 7;

int dp[5 + N];

int main()
{
    int n = 7;
    int smax = n * (n + 1) / 2;
    if (smax % 2 == 1)
        cout << "0\n";
    else
    {
        for (int i = 1; i <= n; i++)
        {
            for (int j = i * (i + 1) / 2; j >= 1; j--)
            {
                if (dp[j])
                {
                    dp[i + j] += dp[j];
                    dp[i + j] %= MOD;
                }
            }
            dp[i]++;
            dp[i] %= MOD;
        }
        long long inverse = pow(2, 1e10 - 5) % 1e9 + 7;
        cout << inverse << endl;
        cout << dp[smax / 2] * 500000004ll % MOD;
        ;
    }
    return 0;
}