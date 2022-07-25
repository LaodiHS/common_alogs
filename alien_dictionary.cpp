
#include <string>
#include <vector>
#include<queue>
#include<iostream>
using namespace std;

// treat list as dependency on rows and move across the list like a matrix with each row pair 
// treated as a dependency pair
			
	
	
// while traveling the list cout the inderee edge on the  dependency/ target node 
				
// 				   //  |
//            //  V    
//             // w r t
//             // |
//                V
//             // w r f
            
//            //    |
//            //    V    
//             // w r t
//             //   |
//            //    V
//             // w r f  
            
//              //    |
//              //    V    
//             // w r t
//               //   |
//              //    V
//             // w r f     
             
// 						 //t->f   indegree value of f is 1
						 
// 						 if the source list is longer than the dependency list and all letters match it means there is a circular dependancy since the dictionary is out of order.
						 
class Solution {
public:
    string alienOrder(vector<string>& words) {
     
     int len = words.size();
        if(len==0) return "";
        if(len==1) return words[0];
        vector<int> inDegree(26,0);
        vector<vector<int>> edge(26,vector<int>());
        for(int i = 0;i < words.size() - 1 ;i++) {
           
        bool circular = true;
        string &a = words[i];
        string &b = words[i+1];
            
            int l = 0, r = 0;
        while(l < a.size() && r < b.size()) {
            if(a[l] != b[r]) {
                edge[a[l] - 'a'].push_back(b[r]-'a');
                inDegree[b[r] - 'a']++;
                circular = true;
                break;
            }
            l++;
            r++;
            
             if(a.size() > b.size()) 
                 circular=false;
        }
      
    
            if(!circular) return "";
        }
        
        

        
        
        int flag[26]={0};
        queue<int> Queue;
        for(int i=0; i < len; i++) {
            for(char c : words[i]) {
                flag[c-'a']++;
            }
        }
        
        int nodes = 0;
          for(int i = 0; i < 26; i++) {
            if(flag[i] > 0) {
                nodes++;
                if(inDegree[i] == 0) {
                    Queue.push(i);
                }
            }
        }
        
        
        
        
        string res = "";
        while(!Queue.empty()) {
            int cur=Queue.front();
            res += (char)(cur+'a');
            Queue.pop();
            --nodes;
            for(int i = 0; i< edge[cur].size() ;i++) {
                int nex = edge[cur][i];
              
                if(--inDegree[nex] == 0) {
                    Queue.push(nex);
                 
                }
            }
    
        }
        
        cout << nodes; 
  
        return nodes == 0 ? res : ""; 
     
    }

  
};

