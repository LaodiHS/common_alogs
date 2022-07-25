//#callbacks c++ #doubly linked list

#include <vector>
#include <iostream>
using namespace std;

struct node
{
    int val;
    struct node *right;
    struct node *left;
    node()
    {
        val = 0;
        left = NULL;
        right = NULL;
    }
};

class Solution
{

public:
    template <class Callback>
    node *traverse(node *n, Callback f)
    {
        if (!n)
            return 0;
        node *l = n->left;
        node *r = n->right;

        traverse(l, f);
        f(n);
        traverse(r, f);
    };

    node *treeToList(node *n)
    {
        node *prev = NULL;
        node *head = NULL;
   
        traverse(n, [&](node *cur) {
            cur->left = prev;
            if (prev)
                prev->right = cur;
            else
                head = cur;
            prev = cur;
        });
        return head;
    }

    node *toBinaryTree(vector<int> &nums)
    {
        return bind(nums, nums.size() - 1);
    };

    struct node *bind(vector<int> &nums, int hi, int lo = 0, node *obj = new node())
    {
        if (lo > hi)
            return 0;

        int mid = lo + ((hi - lo) >> 1);
        obj->val = nums[mid];
        obj->left = bind(nums, mid - 1, lo, new node());
        obj->right = bind(nums, hi, mid + 1, new node());
        return obj;
    }

    bool explore(struct node *obj)
    {
        if (!obj)
            return 0;

    
        explore(obj->left); 
           // explore in order
        //cout << obj->val << "\n";
        explore(obj->right);
    };
};

int main()
{
    Solution *obj = new Solution();

    int i = 50;
    vector<int> arr;

    while (i--)
        arr.push_back(50 - i);

    node *binaryTree = obj->toBinaryTree(arr);

    obj->explore(binaryTree);

    node *head = obj->treeToList(binaryTree);

    while (head)
    {

        cout << head->val << "\n";

        head = head->right;
    }
    return 0;
}