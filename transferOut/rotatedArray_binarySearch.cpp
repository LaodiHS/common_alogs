// #include "rotatenumsay.h"
#include <iostream>
using namespace std;

class search_rotated
{
public:
   int *nums;
   int len;
   template <class T, int N>
   search_rotated(T (&x)[N]) : nums(x), len(N){};
   int search(int target)
   {
      int lo = 0;
       int hi = len;
      while (lo < hi)
      {
         const int mid = (lo + hi) >> 1;
       
         bool section = nums[0] > nums[mid];
         bool targetSection = nums[0] > target;

         if (section == targetSection)
         {
            if(nums[mid] > target) hi = mid; 
             else lo = mid + 1;
         }
         else if (targetSection) lo = mid + 1;
         else hi = mid;
         
           if (target == nums[mid] )return mid;
      }
  
      return -1;
   }
};

int main()
{
   int nums[7] = {4,5,6,7,1,2,3};
   search_rotated obj(nums);
   int target = obj.search(3);
   cout << target << "\n";
   return 0;
}
