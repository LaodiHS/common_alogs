#include<iostream>
#include<map>
#include<math.h>
using namespace std;

int main(){
map<int, int>tree;
int l= 200;
int arrTree[1000]={0};
for(int i = 0; i< l; i++){

 arrTree[(i-1)>>1] = (l-i) >>1;
tree[i] = i;
 (l - i)/2;

}


for(auto val : arrTree){
    cout << val << endl;
}


auto m = tree.find(2);
auto f = tree.begin();
cout << &(*m) - &(*f) << endl;



}
#include <cmath>
