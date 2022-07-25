#include <iostream>
#include <vector>
#include <map>
#include <numeric>
#include <assert.h>
#include <queue>
#include<algorithm>
class Solution
{
public:
  template <typename T, typename L>
  static int minimumSemesters(T N, L relations)
  {

    std::vector<std::vector<int>> adj(N + 1);

    std::vector<int> compress(N + 1);
    std::iota(compress.begin(), compress.end(), 0);

    for (const auto &nodes : relations)
    {
      adj[nodes.back()].push_back(nodes.front());

      int front = nodes.front();
      int back = nodes.back();

      while (compress[front] != front)
      front = compress[front];
      while (compress[back] != back)
      back = compress[back];
      if (back == front)
        return -1;
      compress[back] = front;
    }

std::queue<int>queue;

std::map<int,std::vector<int>> max; 
for(size_t i =1; i <= N; i++ ){
 max[adj[i].size()].push_back(i);
}


auto iter = max.rbegin();
auto &[first, second] = *iter;

for(auto & i: second){ 
queue.push(i);

}
int count = 0;

     
int cout = 0; 
std::vector<int>hash(N+1);
while(!queue.empty()){

std::queue<int>qu;
int size = queue.size();

for(int i = 0; i < size; i++){

int node = queue.front(); queue.pop();

for(const auto &neighbor : adj[node]){
if(!hash[neighbor]){ 
  count++;                    
    qu.push(neighbor);
        }
    }
}

queue = qu; 

}
    return count;
  }
};



int main()
{


  std::map<int, std::vector<std::vector<int>>> dependencies{{20, {{1, 10}, {2, 6}}}};
  //dependencies[3] = {{1, 2}, {2, 3}, {3, 1}};

  for (const auto &[first, second] : dependencies)
  {

    std::cout << Solution::minimumSemesters(first, second) << std::endl;
  }
}