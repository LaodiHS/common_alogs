// queue

#include <vector>
#include <algorithm>
#include <iostream>
#include <map>
#include <queue>
#include<limits>
using namespace std;





//  Definition for a binary tree node.
  struct TreeNode {
      int val;
      TreeNode *left;
      TreeNode *right;
      TreeNode(int x = 0) : val(x), left(nullptr), right(nullptr) {}
    static TreeNode *expand(vector<int> nums, int hi, int lo = 0, TreeNode *node = new TreeNode())
    {
        if (lo > hi) return NULL;
        int mid = lo + ((hi - lo) >> 1);
        node->val = nums[mid];
        node->left = expand(nums, mid - 1, lo, new TreeNode());

        node->right = expand(nums, hi, mid + 1, new TreeNode());
        return node;
    }
    static TreeNode *toBinary(vector<int> num)
    {
        TreeNode *node = expand(num, num.size() - 1);
        return node;
    }

  };
 
class Solution {
public:
  vector<vector<int>> verticalOrder(TreeNode* root) {
    vector<vector<int>> output;
    if(!root){
        return output;
    }
    map<int, vector<int>> m;
    queue<pair<int, TreeNode*>> q;
    q.push(make_pair(0,root));
    while(!q.empty()){
        int size = q.size();
        for(int i = 0;  i < size; i++){
            TreeNode* t = q.front().second;
            int tmp = q.front().first;
            q.pop();
            m[tmp].push_back(t->val);
            if(t->left){
                q.push(make_pair(tmp - 1, t->left));
            }
            if(t->right){
                q.push(make_pair(tmp + 1, t->right));
                
            }
        }
    }
    for(auto& v : m){
        output.push_back(v.second);
    }
    return output;
    
}    
};




int main()
{

    int i = 6;
    vector<int> arr{3,9,20,0,0,15,7};
    Solution *treeing{};
    int hio = arr.size() - 1;
    TreeNode *node = TreeNode::toBinary(arr);
    vector<vector<int>> c = treeing->verticalOrder(node);
    for(int i = 0; i < c.size(); i++){
       for(int k = 0; k< c[i].size(); k++){
          cout<< c[i][k]<<"\n"; 
       }
    }
  

  

    return 0;
}














