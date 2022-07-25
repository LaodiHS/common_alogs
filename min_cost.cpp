class Solution { 
public:
    int minimumCost(int N, vector<vector<int>>& connections) {
        
        vector<vector<vector<int>>>adjList(N+1);
        vector<int>dist(N + 1, 2e3);
        for(auto con: connections){
        adjList[con[0]].push_back({con[1], con[2]});
        adjList[con[1]].push_back({con[0], con[2]});
        }     


        unordered_map<int, unordered_set<int>>MAP;
        vector<int>visited(1000,0);
        iota(visited.begin(), visited.end(),1);

        queue<int>Q; Q.push(connections[0][0]);
        dist[0]=0;
        dist[connections[0][0]] = 0;
        vector<bool>inQueue(N + 1, false);
        while(!Q.empty()){        
        int size = Q.size();
            for(int i =0; i< size; i++){
            int v = Q.front(); Q.pop();
            inQueue[v] = false;
            for(auto &next : adjList[v]){
                int node = next[0];  int weight = next[1];
                
                if(dist[node] <= dist[v] + weight) continue;
                dist[node] = dist[v] + weight;

                // int k=node;
                // if(visited[v]==node){
                                
          
//                 for(int i = 0; i<= N; i++){
//                   if( visited[i] !=visited[node])continue;  
//                        dist[i]=0;
                    
//                 }
//                     // continue;
//                 }

                if(visited[node] != v)visited[node] = v;

                if(!inQueue[node]){
                    cd 
                    
                    inQueue[node] = true;
                    Q.push(node);
                    }
                }
            }

int find(int x) {
        if (parent[x] == x) {
            return parent[x];
        }
        parent[x] = find(parent[x]); // path compression
        return parent[x];
    }
void union(int x, int y) {
        int px = find(x);
        int py = find(y);
        
        if (px != py) {
            parent[px] = py;
            n--;
        }
    }


        }

        
int total = 0;
for(auto i : dist){
    cout << i << endl;
   if(i==2000)return -1;
 total+= i < 2000? i : 0; 
}

      return    !total?-1:total;

    }
};