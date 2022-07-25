#include<vector>

#include<iostream>




int main(){

std::vector<int>vec;
vec.reserve(300);

std::vector<std::vector<int> > arr{{1,2,3},{2,3},{3}};
vec.push_back(0);


auto begin = vec.begin();






while(begin != vec.end() && *begin < arr.size()) {

for(auto adj : arr[*begin])
vec.push_back(adj);

begin++;



}


for(auto val: vec){

std::cout << val << std::endl;


}










}