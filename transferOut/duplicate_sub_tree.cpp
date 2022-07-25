
#include <stdio.h>
#include<stdlib.h>
#include<string>
#include<iostream>
#include<vector>
#include<unordered_map>

using namespace std;

//simple solution using strings as hash could be faster 

class Solution {
public:
    unordered_map<string, int>m;
    vector<TreeNode*>result;
    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
       traverse(root);
        return result;
    };
 string traverse(TreeNode* node){
        if(!node)return "" ; 
        string hash = traverse(node -> left) + ',' +  traverse(node -> right) + ',' + to_string(node -> val);
        if(++m[hash] == 2)result.push_back(node);
        return hash; 
    }
    
    
};








// imitate string function using pointers 





    struct TreeNode* createNode(int i);
    
    struct TreeNode {
     int val;

     struct TreeNode *left;
     struct TreeNode *right;
    };
    
    struct TreeNode* createNode(int i)
    {   
        struct TreeNode* temp;
        temp = (struct TreeNode*)malloc(sizeof(struct TreeNode));
        temp-> val = i;
        temp-> right = NULL;
        temp-> left = NULL;
        return temp;
    }

class Solution {
public:
    unordered_map<unsigned long, int>m;
    vector<TreeNode*>result;
    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
       traverse(root);
        return result;
    };
 string traverse(TreeNode* node){
        if(!node)return "" ; 
     
     
        string  str = traverse(node -> left) + ' ' +  traverse(node -> right) + ' ' + to_string(node -> val);
        char * point=   toChar(str);
       
       
       
        unsigned long hashed = hashto(point);
        if(++m[hashed] == 2)result.push_back(node);
        return str; 
    }
    
    unsigned long hashto( char *str)
    {
        unsigned long hashe = 5381;
        int c;

        while (c = *str++)
            hashe = ((hashe << 5) + hashe) + c; /* hash * 33 + c */
        // delete[] str;
        
        return hashe;
    }
    
    
    char * toChar(string str){
        
        char * writable = new char[str.size() + 1];
        std::copy(str.begin(), str.end(), writable);
         writable[str.size()] = '\0';   // don't forget the terminating 0
        return writable;
      

// don't forget to free the string after finished using it

        
        //delete[] writable;
        
    }
    
};


































// This solution builds up on the fantastic work of @Danile, @StefanPochman. This C++ implmentation uses a bitset that encodes the root's value in the most significant bits, 
//followed by a concatenation of the left's node id and the right node's id. 
//Since these node id's are actually just an incremened counter we can have as many unique ids as supported by the counter's underlying type.
// Unlike other C++ solutions which used a long or some other 64-bit primitive POD, I used bitset which is able to acomodate 64 bits for both
// left and right child node ids and the full 32 bits for the root's value. This allows the solution to scale well beyond 2^16 nodes.

// Here's the 8ms submission that seems to currently beat 100%.



class Solution {
public:
    using id_type = bitset<8*(2*sizeof(uint64_t) + sizeof(int))>;
    const int ValByteOffset = 16*sizeof(uint64_t);
    const int IdByteOffset = 8*sizeof(uint64_t);
    
    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
        unordered_map<id_type, pair<uint64_t, int>> tree_map;
        vector<TreeNode*> result;
        getId(root, tree_map, result);
        return result;
    }
    
private:
    uint64_t getId(TreeNode* root, unordered_map<id_type, pair<uint64_t, int>>& tree_map, vector<TreeNode*>& result)
    {
        if (root == nullptr) return 0UL;
        
        id_type id = id_type(root->val) << ValByteOffset | id_type(getId(root->left, tree_map, result)) << IdByteOffset | id_type(getId(root->right, tree_map, result));
        auto it = tree_map.find(id);
        if (it == tree_map.end())
            it = tree_map.insert({id, {tree_map.size() + 1, 0}}).first;
        
        if (++it->second.second == 2)
            result.push_back(root);

        return it->second.first;
    }
};










class Solution {
    struct representation {
        TreeNode* root;
        int left;
        int right;
        bool operator== (const representation& rep) const {
            return root->val == rep.root->val && left == rep.left && right == rep.right;
        }
    };
    struct h {
        size_t operator()(const representation& rep) const {
            return (uint64_t)rep.root->val * 13 + (uint64_t)rep.left * 101 + (uint64_t)rep.right * 7;
        }
    };
    int check(TreeNode* root, unordered_map<representation, pair<int, int>, h>& shapes, int& nextID) {
        if (root == NULL) return 0;
        representation rep{root, check(root->left, shapes, nextID), check(root->right, shapes, nextID)};
        auto it = shapes.find(rep);
        if (it == shapes.end()) {
            shapes.insert({rep, {nextID, 1}});
            return nextID++;
        }
        it->second.second++;
        return it->second.first;
    }
public:
    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
        unordered_map<representation, pair<int,int>, h> shapes;
        int nextID = 1;
        check(root, shapes, nextID);
        vector<TreeNode*> res;
        for (auto it = shapes.begin(); it != shapes.end(); it++)
            if (it->second.second > 1)
            res.push_back(it->first.root);
        return res;
    }
};

#if 0
class Solution {
public:
    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
        if (root == nullptr) return {};
        
        unordered_map<string, int> hashmap;
        vector<TreeNode *> res;
        helper(root, hashmap, res);
        
        return res;
    }
    
private:
    string helper(TreeNode *root, unordered_map<string, int> &hashmap, vector<TreeNode *> &res) {
        if (root == nullptr) 
            return "#";
        
        string id = std::to_string(root->val) + 
            helper(root->left, hashmap, res) +
            helper(root->right, hashmap, res);
        
        hashmap[id]++;
        if (hashmap[id] == 2)
            res.push_back(root);
        
        return id;
    }
};
#endif
/************************************
1. brutal...
*************************************/
#if 0
class Solution {
public:
    unordered_map<int,vector<pair<TreeNode*,bool>>> hashMap;
    vector<TreeNode*> res;
    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) { 
        dfs(root);
        return res;
    }
    
    void dfs(TreeNode* root){
        if(!root) return;
        
        bool isSameFlag = false;
        for(int i=0;i<hashMap[root->val].size();i++){
            isSameFlag = compareTree(root, hashMap[root->val][i].first);
            if(!isSameFlag) continue;

            if(hashMap[root->val][i].second==false){
                hashMap[root->val][i].second = true;
                res.push_back(root);
            }
            break;
        }           
        
        dfs(root->left);
        dfs(root->right);
        if(!isSameFlag)
            hashMap[root->val].push_back(move(make_pair(root,false)));
    }
    
    bool compareTree(TreeNode* root1, TreeNode* root2){
        if(root1 == root2) return true;
        if(!root1 || !root2) return false;
        return (root1->val == root2->val) && 
            compareTree(root1->left,root2->left) && 
            compareTree(root1->right,root2->right);
    }

};
#endif
//[TC1] [0,0,0,0,null,null,0,null,null,null,0]
//[TC2] [0,0,0,0,null,null,0,0,0,0,0]