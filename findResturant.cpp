#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

class Solution {
public:
  static std::vector<std::string> findTopCommonSelection(
      std::unordered_map<std::string, std::vector<std::string> > const &friends) {
      size_t maxValue = 0;

    std::unordered_map<std::string, size_t> preferences;

    for (const auto &selections : friends) {
      for (const auto &resturant : selections.second) {
        maxValue = std::max(maxValue, ++preferences[resturant]);
      }
    }

    std::unordered_map<size_t, std::vector<std::string> > valueSelections;
    for (const auto &preference : preferences) {
      valueSelections[preference.second].push_back(preference.first);
    }
    
    const auto &topSelections = valueSelections.find(maxValue);

    if (topSelections != valueSelections.end())
      return (*topSelections).second;
    else
      return {};
  }
};

int main() {

  std::unordered_map<std::string, std::vector<std::string> > users{
      {"abe", {"eata", "eatb", "eatc"}},
      {"jef", {"eatl", "eata", "eatc"}},
      {"doe", {"eatc", "eata", "eatb"}}};
  for (const auto &value : Solution::findTopCommonSelection(users)) {
    std::cout << value << std::endl;
  }
}