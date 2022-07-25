#include<vector>
#include<iostream>
#include<unordered_set>
#include<unordered_map>
#include<algorithm>
#include<queue>
using namespace std;


vector<int> restore(vector<int> arr){

unordered_map<int,unordered_set<int>>graph(arr.size());
   // reverse(arr.begin(), arr.end());

for(int i = 0; i < arr.size(); i++){
//    cout << arr[i] << endl;
    for(int j = 0; j < i; j++ ){
     if(arr[i] > arr[j]){
      // cout << arr[i] << "\t" << arr[j] << endl;
     
      graph[arr[i]].insert(arr[j]); 
         }
    }
}

int len = arr.size();
struct explore{
int visit;
int count;
vector<int>list;
explore(int v, int c, const vector<int>& l):visit(v),count(c),list(l){}
};

queue<explore>Queue;
Queue.push({(int)arr.size(), arr[(int)arr.size()],vector<int>()});


while(!Queue.empty()){
auto explore = Queue.front(); Queue.pop();
  
int node = explore.visit; int count = explore.count; vector<int> edges = explore.list;  


if(count == 0 && edges.size() == len){
return edges;
}

if(count == 0 || edges.size() == len) continue;
for(auto next : graph[node]){
// cout<< next << endl;


for(int i = 1; i<= arr.size()-1; i++){
    if(next - i >= 0){


    edges.push_back(next - i);
Queue.push({
next - i,
count - next,
edges
});

    }
}



}
return vector<int>();

};
}
int main(){

vector<int>arr{0,1,1,1,10};


for(auto val : restore(arr)){

    cout << val << endl;
};


}