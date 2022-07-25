#include <algorithm>
#include <iostream>
#include <string>
#include <vector>
using  std::cout;

std::vector<std::vector<int>> countMin(10, std::vector<int>(10));

auto orginalChar = [](char c) -> int { return c - 'A'; };

int main() {
  std::string str = "ABKAAKS";

  std::vector<std::vector<int>> Hash(10, std::vector<int>(10));
  cout << str << std::endl;
  
  std::swap(str[0], str[2]);
  cout << str;

  for (auto const id : str)
  {
      std::cout << orginalChar(id) << std::endl;
  }
}