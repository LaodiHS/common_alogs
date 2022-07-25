#include <set>
#include<vector>
#include<iostream>
#include<climits>
class Solution {
 public:
template<typename T>
void test(T values){
std::set<std::pair<int, int>>S;
    
    S.insert({3,400});
    S.insert({401,450});
    S.insert({10,20});
    S.insert({11,17});
    S.insert({2,3});


int point =12 ;



auto it = S.upper_bound({point,INT_MAX});
 if(it != S.end()){

 it--;
   std::cout << (*it).first ;
  
  
 }
 




 }
};



int main() {

Solution obj{};

std::vector<int>vec({1,2,3});
obj.test(vec); 


  return 0;
}