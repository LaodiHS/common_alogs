#include <iostream>
#include <vector>
#include <stdlib.h>
using namespace std;

// merge sort
struct ListNode{
    int val;
    struct ListNode *next;
};
struct ListNode* createNode(int i)
    {  
        struct ListNode* temp;
        temp = (struct ListNode*)malloc(sizeof(struct ListNode));
        temp->val = i;
        temp->next= NULL;
        return temp;
    }
class Solution
{
public:
    ListNode *mergeKLists(vector<ListNode *> &lists)
    {
        if (lists.empty())
        {
            return nullptr;
        }
        return merge(0, lists.size() - 1, lists);
    }

    ListNode *merge(int lo, int hi, vector<ListNode *> &lists)
    {
        if (lo == hi)return lists[lo];
        int mid = lo + hi >> 1;
        ListNode *left = merge(lo, mid, lists);
        ListNode *right = merge(mid + 1, hi, lists);
        return mergeTwoLists(left, right);
    }

    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2)
    {
        if (l1 == nullptr)return l2;
        if (l2 == nullptr) return l1;
        if (l1->val <= l2->val)
        {
            l1->next = mergeTwoLists(l1->next, l2);
            return l1;
        }
        else
        {
            l2->next = mergeTwoLists(l1, l2->next);
            return l2;
        }
    }
};
int main(){
vector<int>vec = {4,5,6,7,8,9,10,1,1,2,3};
vector<ListNode*>list;
for(size_t i = 0; i < vec.size(); i++){
  list.push_back(createNode(vec[i])); 
}
Solution* obj = new  Solution();
ListNode* sor = obj -> mergeKLists(list);
while(sor){
cout << sor -> val;
sor = sor -> next;
}
    return 0;
}