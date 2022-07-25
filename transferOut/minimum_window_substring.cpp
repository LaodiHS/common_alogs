#include <vector>
#include <string>
#include <chrono>
#include<bits/stdc++.h> 
using namespace std;
static int x = [](){
    cin.tie(NULL);
    ios::sync_with_stdio(false);
    return 0;
}();

class Solution {

public:
    string minWindow(string s, string t) {
        if(s.empty()) {
            return "";
        }
        
        vector<int> map(128, 0);
        int count = 0;
        for (auto & c : t) {
            map[c]++;
            count++;
        }
        
        int start = 0, end = 0, head = 0, d = INT_MAX;
        
        while(end < s.size()) {
            if (map[s[end++]]-- > 0) {
                count--;
            }
            
            while (count == 0) {
                if (end - start < d) {
                    d = end - start;
                    head = start;
                }
                if(map[s[start++]]++ >= 0) {
                    count++;
                }
            }
            
        }
        
        return d != INT_MAX ? s.substr(head, d) : "";
    }
};


int main(){

string s =  "ADOBECODEBANC";
string t = "ABC";

Solution * obj = new Solution;
auto start = chrono::high_resolution_clock::now(); 
  string m =   obj -> minWindow(s,t);
  auto stop = chrono::high_resolution_clock::now(); 
  auto duration = chrono::duration_cast<chrono::microseconds>(stop - start);
cout << "Time taken by function: " << duration.count() << " microseconds" << endl; 
  cout << "answer is: "<< m << "\n";

    return 0; 
}