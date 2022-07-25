int search(int* nums, int numsSize, int target)    {
   
      int lo= 0;
       int hi = numsSize;
      while (lo < hi)
      {
         const int mid = (lo + hi) >> 1;

         int section = nums[0] > nums[mid];

         int targetSection = nums[0] > target;
         
         if (section == targetSection)
         {
            if(nums[mid] > target) hi = mid; 
            else lo = mid + 1;
         }
         else if (targetSection)
         {
            lo = mid + 1;
         }
         else
         {
            hi = mid;
         }
           if (target == nums[mid])return mid;
      }
      return -1;
   }