#include<stack>
#include <iostream>
#include<bits/stdc++.h> 
using namespace std;

struct TreeNode{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x): val(x), left(NULL), right(NULL){}
};

class Solution{
 
    TreeNode* first = NULL;
    TreeNode* second = NULL;
    TreeNode* prev = new TreeNode(INT_MIN);
public:

    void recoverTree(TreeNode* root) {
        help(root);
        swap(first->val, second->val);
    }
    
    void help(TreeNode* node){
        if(!node)  return;
        help(node->left);
        if(!first && prev->val >= node -> val)   first = prev;
        if(first && prev->val >= node -> val)   second = node;
        prev = node;
        help(node -> right);
    }


};
class SolutionTwo {
private:
    TreeNode* pre=NULL;
    TreeNode* first=NULL;
    TreeNode* second=NULL;
    
    void  inOrder(TreeNode * root){
        if(!root) return;
        inOrder(root->left);
        if(pre!=NULL && first == NULL && pre-> val >= root-> val){
            first = pre;
        }
        
        if(first != NULL && pre-> val >= root -> val){
            second = root;
            if(pre != first){
                return;
            }
        }
        pre=root;
        inOrder(root->right);
    }
    
public:
    void recoverTree1(TreeNode* root) {
        stack<TreeNode*> helper;
        TreeNode* pre=NULL;
        bool first=false;
        TreeNode *second;
        int tag=INT_MAX;
        while(root!=NULL || !helper.empty()){
            while(root != NULL){
                helper.push(root);
                root = root->left;
            }
            root=helper.top();
            helper.pop();
            if(pre != NULL && !first && pre->val >= root -> val){
                first = true;
                second = root;
                tag=root -> val;
            }
            if(!first){
                pre=root;
            }else if(root -> val < tag){
                tag=root -> val;
                second = root;
            }
            
            root= root -> right;
        }
        int tmp= pre -> val;
        pre -> val = second -> val;
        second -> val = tmp;
    }
    
    void recoverTree(TreeNode* root) {
        inOrder(root);
        int tmp= first-> val;
        first -> val= second-> val;
        second -> val = tmp;
    }




};


