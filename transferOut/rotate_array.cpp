#include <vector>
#include<algorithm>
using namespace std;


class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        solutionI(nums, k);
        // solutionII(nums, k);
        // solutionIII(nums, k);
    }

private:
    // Solution I: O(n), O(n)
    void solutionI(vector<int>& nums, int k) {
        int l = nums.size();
        k %= l;
        if (k == 0) return;
        vector<int> copy(nums);
        for (int i = 0; i < l; i++) {
            nums[i] = copy[(i + l - k) % l];
        }
    }

    // Solution II: O(n), O(1)
    void solutionII(vector<int>& nums, int k) {
        int l = nums.size();
        k %= l;
        if (k == 0) return;
        reverse(nums.begin(), nums.begin() + l - k);
        reverse(nums.begin() + l - k, nums.end());
        reverse(nums.begin(), nums.end());
    }

    // Solution III: O(n), O(1)
    void solutionIII(vector<int>& nums, int k) {
        int l = nums.size();
        k %= l;
        if (k == 0) return;
        // move all elements k steps to the right
        int cc = 0; // counter, do it l times
        int i = 0, p = i, holding = nums[i];
        while (cc < l) {
            p = (p + k) % l;
            if (p == i) {
                nums[i] = holding;
                // find cycle
                i++;
                p = i;
                holding = nums[i];
            } else {
                int temp = nums[p];
                nums[p] = holding;
                holding = temp;
            }
            cc++;
        }
    }};