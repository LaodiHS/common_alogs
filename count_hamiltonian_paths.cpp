#include <cmath>
#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <vector>

using namespace std;
class Solution {
  unordered_map<int, int> sets;
  unordered_map<int, unordered_set<int>> graph;

  int squarePermute(vector<int>& list) {
    for (auto e : list) {
      sets[e]++;
    }

    for (auto e1 : sets) {
      for (auto e2 : sets) {
        if (square(e1.first + e2.first)) {
          graph[e1.first].insert(e2.first);
        };
      }
    }

    int todo = list.size();
    int count = 0;

    for (auto ele : sets) {
      count += dfs(ele.first, todo - 1);
    }

    return count;
  }
  int dfs(int index, int todo) {
    sets[index]--;
    int retv = 1;
    if (todo != 0) {
      retv = 0;
      for (auto e : graph[index]) {
        if (sets[e] != 0) {
          retv += dfs(e, todo - 1);
        }
      }
    }
    sets[index]++;
    return retv;
  }

  bool square(int x) {
    int t = sqrt(x);
    return t * t == x;
  }
};