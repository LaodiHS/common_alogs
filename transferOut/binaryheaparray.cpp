#include<iostream>
#include<math.h>

int right (int K){
return 2 * K+1;
}

int left (int K){
return 2 * K+2;
}



int main(){


int arr[]={1,5,3,7,9,8};

int sorted[6]={0};


for(int i = 0; i < 6; i++){
if(left(i) >= 6)continue;


sorted[2*i+1] = arr[left(i)];
sorted[2*i+2] = arr[right(i)];


}
 

for(auto i : sorted){


std::cout << i << std::endl;

}


}