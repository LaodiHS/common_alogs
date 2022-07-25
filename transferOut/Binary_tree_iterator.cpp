#include<stack>
#include<iostream>
#include<memory>

using namespace std;
struct TreeNode{
int val;
TreeNode* left;
TreeNode* right;
TreeNode():val(0), left(NULL), right(NULL) {};
};

struct BSTIterator { 
  TreeNode* root;

  BSTIterator(TreeNode* node){ root = node; };
    stack<TreeNode*>st;
    int next() { 
        while(root){
            st.push(root); 
           root = root -> left;
        };
     
    TreeNode* value = st.top();
        st.pop(); 
        root =  value->right;
        int val = value->val;
        delete value;
        return val;
    };

    bool hasNext() {
         return root || st.size();
    };
};

TreeNode * makeBinary(int arr[], int hi, int lo = 0, TreeNode* BST = new TreeNode()){
    if(lo > hi)return NULL;
     int mid = lo + (hi - lo >> 1);
     BST->val = arr[mid];
     BST->left =  makeBinary(arr, mid - 1, lo, new TreeNode());
     BST->right = makeBinary(arr, hi, mid + 1, new TreeNode());
     return BST;
}



int main(){

int arr[9] = {3,4,5,6,7,8,9,10,11};
int l = 9;
TreeNode *root = makeBinary(arr, l - 1);
BSTIterator*  Iterator = new BSTIterator(root);
while(Iterator->hasNext()){
cout << Iterator->next() << "\n"; 
    }
    
    delete Iterator;
    return 0;
}