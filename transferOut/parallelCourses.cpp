
#include <algorithm>
#include <any>
#include <debug/map>
#include <debug/string>
#include <iostream>
#include <numeric>
#include <set>
#include <type_traits>
#include <utility>
#include <vector>
#include<fstream>
#include<map>
using merit_values = std::map<std::string, std::string>;
bool minimumSemesters(int N, std::vector<std::vector<int>> &relations) {
  for (auto &nodes : relations) {
    std::vector<int> que;
    que.reserve(relations.size() * 2);
    que.push_back(nodes[0]);
    auto walker = que.begin();
    while (walker != que.end()) {
      int pop = *walker++;
      if (pop > relations.size()) continue;
      auto &neighbors = relations[pop - 1];
      que.push_back(neighbors[1]);
      if (nodes[0] == neighbors[1]) return 1;
    };
  };
  return 0;
}

// use a binary state to color nodes, if node falls out of alignment return
// false . skip cycles.
bool isBipartite(std::vector<std::vector<int>> &graph) {
  int state[2] = {1, 2};
  auto walk = graph.begin();
  std::vector<int> que;
  std::vector<int> color(1000);
  for (int i = 0; i < graph.size(); i++) {
    que.push_back(i);
    auto queue = que.begin();
    while (queue != que.end()) {
      if (!color[*queue])
        color[*queue] = state[0];
      else if (color[*queue] != state[0])
        return false;
      std::swap(state[0], state[1]);
      for (int &node : graph[*queue]) {
        if (!color[node]) {
          color[node] = state[0], que.push_back(node);
          continue;
        } else if (color[node] != state[0])
          return false;
      };
      std::swap(state[0], state[1]);
      queue++;
    }
  }
  return true;
};

int countingValleys(int const &n, std::string const &s) {
  int low = 'D';
  int hi = 'U';
  int altitude[static_cast<int>('U') + 1] = {0};
  altitude[static_cast<int>('U')] = 1;
  altitude[static_cast<int>('D')] = -1;
  auto step = s.begin();
  int level = 0;
  int valleyCount = 0;
  while (step != s.end()) {
    level += altitude[static_cast<int>(*step)];
    if (level < 0) {
      valleyCount++;
      while (level < 0 && step != s.end()) {
        step++;
        level += altitude[static_cast<int>(*step)];
      };
    };
    step++;
  };
  return valleyCount;
};

void transform(std::vector<std::vector<int>> &matrix) {
  for (size_t i = 0; i < matrix.size(); i++) {
    for (size_t j = i + 1; j < matrix.size(); j++) {
      std::swap(matrix[i][j], matrix[j][i]);
    };
  };
};

std::map<std::string, std::vector<int>> map;

std::string h = "hello";

// Complete the repeatedString function below.
long repeatedString(std::string const &s, long const &n) {
  size_t size = 0;

  // if(string.size() > )

  std::vector<size_t> sub_string;
  sub_string.reserve(s.size());
  size_t index = 0;
  for (auto const &letter : s) {
    if (!(letter - 'a')) size++;
    sub_string.emplace_back(size);
  };

  size_t base = (n / s.size()) * size;
  size_t dif = n % s.size();

  if (dif) base += sub_string[dif - 1];
  return base;
};

template <class S, class T, class R>

void make_set(S const &str, T &count, R &set) {
  for (auto const &letter : str) {
    set.insert(letter - 'a');
    count[letter - 'a']++;
  };
};
// https://www.hackerrank.com/test/61sq9qfa63d/questions/ep40dn0gm9k
int makeAnagram(std::string const &a, std::string const &b) {
  if (a.size() > b.size()) makeAnagram(b, a);

  std::set<int> set_a;

  size_t hash_a[27] = {0};
  make_set(a, hash_a, set_a);

  size_t hash_b[27] = {0};
  make_set(b, hash_b, set_a);

  int count = 0;
  for (auto const &letter : set_a) {
    count += abs(hash_a[letter] - hash_b[letter]);
  };

  return count;
};










