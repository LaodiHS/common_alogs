#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
struct node
{
  int val;
  node *right = NULL;
  node *left = NULL;
};

struct Solution
{
  int diameter = 0;

  int diameterTree(node *obj)
  {
    explore(obj);
    return diameter;
  }

  int explore(node *obj)
  {
    if (!obj)
      return -1;
    int left = explore(obj->left) + 1;
    int right = explore(obj->right) + 1;
    diameter = max(diameter, left + right);
    return max(left, right);
  }

  node *toBinary(vector<int> &nums)
  {
    if (!nums.size())
      return NULL;
    return expandObject(nums, nums.size() - 1);
  }

  node *expandObject(vector<int> nums, int hi, int lo = 0, node *obj = new node())
  {
    if (lo > hi)
      return NULL;
    int mid = lo + ((hi - lo) >> 1);

    obj->val = nums[mid];

    obj->left = expandObject(nums, mid - 1, lo, new node());
    obj->right = expandObject(nums, hi, mid + 1, new node());
    return obj;
  }
};

int main()
{

  Solution *path = new Solution();
  int i = 51;
  vector<int> arr;
  while (i--)
    arr.push_back(50 - i);

  node *tree = path->toBinary(arr);

  int diameter = path->diameterTree(tree);

  cout << diameter;
  return 0;
};