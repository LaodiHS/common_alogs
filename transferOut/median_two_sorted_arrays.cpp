// static const auto _____ = []()
// {
//         ios::sync_with_stdio(false);
//         //cin.tie(nullptr);
//         return nullptr;
//  }();
// class Solution {
// public:
//     double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
//         double result=0;
// 		if (nums1.size()==0 || nums2.size()==0)
//         {
//             vector<int>& numVector = ( (nums1.size()==0) ? nums2 : nums1 );
// 			if (((numVector.size())%2) == 0)
// 				return double((numVector[(numVector.size()/2) -1] + numVector[numVector.size()/2])/2.0);
// 			else
// 				return double(numVector[numVector.size()/2]);
//         }
//         else
//         {
// 			int middle1=-1, middle2=-1;
// 			int totalSize = (nums1.size() + nums2.size());
        
// 			if ((totalSize%2) == 0)
// 			{
// 				middle1 = (totalSize/2)-1; middle2 = (totalSize/2);
// 			}
// 			else
// 				middle1 = totalSize/2;
			
// 			int * currentIndexPtr = NULL;
// 			int currentIndex = 0;
// 			int num1Index = 0, num2Index= 0;
// 			if(nums1[0] <= nums2[0])
// 			{
// 				currentIndexPtr = &nums1[0];
// 				num1Index++;
// 			}
// 			else
// 			{
// 				currentIndexPtr = &nums2[0];
// 				num2Index++;
// 			}
			
// 			while (middle1 != -1 || middle2 != -1 )
// 			{
//                 if (middle1 != -1)
// 				{
// 					if (currentIndex == middle1)
// 					{
// 						result = result + (*currentIndexPtr);
// 						middle1 = -1;
// 					}
// 				}
// 				else
// 				{
// 					if (currentIndex == middle2)
// 					{
// 						result = ((result + (*currentIndexPtr))/2);
// 						middle2 = -1;
// 					}
// 				}
				
// 				if ((num1Index <= nums1.size()-1) && (num2Index <= nums2.size()-1))
// 				{
// 					if (nums1[num1Index] <= nums2[num2Index])
// 					{
// 						currentIndexPtr = &nums1[num1Index];
// 						num1Index++;
// 					}
// 					else
// 					{
// 						currentIndexPtr = &nums2[num2Index];
// 						num2Index++;
// 					}
// 					currentIndex++;
// 				}
// 				else
// 				{
// 					if(num1Index <= nums1.size()-1)
// 					{
// 						currentIndexPtr = &nums1[num1Index];
// 						num1Index++;
// 					}
// 					else
// 					{
// 						currentIndexPtr = &nums2[num2Index];
// 						num2Index++;
// 					}
//                     currentIndex++;
// 				}
// 			}
//         }
//         return result;
//     }
// };



// class Solution {
// public:
//     double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
//         int n = nums1.size(), m = nums2.size();
//         if (n > m) swap(n, m), swap(nums1, nums2);
//         int first = 0, len = n;
//         while (len) {
//             int step = len >> 1;
//             int ns = first + step;
//             int ms = ((n + m + 1) >> 1) - ns;
//             if (f(nums1, ns) < f(nums2, ms - 1)) {
//                 first += step + 1;
//                 len -= step + 1;
//             } else {
//                 len = step;
//             }
//         }
//         int ns = first, ms = ((n + m + 1) >> 1) - first;

//         return (m + n) & 1
//                ? max(f(nums1, ns - 1), f(nums2, ms - 1))
//                : 0.5 * (max(f(nums1, ns - 1), f(nums2, ms - 1)) + min(f(nums1, ns), f(nums2, ms)));

//     }

//     int f(const vector<int>& v, int i) {
//         if (i < 0) return numeric_limits<int>::min();
//         if (i >= (int)v.size()) return numeric_limits<int>::max();
//         return v.at(i);
//     }
// };

// static const auto _ = []() {
//     ios::sync_with_stdio(false);
//     cin.tie(nullptr);
//     return nullptr;
// }();



// class Solution {
// public:
//     double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {        
        
//         int n= nums1.size();
//         int m = nums2.size();
//         int mid = (n+m)/2;
//         bool isEven = (n+m)%2==0;
//         int i=0,j=0,l=-1,curr;
//         int prev= n>0?nums1[0]:nums2[0];
//         curr = prev;
        
        
//         while(i<n && j<m){
//             prev=curr;
//             if(nums1[i]<nums2[j]){
//                 curr=nums1[i];
//                 i++;
//             }
//             else {
//                 curr = nums2[j];
//                 j++;
//             }
//             l++;
//             if(l==mid){
//                 if(isEven){
//                     return (prev+curr)/2.0;
//                 }
//                 else {
//                     return curr*1.0;
//                 }
//             }
//         }
        
        
//         while(i<n){
//             prev=curr;
//             curr = nums1[i];
//             i++;
//             l++;
//              if(l==mid){
//                 if(isEven){
//                     return (prev+curr)/2.0;
//                 }
//                 else {
//                     return curr*1.0;
//                 }
//             }
//         }
        
        
//          while(j<m){
//             prev=curr;
//             curr = nums2[j];
//             j++;
//             l++;
//              if(l==mid){
//                 if(isEven){
//                     return (prev+curr)/2.0;
//                 }
//                 else {
//                     return curr*1.0;
//                 }
//             }
//         }
//         return 0.0;
//     }
// };

// static const int _ = []() {
//     ios::sync_with_stdio(false);
//     cin.tie(nullptr);
//     return 0;
// }();

#pragma GCC optimize ("O3")
#define _CRT_SECURE_NO_WARNINGS
#pragma GCC optimize("Ofast")
#pragma GCC optimize("no-stack-protector")
#pragma GCC optimize("unroll-loops")
#pragma GCC target("avx,avx2,sse,sse2,sse3,ssse3,popcnt,abm,mmx,tune=native")
#pragma GCC optimize("fast-math")


static const int _ = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    return 0;
}();

class Solution {
private:
vector<int>nums1;
vector<int>nums2;

	int findKth(int k, int s1= 0, int s2 = 0){
    
    	int n1 = nums1.size();
    	int n2 = nums2.size();
    	

    	if(s1>=n1) return nums2[s2+k-1];
    	if(s2>=n2) return nums1[s1+k-1];	
    	if(k==1) return min(nums1[s1], nums2[s2]);

    	int key1 = (s1+k >>1) -1 >= n1 ? INT_MAX : nums1[s1+k/2-1];
    	int key2 = (s2+k >>1) -1 >= n2 ? INT_MAX : nums2[s2+k/2-1];
    	if(key1 < key2) return  findKth(k-k/2, s1+k/2, s2 );
    	else return findKth(k-k/2, s1, s2+k/2); 	
	}
    public:
    double findMedianSortedArrays(vector<int>& arr1, vector<int>& arr2) {
        nums1 = arr1;
        nums2 = arr2;
    	int n1 = nums1.size();
    	int n2 = nums2.size();
    	int n = n1 + n2;
    	if(n&1) return findKth(n/2+1);
    	else return (findKth(n/2+1)  + findKth(n/2)) /2.0;
    }

 };



