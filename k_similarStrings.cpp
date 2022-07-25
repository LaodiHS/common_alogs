// string elemination and swap untill we get equi

#include <string>
#include <vector>
#include<fstream>
#include<climits>
#include<iostream>
using namespace std;
// https://en.wikipedia.org/wiki/Factorial_number_system
// I have two string (a) "abcdefgacb" and a string (b) "babcdefgac". String b is a permutations of a. There are 10 letters in the string.
// there are two letters which repeat themselves "a" "b" "c" are repeated 2 twice and "d" "e" "f" "g" only appear once. I need to find out the minimum number of swaps it would take 
// to get from string (a) to string (b)
// But just looking at it, I first note the following: None of the letters in the second string are in the same position as the first string.
// So every letter has to be swapped -at least- once.
// And since a swap involves 2 letters, that means the lower bound is 5 swaps.
// By similar logic, the upper bound is 10 swaps.


// I have to swap 10 letters. Each swap involves 2 letters.

// I see two pairs of 'perfect' swaps.
// So that brings the upper bound to 8

// Take the first two letters.
// ab in string 1. ba in string 2
// So I with one swap, I get two letters to the right place.
// There is also a c ** b and b ** c
// This seems like a graph theory problem.
//"abcdefgacb","babcdefgac"
// The remaining 6 letters seem to be in a cycle.

// d-> c, c-> a, a->g, g->f, f->e, e-> d (look at ordering dependancies from begining to end and look for cycles)
//( the number of cycles minus the number of perfict swaps will give us the min number of swasp to the target string)
// which means we probably can't reduce the number of swaps from the upper bound.
// So 8. :smiley:
// Oh. Yeah, that makes sense.
// 'cause to do 10 letters, one at a time only takes 9


// Oh. Yeah, that makes sense.
// 'cause to do 10 letters, one at a time only takes 9
// how do the cycles give you the upper bound
// Um.
// formally, I don't know how to say it.

fstream outfile("k_similarStrings.txt"); 
class Solution {
    public:

        int kSimilarity(string A, string B, string subA= "", string subB="") {
        
    
            if(A.size() != B.size())
            {
                return -1;
            }
            
            
            outfile << A << "\t" <<   B  <<  "\n"; 
            
            outfile.flush();
            for(int i=0; i < A.size(); i++)
            {
                vector<int>chan;
                
                if(A[i] == B[i])continue;
                
                    for(int j = i + 1; j < A.size(); j++)
                        
                    {
    
                        if(A[i] == B[j] && A[j] != B[j])
                            
                        {
                               
                            chan.push_back(j);
                        }
                        
                        if(A[i] == B[j] && A[j] == B[i])
                        {
                               
                            swap( B[i], B[j] );
                            subA +=A[0];subB+=B[0];
                            return 1 + kSimilarity( A.substr(i+1), B.substr(i+1), subA, subB);
                        }
                        
                    }
                    int mini = INT_MAX;
                cout << chan.size() << endl;
    
            cout << B << "\t" <<  A  <<  "\n"; 
                if(chan.size() > 1){
                    
                    for(auto val: chan){
                        
                        cout<< "values "  << val  << " letter :" << B[val]<< "\t";
                    }
                    cout << endl;
                }
                    for(int k=0; k < chan.size(); k++)
                    {
                        swap( B[i] , B[chan[k]] );
                            subA +=A[0];subB+=B[0];
                        mini= min(mini, 1 + kSimilarity( A.substr(i+1) , B.substr(i+1), subA, subB));
    
                        swap( B[i], B[chan[k]] );
                    }
    
                    return mini;
                
            }
            return 0;
        }
    };


    int main(){

Solution findTarget =Solution();

findTarget.kSimilarity("abcdefgacb","babcdefgac");




outfile.close();




    }