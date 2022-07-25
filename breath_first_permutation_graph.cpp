class Solution {

  unordered_map < int, int > sets;
  unordered_map < int, unordered_set < int >> graph;

  public:
    int numSquarefulPerms(vector < int > & list) {
        // if(list.size() == 1 && square(list[0]) ){
        //     return 1;
        // }
      struct obj {
        int current;
        unordered_map < int, int > sets{};
        int depth;
        obj(int a, const unordered_map < int, int > & b, int c): current(a), depth(c){
            sets.reserve(b.size());
                   for(auto e: b){
                  sets.emplace(e.first,e.second);  
                };
            };
        };
      
      queue< obj > Queue;
      for (auto e: list) {
        sets[e]++;
      }

      vector < unordered_map < int, int >> values;
      for (auto &e1: sets) {
        int len = 0;
        int key = 0;
        for (auto &e2: sets) {
// check if the edge froms a square otherwise check if list
        if (square(e1.first + e2.first) )  {
        len++;
      
            key = e1.first;
            graph[e1.first].insert(e2.first);
          };
        } 
// avoid entering non leaf nodes// this is not nesseary as the length will tease out noneaf  nodes. However, it
//saves doing any unneccesary traversal and adding aditional memory blocks to our queue. 
           bool val =  graph[key].find(key) != graph[key].end();
          if(len=1 || val){
         Queue.push({
          key,
          sets,
          list.size() - 1
        });
          }
        }

      int count = 0;
    
      while (!Queue.empty()) {
        auto node = Queue.front(); Queue.pop();
          if(node.depth <= 0 ){  
            count++; 
          continue;
          }
          node.sets[node.current]--;
          for (auto adj: graph[node.current]) {
            if (node.sets[adj] != 0) {
              Queue.push({
                adj,
                node.sets,
                node.depth - 1
              });   
            }   
          }
      }
      
      return count;
    }
  bool square(int x) {
        int t = sqrt(x);
        return t * t == x;
    }
};