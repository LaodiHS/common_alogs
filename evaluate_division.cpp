#include <vector>
#include <map>
#include <iostream>
using namespace std;
class Solution
{
    int n;
    vector<vector<pair<int, double>>> graph; // <vertex, edge weight>
    vector<int> visited;
    vector<double> path;
    vector<int> compress;
    // generating the directed paths by summing the weights(edges) as we walk the edges
    void dfs(int vertex, double weight, int source)
    {
        if (visited[vertex])
            return;

        visited[vertex] = 1;

        if (compress[vertex] != source)
            compress[vertex] = source;

        path[vertex] = weight;

        for (const auto &i : graph[vertex])
            dfs(i.first, weight * i.second, source);
    }

public:
    vector<double> calcEquation(vector<vector<string>> &equations, vector<double> &values, vector<vector<string>> &queries)
    {
        map<string, int> Map;

        int maxNode = 0;
        for (const auto &edge : equations)
        {
            Map[edge[0]] = Map[edge[1]] = 0;
        }

        n = 0;
        for (auto &i : Map)
            i.second = n++;

        graph.resize(n);
        visited.resize(n, 0);
        compress.resize(n, 0);
        path.resize(n);

        map<string, int> inDegree;
        for (auto &dividenDivisor : equations)
        {

            int index = &dividenDivisor - &equations[0];
            string dividen = *dividenDivisor.begin();
            string divisor = *&dividenDivisor.back();
            int from = Map[dividen], to = Map[divisor];
            graph[from].emplace_back(to, values[index]);
            graph[to].emplace_back(from, (double)1 / values[index]);
            inDegree[divisor]++;
        }

        for (auto &keyVal : Map)
        {
            if (inDegree[keyVal.first] == 0)
            {
                dfs(keyVal.second, 1, keyVal.second);
            }
        }

        vector<double> directPathValues;
        for (const auto &edge : queries)
        {

            if (!Map.count(edge[0]) || !Map.count(edge[1]))
            {
                directPathValues.push_back(-1);
                continue;
            }

            int u = Map[edge[0]], v = Map[edge[1]];
            if (compress[u] != compress[v])
            {
                directPathValues.push_back(-1);
                continue;
            }

            directPathValues.push_back(path[v] / path[u]);
        }
        return directPathValues;
    }
};

class Solution2 {
public:
    
    
    vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
   
        unordered_map<string, unordered_map<string, double>>distance;
     
        
        
        
        for(auto &pair : equations){
            int index = &pair - &equations[0];
            string from = *pair.begin(), to = *&pair.back();
            distance[from][to] = values[index];
            distance[to][from] = double(1)/values[index];
            distance[from][from] = distance[to][to] = 1.0;
            
        }
        for(auto &k : distance){
            for(auto &i : distance[k.first]){
                for(auto &j: distance[k.first]){
                    cout << i.first << "---" <<j.first <<  endl;
                    
                    distance[i.first][j.first] = distance[i.first][k.first] * distance[k.first][j.first];
                }
            }
            
        }

   

        vector<double> res;
        for (auto& q : queries) {
            string from = *q.begin(), to = *&q.back();
          
    
            if (distance[from][to]) {
                res.push_back(distance[from][to]);
            } else {
                res.push_back(-1.0);
            }
        }
        return res;
    }        
    
    int to_int(string str){
        return  str[0] - 'a';
    }

    
};

// [ [ "a", "b" ], [ "b", "c" ], [ "bc", "cd" ] ]
//     [1.5, 2.5, 5.0]
//     [[ "a", "c" ], [ "c", "b" ], [ "bc", "cd" ], [ "cd", "bc" ]]
//     [[ "a", "b" ], [ "b", "c" ]]
//     [2.0, 3.0]
//     [[ "a", "c" ], [ "b", "a" ], [ "a", "e" ], [ "a", "a" ], [ "x", "x" ]]
//     [[ "a", "b" ], [ "c", "d" ]]
//     [1.0, 1.0]
//     [[ "a", "c" ], [ "b", "d" ], [ "b", "a" ], [ "d", "c" ]]
