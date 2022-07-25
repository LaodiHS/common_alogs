// tree property:
// (u, v) are diameter ends in the tree <=> farthest node from node x is either
// u or v (for all x) the height of the tree for a fixed root is the node
// farthest from it so find diameter, then compute D[x] = min(dist(x, u),
// dist(x, v)) those with minimum D[x] are the answer this is also the
// definitions of center

// 1) input
// 2) due to the property, find farthest node from an arbitrary node using
// dfs/bfs, this will be a diameter end 3) due to the property, starting a
// search from the first end gives the second end 4) compute D[x] by computing
// all distances from u and then all distances from v, taking maximum

#include <iostream>
#include <vector>

using namespace std;

class Solution {
 public:
  vector<vector<int>> adjList;
  vector<int> S, D;
  // set the node values based on their distance from the starting node
  void dfs(int v, int prev = -1, int d = 0) {
    S[v] = d;
    for (const auto& i : adjList[v]) {
      if (i != prev) dfs(i, v, 1 + d);
    }
  }

  vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges) {
    adjList.resize(n);
    S.resize(n);
    for (int i = 0; i < n; i++) S[i] = i;

    D.resize(n);

    for (int i = 0; i < n - 1; i++) {
      adjList[*edges[i].begin()].push_back(*&edges[i].back());
      adjList[*&edges[i].back()].push_back(*edges[i].begin());
    }

    // start from abrbitrary node 0 set the values for the node using array
    // index as their pointers
    dfs(0);

    // find the node with the heighist value
    int at = 0;
    for (int i = 0; i < n; i++) {
      if (S[at] < S[i]) at = i;
    }

    // from that highest value node travese the tree again and using the same
    // array use index as their pointers to set their traversal value starting
    // off from the hiest value node so heist value node will be set to 0 and
    // the furthest node will be now the hest value
    dfs(at);

    // from our hest value node find the furthest node
    int at2 = 0;
    for (int i = 0; i < n; i++) {
      if (S[at2] < S[i]) at2 = i;
    }
    // copy the current distance values of our nodes distances
    D = S;
    // traverse the tree again from the highest value node and reset the
    // distances in the opposit direction
    dfs(at2);
    // traverse the nodes and set the copy node values to the max so that the
    // nodes of equal distance away can reflect their vaules with respect to the
    // center.
    for (int i = 0; i < n; i++) {
      D[i] = max(D[i], S[i]);
    }

    vector<int> ans = {0};
    // set the min to be our staring node distance value from the center
    int mn = D[0];
    // walk the nodes
    for (int i = 1; i < n; i++) {
      // if a node's distance is less than our current value make the new
      // minimum distance our centeral nodes and all nodes equal to that our
      // center nodes
      if (D[i] < mn) {
        mn = D[i];
        ans.clear(), ans.push_back(i);

      } else if (D[i] == mn)
        ans.push_back(i);
    }
    // return our min distnce nodes as our center nodes
    return ans;
  }
};