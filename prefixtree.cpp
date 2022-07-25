#include <algorithm>
#include <iostream>
#include <memory>
#include <string>
#include <unordered_map>
#include <vector>


int base(const char& a) { return a - 'a'; }

class searchTree {
  struct prefixTree {
    int num = 0;
    std::unordered_map<int, std::unique_ptr<prefixTree>> node;
  };

  std::unique_ptr<prefixTree> treeMap = std::make_unique<prefixTree>();

  struct prefixArray {
    int num = 0;
    std::vector<std::unique_ptr<prefixArray>> node;
    prefixArray() : node(26){};
  };

  std::unique_ptr<prefixArray> treeArray = std::make_unique<prefixArray>();

  searchTree() = default;

 public:
  static searchTree& init() {
    static searchTree searchInstance;
    return searchInstance;
  }
  template <typename A>
  auto searchMap(const A& word) {
    auto grandChild = treeMap.get();
    for (auto const& letter : word) {
      auto find = grandChild->node.find(base(letter));
      if (find != grandChild->node.end()) {
        grandChild = find->second.get();
      } else {
        return 0;
      }
    }
    return grandChild->num;
  };
  template <typename A>
  auto searchArray(const A& word) {
    auto grandChild = treeArray.get();
    for (auto const& letter : word) {
      if (grandChild->node[base(letter)]) {
        grandChild = grandChild->node[base(letter)].get();
      } else {
        return 0;
      }
    }
    return grandChild->num;
  }
  template <typename A>
  void buildPrefixTree(const A& dic) {
    for (const auto& word : dic) {
      auto grandChild = treeMap.get();
      for (auto& shar : word) {
        int charBase = base(shar);
        auto isThere = grandChild->node.find(charBase);
        if (isThere == grandChild->node.end()) {
          grandChild->node[charBase] = std::make_unique<prefixTree>();
          grandChild->node[charBase]->num++;
          grandChild = grandChild->node[charBase].get();
        } else {
          grandChild->node[charBase]->num++;
          grandChild = grandChild->node[charBase].get();
        }
      }
    }
  }

  template <typename A>
  void buildDensePrefixArray(const A& dic) {
    for (auto& word : dic) {
      auto child = treeArray.get();
      for (auto& shar : word) {
        int charBase = base(shar);
        if (child->node[charBase] == nullptr) {
          child->num++;
          child->node[charBase] = std::make_unique<prefixArray>();
          child = child->node[charBase].get();
        } else {
          child->num++;
          child = child->node[charBase].get();
        }
      }
    }
  }
  template <typename A>
  void buildMaskPrefixArray(const A& dic) {}
};

std::vector<std::string> dic{"hallo", "helno", "hekmo", "hako",
                             "helmo", "kelo",  "follo"};

int main() {
  searchTree& search = searchTree::init();
  search.buildPrefixTree(dic);
  std::string query = "h";

  search.buildDensePrefixArray(dic);

  // while (cin)
  // {

  //  cin >> query;
  // cout << "this prefix " << query << " can form this many possable words " <<
  // query << " " << search.search(query) << "\n"; cout << "this prefix " <<
  // query << " can form this many possable words " << query << " " <<
  // search.searchDensePrefixArray(query) << "\n";
  // };

  std::cout << "this prefix " << query << " can form this many possable words ";
  std::cout << query << " " << search.searchArray(query) << "\n";
}
