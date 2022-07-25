// longest increasing path 
#include <vector>
// #include<bits/stdc++.h> 
#include <algorithm>
#include<iostream>


using namespace std;


 



class Solution {
public:
    int rows;
    int cols;
    vector<vector<int>> f;

    int DFS(vector<vector<int>>& M, int r, int c) {
        if (f[r][c] > 0) return f[r][c]; // retrieve
        int res = 1;
        if (r+1 < rows && M[r+1][c] > M[r][c]) res = max(res, 1 + DFS(M, r+1, c));
        if (r-1 >= 0   && M[r-1][c] > M[r][c]) res = max(res, 1 + DFS(M, r-1, c));
        if (c+1 < cols && M[r][c+1] > M[r][c]) res = max(res, 1 + DFS(M, r, c+1));
        if (c-1 >= 0   && M[r][c-1] > M[r][c]) res = max(res, 1 + DFS(M, r, c-1));
        f[r][c] = res; // save
        return f[r][c];
    }

    int longestIncreasingPath(vector<vector<int>>& M) {
        if (M.empty()) return 0;
        rows = M.size();
        cols = M[0].size();
        f = vector<vector<int>>(rows, vector<int>(cols, 0));

        int res = 0;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                res = max(res, DFS(M, r, c));
            }
        }
        return res;
    }
};


int main(){
std::vector<std::vector<int>>test = {{9,9,4},{6,6,8},{2,1,1}};

Solution * sol = new Solution();
int result = sol->longestIncreasingPath(test); 

 auto C=0; 
std::cout << C << std::endl;

//std::cout << result << "\n"; 

return 0; 
}