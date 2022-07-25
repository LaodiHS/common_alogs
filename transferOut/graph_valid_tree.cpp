#include <vector>
using namespace std;
class Solution {
     private:
    int id [0xFFF]={};
    public:
    // two solutions paths 
    //dfs we fisit all nodes and detect if there is a cycle 
    // bfs we can use union find to find cycles lets do both 
   
    bool validTree(int n, vector<vector<int>>& edges) {
        for(const auto& edge : edges){
            int x = find(*edge.begin()); 
            int y = find(*&edge.back());
            if(x==y)
                return false;
            id[x]=y;
            }
        return edges.size() == n - 1;
    }

    int find(int n){    
        if(!id[n])id[n]=n;
        return id[n] == n ? n : find(id[n]);
    }
   
};


class Solution {
    public:
    // int visited[0XFFF]={0};
    // int visiting[0xFFF]={0};
    bool hasCycle = false;
    vector<vector<int>>* adjList;
    
    // two solutions paths 
    //dfs we fisit all nodes and detect if there is a cycle 
    // bfs we can use union find to find cycles lets do both 
   
    bool validTree(int n, vector<vector<int>>& edges) {
      if(edges.size() != n-1) return false;
        vector<vector<int>>adjL(n);
        
        for(auto val : edges){
            adjL[*val.begin()].push_back(*&val.back());
            adjL[*&val.back()].push_back(*val.begin()); 
            
        }
        
        adjList = &adjL;
     
 for(int i = 0; i< n; i++){
    int visited[0XFFF]={0}; 
    int visiting[0xFFF]={0};
     explore(i, visited, visiting);
 }
        
//         for(auto &list : adjL){
//           int index =  &list - &adjL[0];
//            if(list.size()>0){
//             explore(index);
              
//            }
            
//         }
        return !hasCycle; 
        
    }
    
void explore(int node,  int* visited, int* visiting ){
    
   if(visited[node]){
       hasCycle = true;
       return;
   } 
    
    if(visiting[node]){
        return;
    }
    
    visiting[node] = 1; 
    
    for(const auto &next : adjList->at(node)){   
       explore(next, visited, visiting);
    }
    visited[node] = 1;
}
    
};

class Solution {
    public:
    bool validTree(int n, vector<vector<int>>& edges) {
      if(edges.size() != n-1) return false;
        vector<int>degrees(n,0);
        for(int i = 0; i < n; i++)degrees[i]=i;
        for(auto val : edges){
            int f = *val.begin();
            int b = *&val.back();
            while(degrees[f] != f) f = degrees[f];
            while(degrees[b] != b) b = degrees[b];
            if(f == b)return false;
            degrees[b]=f;    
        };
        return true; 
    }
};



class Solution {
    public:
    bool validTree(int n, vector<vector<int>>& edges) {
      if(edges.size() != n-1) return false;
        vector<int>degrees(n,0);
        for(int i = 0; i < n; i++)degrees[i]=i;
        for(auto val : edges){
            int f = *val.begin();
            int b = *&val.back();
            while(degrees[f] != f) f = degrees[f];
            while(degrees[b] != b) b = degrees[b];
            if(f == b)return false;
            degrees[b]=f;    
        };
        return true; 
    }
};





// 6
// [[0,1],[0,2],[2,5],[3,4],[3,5]]
// 3
// [[1,0],[2,0]]
// 5
// [[2,3],[1,2],[1,3],[0,4]]
// 5
// [[0,1], [0,2], [0,3], [1,4]]
// 5
// [[0,1], [1,2], [2,3], [1,3], [1,4]]
// 5
// [[0,1],[0,4],[1,4],[2,3]]

// doe snot work will require some more thought about indegree out degree 
class Solution {
    public:

    bool hasCycle = false;
    // vector<vector<int>>* adjList;
    bool validTree(int n, vector<vector<int>>& edges) {
      if(edges.size() != n-1) return false;

        
            vector<vector<int>>adjL(n);
            vector<int>inDegrees(n,0);
          vector<int>outDegrees(n,0);
        
        
        for(auto val : edges){
            adjL[*val.begin()].push_back(*&val.back());
            adjL[*&val.back()].push_back(*val.begin()); 
            inDegrees[*&val.back()]++;
            outDegrees[*val.begin()]++;
            
        };
        
    
        
        
        int max_invalue = 0; int node_iv = 0;
         for(auto &val : inDegrees ){
        int no= &val - &inDegrees[0];
             if(max_invalue< val){
                 max_invalue=val;
                 node_iv=no;
                 
             }
             
  cout << "node: " << no << " indigree: " <<  val << endl; 
     }
         int max_outvalue = 0; int node_ov = 0;
             for(auto &val : outDegrees){
        int no = &val - &outDegrees[0]; 
            if(max_outvalue< val){
                 max_outvalue=val;
                 node_ov=no;
                 
             }
  cout << "node: " << no << " out digree: " <<  val << endl; 
           
     }
        
        
        
        
        

        queue<int>que;
        for(int i = node_v; i< n; i++){
        bool first =  (inDegrees[i] > outDegrees[i]) && adjL[i].size() > 1 && adjL[node_ov].size() > 1 ;
       
            
        
            if(first )return false;
            else return true;
               if(inDegrees[i] == 0)que.push(i);
        }
        
        
       
        
        
        while(!que.empty()){
            
            int maximal_node = que.front(); que.pop(); n--; 
            for(const auto &next : adjL[maximal_node]){
                if(--inDegrees[next] == 0){
                        que.push(next);                     
                }   
            }
        }
        
        return n == 0 ;
};

};