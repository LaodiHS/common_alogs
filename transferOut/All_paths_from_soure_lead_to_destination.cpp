#include<vector>
using namespace std;
class Solution {
 vector<vector<int>>adjList;
    vector<int>visited;
public:
    bool leadsToDestination(int n, vector<vector<int>>& edges, int source, int destination) {
        adjList.resize(n);
        visited.resize(n,-1);
        for(const auto &edge : edges)adjList[*edge.begin()].push_back(*&edge.back());
        return dfs(source,destination);
    }
    
 bool dfs(int source,int destination){
    if(adjList[source].empty())return source==destination;
    if(visited[source] !=-1)return visited[source];
        visited[source] = 0;
        for(auto next : adjList[source]){
        if(!dfs(next,destination))return false;
        }   
     return visited[source] = 1;   
    }
};


// 3
// [[0,1],[0,2]]
// 0
// 2

// 4
// [[0,1],[0,3],[1,2],[2,1]]
// 0
// 3

// 4
// [[0,1],[0,2],[1,3],[2,3]]
// 0
// 3