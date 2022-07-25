#include<iostream>
#include<map>
using namespace std;

int main(){
map<int, int>tree;
int l= 100;
for(int i =0; i< 100; i++){

tree[i] = (l - i)/2;

}

auto m = tree.find(25);
auto f = tree.rbegin();
cout <<(&(*f) - &(*m))/6<< endl;


}
