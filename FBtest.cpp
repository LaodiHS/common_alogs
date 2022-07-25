#include <algorithm>
#include <any>
#include <cmath>
#include <functional>
#include <iostream>
#include <iterator>
#include <map>
#include <memory>
#include <numeric>
#include <random>
#include <set>
#include <string>
#include <unordered_map>
#include <utility>
#include <vector>
// tests

#include <stdio.h>
typedef unsigned long long LONG;

std::vector<std::vector<int>> derang(9);
std::map < std::vector<int>, std::vector<int>> dam;
int k = 0;
LONG deranged(int depth, int len, int *d, int show)
{
    int i;
    char tmp;
    LONG count = 0;

    if (depth == len)
    {

        if (show)
        {
            for (i = 0; i < len; i++){
                putchar(d[i] + 'a');
            derang[k].push_back(d[i]);
            
            }
            putchar('\n');
            dam[derang[k]] = derang[k]; 
            k++;
        }
        
        return 1;
    } 
   
    for (i = len - 1; i >= depth; i--)
    {
        if (i == d[depth])
            continue;

        tmp = d[i];
        d[i] = d[depth];
        d[depth] = tmp;
        count += deranged(depth + 1, len, d, show);
        tmp = d[i];
        d[i] = d[depth];
        d[depth] = tmp;
    }
    return count;
};

LONG gen_n(int n, int show) {
  LONG i;
  int a[1024]; /* 1024 ought to be big enough for anybody */

  for (i = 0; i < n; i++) a[i] = i;
  return deranged(0, n, a, show);
};

LONG sub_fact(int n) {
  return n < 2 ? 1 - n : (sub_fact(n - 1) + sub_fact(n - 2)) * (n - 1);
};

int findDerangement(int n) {
  long long res = 1;
  for (int i = 1; i <= n; ++i) {
    res = (i * res + (i % 2 == 0 ? 1 : -1)) % 1000000007;
  }
  return res;
};

int main() {
  int i;

  printf("Deranged Four:\n");
  gen_n(4, 1);

  // printf("\nCompare list vs calc:\n");
  // for (i = 0; i < 10; i++)
  //         printf("%d:\t%llu\t%llu\n", i, gen_n(i, 0), sub_fact(i));

  // printf("\nfurther calc:\n");
  // for (i = 10; i <= 20; i++)
  //         printf("%d: %llu\n", i, sub_fact(i));
  long long deranged = findDerangement(4);

  // arr;


//batman  

  std::vector<int> arr = {1, 2, 3, 4};
  //     derange(arr);
  // use
  // rencontres numbers
  // to make the selections to make the selections  random
  // must be sorted dec

  std::vector<int> circuit{8, 7, 2, 1};
  int width = circuit.size();
  
  int move = 0;
  int cycle = 0;
  int rotation = circuit.size();
  int forward = 0;
  auto vec = dam.begin();
 
 
  int seed = vec->second[forward++];
  while (move != width)
  {  
       seed = vec->second[forward++ % rotation ];
      while (!circuit[seed]){
          seed++;
        
      }

      circuit[seed % rotation]--;
      if (!circuit[ rotation-1] )
      {
          forward = 0; 
          vec++;

          rotation--;
          move++;
          seed = vec->second.at(move);
          continue;
      }
      
   
  };
};

