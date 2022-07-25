
#include <iostream>
#include <vector>
#include <map>
#include <math.h>
using namespace std;
class Solution {
public:
    // We store for every elent our two states {odd, even}. This show us if the element
    // we exam can make it to the end with odd or even next jump.
    // We start from the end in order to examin only the next greater or smaller 
    // element and to have this information we store our data in a map!
    int oddEvenJumps(vector<int>& A) {
        // We store in our map the key {value, index} and the value {odd, even}
        std::map<pair<int, int>, pair<bool, bool>> m;
        int res = 1;
        // This is for the last element that is our base case
        m[{A[A.size()-1], A.size()-1}] = {true, true};
        for (int i = A.size()-2; i >= 0; i--) {
            m[{A[i], i}] = {false, false};
            // We insert our current element and take the iterator to it
            map<pair<int, int>, pair<bool, bool>>::iterator it = m.find({A[i], i});
            // Set the odd state 
            // We check if we are at the end of the map and so there is no next 
            // greater element and so the state stays false from the initialization
            // or else we take the next iterator and check if it has true the even state
            // because after we choose the next greater we will make even jump
            if (std::next(it) != m.end()) {
                it->second.first = std::next(it)->second.second;
            }
            
            // Set the even state
            // We check if we have in our map the same value as the current
            // (e.x. .... 3, 3, ...) if not we want to take the previous smaller element
            // CAUTION! we must not take the exact previous element. We must check if our 
            // previous elements has appeared in the vector many times and so we 
            // must take the left most previous element in our map!
            if (std::next(it) != m.end() && std::next(it)->first.first == A[i]) {
                it->second.second = std::next(it)->second.first;
            } else if (it != m.begin()) {
                auto it2 = std::prev(it);
                int num = it2->first.first;
                std::pair<bool, bool> p = it2->second;
                while (it2 != m.begin()) {
                    it2 = std::prev(it2);
                    if (num != it2->first.first) break;
                    p = it2->second;
                }
                it->second.second = p.first;
            } 
            // If the odd state is true we have a valid index!
            if (it->second.first) res++;
        }
        return res;
    }
};