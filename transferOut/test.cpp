#include <iostream>
#include <vector>
#include <math.h>
using namespace std;
class NumArray
{
  private:
	vector<int> nums;
	vector<int> v;

  public:
	NumArray(vector<int> nums) : nums(nums), v(ceil(sqrt(nums.size())))
	{
		for (size_t i = 0; i < nums.size(); ++i)
		{
			v[i / v.size()] += nums[i];
		}
	}

	void update(int i, int val)
	{
		v[i / v.size()] += val - nums[i];
		nums[i] = val;
	}

	int sumRange(int i, int j)
	{
		int t = 0;
		size_t m = i / v.size(), n = j / v.size();
		if (m >= n)
		{
			for (size_t k = i; k < (size_t)j + 1; ++k)
			{
				t += nums[k];
			}
		}
		else
		{
			for (size_t k = i; k < (m + 1) * v.size(); ++k)
			{
				t += nums[k];
			}
			for (size_t k = m + 1; k < n; ++k)
			{
				t += v[k];
			}
			for (size_t k = n * v.size(); k < (size_t)j + 1; ++k)
			{
				t += nums[k];
			}
		}
		return t;
	}
};
int main()
{
	//auto gucciGang = []() {std::ios::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr); return 0; }();

	vector<int> nums{1, 3, 5};

	NumArray *obj = new NumArray(nums);

	int param_1 = obj->sumRange(0, 2);

	obj->update(1, 2);

	int param_2 = obj->sumRange(0, 2);

	cout << param_1;
	cout << param_2;
	return 0;
}