// bit masking
#include <bitset>
#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

namespace std {
template <>
void vector<int>::clear() {
  std::cout << "Clearing..." << std::endl;
  resize(0);
}
}  // namespace std
int main() {
  bool A[]{0, 0, 0, 0, 1, 1, 1, 1};
  bool B[]{0, 0, 1, 1, 0, 0, 1, 1};
  bool C[]{0, 1, 0, 1, 0, 1, 0, 1};

  for (int i = 0; i < 8; i++) {
    cout << (!B[i] && C[i]);
  }
  cout << endl;

  // convert c array to bit mask;
  int c = 0;
  int notb = 0;
  for (int i = 0; i < 8; i++) {
    // this is mask creation for b
    notb = (notb << 1) | !B[i];
    // this is mask creation for c
    c = (c << 1) | C[i];
  }

  // allocate on result and fill in backwoards order since we create the mask in
  // forward order
  bool result[8];
  int d = notb & c;
  for (int i = 7; i >= 0; --i) {
    // walk indexes backwards to place the values backwards
    result[i] = (d & 1);
    d >>= 1;
  }

  for (int i = 0; i < 8; i++) cout << result[i];
  cout << endl;
}

class Solution {
 public:
  vector<int> findNumOfValidWords(vector<string>& words,
                                  vector<string>& puzzles) {
    vector<int> ans;

    unordered_map<int, int> freq;
    for (const string& word : words) {
      int mask = 0;
      for (char c : word) mask |= 1 << (c - 'a');
      ++freq[mask];
    }

    for (const string& p : puzzles) {
      int mask = 0;
      for (char c : p) mask |= 1 << (c - 'a');
      int first = p[0] - 'a';
      int curr = mask;
      int total = 0;
      while (curr) {
        if ((curr >> first) & 1) {
          auto it = freq.find(curr);
          if (it != freq.end()) total += it->second;
        }
        curr = (curr - 1) & mask;
      }
      ans.push_back(total);
    }
    return ans;
  }
};