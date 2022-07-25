
#include <vector>
#include<queue>
using namespace std;

// class Solution {
// public:
//     bool sequenceReconstruction(vector<int>& org, vector<vector<int>>& seqs) {
//         int n = org.size();
//         vector<int> pos(n+1);
//         vector<int>pair(n+1);
//         for (int i = 1; i < n; i++) 
//             pos[org[i]] = i;
//         for (auto &seq : seqs) {
//         if (seq.empty()) continue;

           
//             if (seq[0] < 1 || seq[0] > n) return false;
//             for (int i = 1; i < seq.size(); i++) {

//                 if (seq[i] < 1 || seq[i] > n) return false;
//                 if (pos[seq[i]] <= pos[seq[i-1]]) return false;   

//                 if (pos[seq[i]] == pos[seq[i-1]]+1) pair[seq[i-1]] = -1;
//             }

//             if (seq.back() == org[n-1]) pair[org[n-1]] = -1;
//         }
//         for (int i = 1; i <= n; i++) {
//             if (pair[i] != -1) return false;
//         }
//         return true;
//     }
// };

// class Solution {
// public:
//     bool sequenceReconstruction(vector<int>& org, vector<vector<int>>& seqs) {
//         int n = org.size();
//         vector<int> pos(n+1, -1);
//         for (int i = 0; i < n; i++) pos[org[i]] = i;
        
//         bool hasany = false;
//         vector<bool> goods(n+1, false);
        
//         for (auto& seq : seqs) {
//             for (int i = 0; i < seq.size(); i++) {
//                 hasany = true;
//                 int cur = seq[i];
//                 if (cur < 1 || cur > n) return false;
//                 if (i == 0) continue;
//                 int pre = seq[i-1];
//                 if (pos[pre] + 1 == pos[cur]) goods[cur] = true;
//                 else if (pos[pre] >= pos[cur]) return false; // out of order
//             }
//         }
        
//         return hasany && count(goods.begin(), goods.end(), true) == n-1;
//     }
// };

// class Solution {
// public:
//     bool sequenceReconstruction(vector<int>& org, vector<vector<int>>& seqs) {
//         int n = org.size();
//         // a special case: org = [1], seqs = [[]], 1 is not mentioned in seqs, should return false.
//         // btw: org = [1], seqs = [[1]] should return true
//         // based on test cases, org = [], seqs = [[]] is considered as false
//         // check if last element in org is mentioned in seqs to handle this special case
//         bool backShowUp = false;
//         for (auto& seq : seqs) {
//             for (int i = 0; i < seq.size(); i++) {
//                 if (seq[i] > n || seq[i] <= 0) {
//                     // out of range number
//                     return false;
//                 }
//             }
//             if (seq.size() > 0 && !backShowUp) {
//                 backShowUp = org.back() == seq.back();
//             }
//         }
//         if (!backShowUp) {
//             return false;
//         }
//         vector<bool> status(n - 1, false); // status[i] = true means from i -> i + 1 is confirmed
//         vector<int> indexes(n);
//         for (int i = 0; i < n; i++) {
//             indexes[org[i] - 1] = i; // org is 1 indexed
//         }
//         for (auto& seq : seqs) {
//             int m = seq.size();
//             for (int i = 0; i < m - 1; i++) {
//                 if (indexes[seq[i] - 1] + 1 == indexes[seq[i + 1] - 1]) {
//                     // only adjacent is useful
//                     status[indexes[seq[i] - 1]] = true;
//                 } else if (indexes[seq[i] - 1] + 1 > indexes[seq[i + 1] - 1]) {
//                     // wrong order
//                     return false;
//                 }
//             }
//         }
//         for (int i = 0; i < n - 1; i++) {
//             if (!status[i]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// };
class Solution {
public:
    bool sequenceReconstruction(vector<int>& org, vector<vector<int>>& seqs) {
        int n = org.size();
        vector<int> inDegree(n + 1, -1);
        vector<vector<int>> edges(n + 1, vector<int>());

        for (auto& seq: seqs) if (seq.size()) {
            if (seq[0] > n || seq[0] < 1) return false;
            if (inDegree[seq[0]] == -1) inDegree[seq[0]] = 0;
            for (int i = 1; i < seq.size(); i++) {
                if (seq[i] > n || seq[i] < 1) return false;
                if (inDegree[seq[i]] == -1) inDegree[seq[i]] = 0;
                inDegree[seq[i]]++;
                edges[seq[i - 1]].push_back(seq[i]);
            }
        }

        queue<int> Q;
        for (int i = 1; i <= n; i++) {
            if (inDegree[i] == 0) {
                Q.push(i);
            }
        }
        
        int ptr = 0;
        while(!Q.empty()) {
            if (Q.size() != 1 || ptr == n) {
                return false;
            }
            int u = Q.front();
            Q.pop();
            if (u != org[ptr++]) {
                return false;
            }
            for (auto v: edges[u]) {
                inDegree[v]--;
                if (inDegree[v] == 0) {
                    Q.push(v);
                }
            }
        }
        
        return ptr == n;
    }
};
// [5,3,2,4,1]
// [[5,3,2,4],[4,1],[1],[3],[2,4],[1000000000]]
// [1]
// [[1],[1],[1]]
// [1,2,3]
// [[1,2],[1,3]]
// [1,2,3]
// [[1,2],[1,3],[2,3]]
// [4,1,5,2,6,3]
// [[5,2,6,3],[4,1,5,2]]
// [1]
// [[],[]]