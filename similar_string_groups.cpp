// Let's say we have the anagrams(vertexes) ["tars", "rats", "arts", "star"] but one unique property of these anagrams is that they can be connected to one another by only swapping two letters once. With that edge being a single swapping of letters in that word. Such that a single swap represents an edge to any other anagram. 

// So for example "tars"->"rats"->"arts", but "star"  would not map to anything, because no edge leads to it (that being a single swap). 

// graph 
// graph generation
// edge expantion 
// vertext generation 
// homomorphism


// Wouldn't this be considered homomorphism?
// The logic being that "tars"  maps to "rats", because there is an edge connecting them, that edge being a single swap. Similarly, "rats" has an edge to "arts". 
// However, there is no edge (that is equal to one swap) that leads to "star" from any of the anagrams in our set such that any other anagram(vertex) maps directly to it.
// Am I correct in saying that this mapping of anagrams to other anagrams in this fashion is a homomorphism since there is an edge ( that being a single swap) to another anagram (vertex) in the bipartite set of anagrams(vertexes)? 
//Would I also be correct in saying  that anagrams not connected by an edge are separate components in our graph?
#include <vector>
#include<unordered_set>
#include<numeric>
#include<queue>
using namespace std;
class Solution {
 vector<int> fa;
public:
     int numSimilarGroups(vector<string>& A) {
      if(A.empty()) return 0;
// if the anagram is short generate the edges to find the anagrams is tervial 
//otherwise if the anagram is long use union find. Also when they say anagrams they don't mean words that actually exist.
         
         // with union find I need to check against every word 
// with 
      if(A[0].size()<21) return BFS(A);
         else return unionFind(A);
    }
	bool check(string& str1, string& str2) {
		int len = str1.size(), cnt = 0;
		for (int i = 0; i < len; ++i) {
			if (str1[i] != str2[i]) {
				cnt++;
				if (cnt > 2)
					return false;
			}
		}
		return true;
	}
	int find(int x) {
		return fa[x]== x ? x : find(fa[x]);
	}
    int unionFind(vector<string>& A) {
        int n = A.size();
        
       fa.resize(n);
       iota(begin(fa), end(fa),0); 
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if (check(A[i], A[j])) {
					fa[find(i)] = find(j);
                }
            }
        }
        
    int ans=0;
     for(int i = 0; i < n; i++){
         if(fa[i]==i)
             ans++;
     }
        return ans;
    }
// use a set for values values less than 2
    int BFS(vector<string>& A) {
		unordered_set<string> sA(A.begin(), A.end());
		queue<string> q;
		int n = 0;
		while (!sA.empty()) {
			q.push(*(sA.begin()));
			sA.erase(sA.begin());
			n++;
			while (!q.empty()) {
				string s = q.front(); q.pop();
//walk the string from every point in the graph and assemble the string from the hamiltonian cycle 
				for (int i = 0; i < s.size(); i++){
					for (int j = i + 1; j < s.size(); j++) {
// if char dep not equal with it's next value check if in set add to queue if it is and remove from set.
// this improves performance because if the first string length is small generating the tree is teriveal for all anagrams and traversing the tree to remove them. 
						if (s[i] != s[j]) {

							swap(s[i], s[j]);
                          
                            // if this swaped value exists in the string
							if (sA.count(s)) {
                                // push it into our queue
								q.push(s);
                                // and erase it from our set
								sA.erase(s);
							}
                            // swap back the values after the check
							swap(s[i], s[j]);
                            // if our set is empty we return the number of iterations we had to make to make over our tree set before eleminating all the indegrees
							if (sA.empty()) return n;
						}
					}
                }
			}
		}
		return n;
	}
};

// Strings A and B are K-similar (for some non-negative integer K) if we can swap the positions of two letters in A exactly K times so that the resulting string equals B.

// Given two anagrams A and B, return the smallest K for which A and B are K-similar.

// Example 1:

// Input: A = "ab", B = "ba"
// Output: 1
// Example 2:

// Input: A = "abc", B = "bca"
// Output: 2
// Example 3:

// Input: A = "abac", B = "baca"
// Output: 2
// Example 4:

// Input: A = "aabc", B = "abca"
// Output: 2
// Note:

// 1 <= A.length == B.length <= 20
// A and B contain only lowercase letters from the set {'a', 'b', 'c', 'd', 'e', 'f'}

// k_similar strings 

// string elemination and swap untill we get equivlant order 


class Solution {
public:
    int kSimilarity(string A, string B) {
     

        if(A.size() != B.size())
        {
            return -1;
        }

        for(int i=0; i < A.size(); i++)
        {
            vector<int>chan;
            // if both string values are the same continue searching both strings
            if(A[i] == B[i])continue;
            // if both index values are not equal we search all string values in our target string starting from
			// the second index
                for(int j = i + 1; j < A.size(); j++)
                    
                {
// if the letter in our first string is equal to the same letter j index values away in our second string 
// and both strings at their j index are not equal to one another then we add the j index to our change vale array
                    if(A[i] == B[j] && A[j] != B[j])
                        
                    {
                           
                        chan.push_back(j);
                    }
 // if the letter in our first string is equal to the same letter j index values away in our second string
 // and the letter at our j index is equal the index i (starting index of the second string with the missmatch) letter
 // we will swap the positions in the second string and remove the matching charcater when exploring the sub graph  of both targets 
                    if(A[i] == B[j] && A[j] == B[i])
                    {
                           
                        swap( B[i], B[j] );
                        return 1 + kSimilarity( A.substr(i+1), B.substr(i+1) );
                    }
                    
                }
                int mini = INT_MAX;

                for(int k=0; k < chan.size(); k++)
                {
                    swap( B[i] , B[chan[k]] );

                    mini= min(mini, 1 + kSimilarity( A.substr(i+1) , B.substr(i+1) ) );

                    swap( B[i], B[chan[k]] );
                }

                return mini;
            
        }
        return 0;
    }
};