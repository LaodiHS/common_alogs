#include <iostream>
using namespace std;








int main(){

int val[10] = {1,2,3,4,5,6,7,8,9,10};

 
 int *a = val +1;
 int *b = val + 2;
 int *c = val + 3;
int *d  = val + 4;
cout<< a << "\t" << b <<"\t" << c <<"\t" << d <<"\t" << "\n";

// dereferenceing pointers
cout<< *val+3 << "\n";





return 0;

}