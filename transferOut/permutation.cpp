// #include <algorithm>
// #include <fstream>
// #include <iostream>
// #include <numeric>
// #include <queue>
// #include <set>
// #include <stack>
// #include <string>
// #include <unordered_map>
// #include <utility>
// #include <vector>

// using namespace std;

// std::ofstream outfile("permute.txt");
// auto fac(int a) -> int { return a > 1 ? a * fac(a - 1) : 1; };
// class Permute {
//  public:
//   vector<string> permutations;
//   template <class T>
//   void generate(T str, int begin = 0) {
//     if (begin == str.size() - 1) {
//       permutations.push_back(str);
//       return;
//     }
//     for (int i = begin; i < str.size(); i++) {
//       swap(str[i], str[begin]);
//       generate(str, begin + 1);
//       swap(str[i], str[begin]);
//     }
//   }

//   vector<string> result(string str) {
//     generate(str);
//     return permutations;
//   };
// };

//   class Solution {
//    public:
//     vector<vector<int>> permute(vector<int>& nums) {
//       vector<vector<int>> result;
//       if (nums.size() == 0) {
//        return  result;
//       }
//       stack<vector<int>> permute;
//       int n = nums.size();
//       permute.push(nums);
//       for (int i = 0; i < n - 1; i++) {
//         stack<vector<int>> temp;
//         while (!permute.empty()) {
//           vector<int> vec = permute.top();
//           permute.pop();
//           for (int j = i; j < n; j++) {
//             swap(vec[i], vec[j]);
//             temp.push(vec);
//             swap(vec[i], vec[j]);
//           }
//         }
//         swap(permute, temp);
//       }

//       while (!permute.empty()) {
//         result.push_back(permute.top());
//         permute.pop();
//       }
//       return result;
//     }
//   };

#include <algorithm>
// #include <fstream>
#include <iostream>
#include <numeric>
#include <queue>
#include <set>
#include <stack>
#include <string>
#include <unordered_map>
#include <utility>
#include <vector>
int fac(int a) {
  int b = a - 1;
  while (b > 0) a *= b--;
  return a;
};

int main() {
  std::vector<char> array(3);
  iota(array.begin(), array.end(), '0');
  std::vector<std::pair<std::vector<char>, int>> stack;
  stack.reserve(fac(array.size()));
  stack.emplace_back(array, 0);
  auto begin = stack.begin();
  int overload = 0;
  while (begin != stack.end()) {
    auto first = begin->first;
    auto prefix = first.begin() + begin->second;
    auto suffux = first.begin() + begin->second;
    while (suffux + 1 < first.end()) {
      suffux++;
      std::swap(*prefix, *suffux);
      stack.emplace_back(first, begin->second + 1);
      std::swap(*prefix, *suffux);
    }

    if (!overload++) {
      begin->second++;
    } else
      begin++;
  }
  std::cout << "hello"
            << "end";
}

// using namespace std;

// void recurse(
//   const string &s, unsigned mask = 0, const string &out = string())
// {
//   size_t n = s.size();
//   if (out.size() == n) cout << ' ' << out;
//   for (size_t i = 0; i < n; ++i) {
//     unsigned bit = 1 << i;
//     if (mask & bit) continue;
//     recurse(s, mask | bit, out + s[i]);
//   }
// }

// int main()
// {
//   string test = "red";
//   recurse(test);
//   cout << endl;
//   return 0;
// }
