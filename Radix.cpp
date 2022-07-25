
#include <string.h>
#include<istream>
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;


void wiggleSort(vector<int>& nums) {
    int n = nums.size();
    
    // Find a median.
    auto midptr = nums.begin() + n / 2;
    nth_element(nums.begin(), midptr, nums.end());
    int mid = *midptr;
    
    // Index-rewiring.
    #define A(i) nums[(1+2*(i)) % (n|1)]

    // 3-way-partition-to-wiggly in O(n) time with O(1) space.
    int i = 0, j = 0, k = n - 1;
    while (j <= k) {
        if (A(j) > mid)
            swap(A(i++), A(j++));
        else if (A(j) < mid)
            swap(A(j), A(k--));
        else
            j++;
    }
}






int main(){ 

vector<int>nums = {7,8,9,5,4,6,3,2,1};

wiggleSort(nums);


for(int i = 0; i<nums.size(); i++ ){

cout<< nums[i] << "\n"; 


}



return 0; 


}