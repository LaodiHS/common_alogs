#include<vector>
#include<cmath>
#include<iostream>
#include<set>
using namespace std;

class Solution{
struct node{
 int val;
node * next;
node(int x) : val(x){};
  
};

vector<int>objArr;
public:
vector<int>result;
template<class T>

vector<int> Sort(T arr){
     objArr.reserve(arr.size());
    objArr = arr; 



node* obj = split(0, arr.size() - 1);  

  while(obj){
    result.push_back(obj->val);
    obj = obj->next; 
  }
  return result; 
}

node* split(int lo, int hi){
  if(lo == hi){
  return new node(objArr[lo]);
  }

  int mid = lo + hi >> 1;
  node* list1 = split(lo , mid);
  node* list2 = split(mid + 1, hi);
  return merge(list1, list2);
}

node* merge(node* list1, node* list2){
        if(!list1)return list2;
        if(!list2)return list1;
        if(list1 -> val <= list2->val){  
           list1 -> next = merge(list1 -> next, list2);
          return list1;
          }
        else {
         list2 -> next = merge(list2 -> next, list1);
            return list2;      
        }
      }
};

// constructor in place memory no copy
struct obj
{
float x,y,z;
obj (float x, float y, float z):x(x),y(y),z(z){}

obj(const obj &obj ) :x(obj.x),y(obj.y), z(obj.z){
std :: cout << "copy" << endl;
}

};

template<typename T>
vector<int>merge(T A, T B){
set<int> Set;




};


int main(){

vector<obj>objs;
objs.reserve(3);
 objs.emplace_back(1,2,3);
 objs.emplace_back(4,4,5);
 objs.emplace_back(6,7,8);
}







// int main() {
// vector<int>arr{4, 5, 6, 7, 8, 9, 10, 1, 1, 2, 3};

// Solution obj{};
// vector<int> sorted = obj.Sort(arr);

// for(auto val : sorted){

//  cout << val << endl; 
 
// }

// }