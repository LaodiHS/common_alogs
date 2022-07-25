// string to base zero exmaple 

class Solution {
    unordered_map<string, pair<size_t, vector<string>>> mTickets;
    vector<string> mResult;
        
    void f(const string& from) {
        auto it = mTickets.find(from);
        
        if (it != mTickets.end()) {
            auto& [pos, v] = it->second;
            while (pos != v.size()) {
                ++pos;
                f(v[pos - 1]);
            }
        }
        
        mResult.emplace_back(from);
    }
        
public:
    vector<string> findItinerary(vector<vector<string>>& tickets) {
        mResult.clear();
        
        for (const auto& v: tickets)
            mTickets[v[0]].second.emplace_back(v[1]);
        
        for (auto& [from, p]: mTickets)
            sort(p.second.begin(), p.second.end());
        
        f("JFK");
        reverse(mResult.begin(), mResult.end());
        
        return mResult;
    }
};


class Solution
{
    vector<string> str;

public:
    vector<string> findItinerary(vector<vector<string>> &tickets)
    {
        int maxRange = 0;
        for (const auto &ticket : tickets)
        {
            maxRange = max(maxRange, to_int(*ticket.begin()));
            maxRange = max(maxRange, to_int(*&ticket.back()));
        }
        vector<multiset<int>> edges(maxRange + 1);
        for (const auto &ticket : tickets)
        {
            edges[to_int(*ticket.begin())].insert(to_int(*&ticket.back()));
        }
        visit(to_int("JFK"), edges);
        return vector<string>(str.rbegin(), str.rend());
    }
    void visit(int curr, vector<multiset<int>> &edges)
    {
        while (edges[curr].size())
        {
            int next = *edges[curr].begin();
            edges[curr].erase(edges[curr].begin());
            visit(next, edges);
        }
        str.push_back(to_string(curr));
    }
// utterly pointless but keeping it. 
    int to_int(string str)
    {
        int result = 0;
        for (int i = 0; i < 3; ++i)
        {
            result = result * 26 + str[i] - 'A';
        }
        return result;
    }

    string to_string(int res)
    {
        string str = "";
        str.resize(3);
        for (int i = 2; i >= 0; --i)
        {
            char c = res % 26 + 'A';
            res /= 26;
            str[i] = c;
        }
        return str;
    }
};
//test cases

// Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
//Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
//Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
//  Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
            //  But it is larger in lexical order.


#include <iostream>
#include <iterator>

int main() {
int x;
int index= 0;
while(std::cin>>x){
std::cout << x <<" " << index++ << std::endl; 
    }
}


