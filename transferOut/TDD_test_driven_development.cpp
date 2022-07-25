#include<iostream>
#include<cassert>

struct Btree{
int val;
Btree* left,* right;

};




Btree * maketree(int value){
    return nullptr;
};

int main(){

// test 1
Btree * bst = maketree(8);
assert( bst != nullptr ); //should not be null
std::cout<< "hello" <<std::endl;

}