template<class T>
long arrayManipulation(T &queries) {
  std::vector<int> arr(6,0);
  int index = 0;
  int prev = 0;
  for (auto val : queries)
  {

    arr[val[0]-1] += val[2];
    arr[val[1]] += - val[2];
   
  };
  int high = 0;
  auto iter = arr.begin();
  while(iter != arr.end()){
    arr[index++] +=   prev;
    prev = arr[index - 1];
    high = std::max(arr[index - 1], high);
    iter++;
  }

  long maximum = 0;
  auto qu = queries.begin();
  long count = 0;
  auto quo = queries.begin();
  while (qu != queries.end())
  {
   
    int a1 = qu->front();
    int b1 = qu->at(1);
    long minmax =  static_cast<long>(qu->back());

    auto search = qu + 1;
    while (search != queries.end()) {
    
      int a2 = search->front();
      int b2 = search->at(1);
      long val = static_cast<long>(search->back());
      int overlap = std::max(a1, a2) <= std::min(b1, b2);

      minmax = overlap ? minmax + val : std::max(minmax, val);



if (!overlap){
  break;
};



search++;
if (search == queries.end())
{
  qu = search - 1;
      };
    };

   
    
    qu++;
    maximum = std::max(minmax, maximum);

    std::cout << maximum << std::endl;
  

    
  }

  std::cout << maximum << std::endl;
  return maximum;
};

int main() {
  std::vector<std::vector<int>> array_z{{1, 2, 100}, {2, 5, 100}, {3, 4, 100}};
  arrayManipulation(array_z);

  std::vector<std::vector<int>> array0{{1, 5, 2}, {4, 8, 7}, {6, 9, 3}};
  // diverging branches max at end // 1 jumps

  if(false) arrayManipulation( array0);

  std::vector<std::vector<int>> array{{2, 5, 8}, {3, 5, 7}, {1, 8, 1}};
  // wide narrow wide // 0 jumps

 if(false)  arrayManipulation( array);
  std::vector<std::vector<int>> array3{{1, 5, 3}, {4, 8, 7}, {6, 9, 1}};
  // scan ahead by 1
if(false) arrayManipulation( array3);

  std::vector<std::vector<int>> array5{
      {1, 5, 3}, {4, 8, 7}, {6, 9, 1}, {1, 3, 20}};
  // far left node highest value node
 if(false) arrayManipulation( array5);

  std::vector<std::vector<int>> array4{{2,6,8},{3, 5, 7},{1, 8, 1}, {5, 9, 15}};
// 10000000 100000
  if(false) arrayManipulation( array4);
  std::ifstream str ("inputs2.txt");
  std::vector<std::vector<long>> vec;
  long a=0;
  long b=0;
  long c=0;

  while (str >> a >> b >> c)
  {
    vec.push_back({a, b, c});
  };

  std::vector<int> walkBoth(11, 0);

  std::iota(walkBoth.begin(), walkBoth.end(), 0);

  auto front = walkBoth.begin();

  auto back = walkBoth.rbegin();


  while(back != walkBoth.rend() && front != walkBoth.end()){

                
                 if(*front++ == *back++){
                   break;
                 }
  };



  // arrayManipulation(vec);

  //2510535321

  // std::string s = "DUDDDUUDUU";
  // countingValleys(5, s);

  // std::string str;
  // int counts = 0;

  // std::vector<std::vector<int>> cube{
  //     {10, 3, 8, 2, 1}, {4, 9, 2, 8, 1}, {9, 4, 4, 7, 3}, {8, 9, 1, 8, 2}};
  // std::vector<std::vector<int>> copy(cube.size(), std::vector<int>(5));
  // int count = 0;

  // for (auto &row : cube) {
  //   std::sort(row.begin(), row.end());
  // };

  // transform(cube);

  // for (auto &row : cube) {
  //   std::sort(row.begin(), row.end());
  // };

  // int arr[50] = {0};
  // std::iota(arr, arr + 50, 0);

  //   transform(cube);
  //   int column = 0;
  //   int row = 0;
  //   // for (int i = 0; i < cube.size() / 2; i++)
  //   // {
  //   // }

  //   std::vector<std::vector<int>> graph = {{1, 3}, {0, 2}, {1, 3}, {0, 2}};
  //   isBipartite(graph);

  //   std::vector<std::vector<int>> relations{{1, 3}, {2, 3}};
  //   int num = 3;
  // std::cout << "did we find a cycle " << minimumSemesters(num, relations);
};
