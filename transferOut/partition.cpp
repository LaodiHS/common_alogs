#include <iostream>     // std::cout
#include <algorithm>    // std::partition
#include <vector> 
#include <numeric>       // std::vector

bool IsOdd (int i) { return (i%2)==1; }

int main () {
  std::vector<int> myvector;

  // set some values:
  myvector.resize(10);
  std::iota(myvector.begin(), myvector.end(), 1);



  std::vector<int>::iterator bound;
  bound = std::partition (myvector.begin(), myvector.end(), IsOdd);

  // print out content:
  std::cout << "odd elements:";
  for (auto it : myvector)
    std::cout << ' ' << it;
  std::cout << '\n';

  std::cout << "even elements:";
  for (std::vector<int>::iterator it=bound; it!=myvector.end(); ++it)
    std::cout << ' ' << *it;
  std::cout << '\n';

  return 0;
}