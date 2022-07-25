#include <iostream>
#include <vector>
#include <bits/stdc++.h> 
using namespace std;
class Solution
{
  public:
    vector<int> intersection(std::vector<int> &l1, std::vector<int> &l2)
    {
        vector<int> result;
        
        sort(l1.begin(), l1.end()); 
        // assume sorted
        sort(l2.begin(), l2.end());
         // assume sorted
        int l = 0, r = 0;
        while (l < l1.size() && r < l2.size())
        {
            int left = l1[l], right = l2[r];
            if (left == right)
            {
                result.push_back(right);
                while (l < l1.size() && l1[l] == left)
                    l++;
                while (r < l2.size() && l2[r] == right)
                    r++;
                continue;
            }
            if (left < right)
            {
                while (l < l1.size() && l1[l] == left)
                    l++;
            }
            else
                while (r < l2.size() && l2[r] == right)
                    r++;
        }
        return result;
    }
};

int main()
{
    Solution m;

vector <int>vec1{1,2,3,4,5,6};
vector <int>vec2{5,6,7,8,9,10};
vector <int> result = m.intersection(vec1, vec2);
for(int i = 0; i< result.size(); i++){
    cout << result[i];
}

        return 0;
}
