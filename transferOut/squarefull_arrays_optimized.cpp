#include <unordered_map>
#include <queue>
#include <math.h>
#include <vector>
#include <unordered_set>
#include <iostream>
using namespace std;
// static bool isPerfectSquare(int x)
// {
//     int t = sqrt(x);
//     return false;
// };
namespace
{

bool isPerfectSquare(const int x)
{
    int t = sqrt(x);

    return t * t == x;
}

bool h(int x)
{
    return isPerfectSquare(x);
};

} // namespace

class Solution
{

    unordered_map<int, int> sets;
    unordered_map<int, unordered_set<int>> graph;

public:
    int numSquarefulPerms(const vector<int> &list)
    {

        struct obj
        {
            int current;
            unordered_map<int, int> sets{};
            int depth;
            obj(int a, const unordered_map<int, int> &b, int c) : current(a), depth(c)
            {
                sets.reserve(b.size());
                for (auto e : b)
                {
                    sets.emplace(e.first, e.second);
                };
            };
        };

        for (auto e : list)
        {
            sets[e]++;
        }

        vector<obj> Qw;
        Qw.reserve(3000);
        vector<unordered_map<int, int>> values;
        for (auto &e1 : sets)
        {
            int len = 0;
            int key = 0;
            for (auto &e2 : sets)
            {
                // check if the edge froms a square otherwise check if list
                if (isPerfectSquare(e1.first + e2.first))
                {
                    len++;
                    key = e1.first;
                    graph[e1.first].insert(e2.first);
                };
            }
            // avoid entering non leaf nodes// this is not nesseary as the length will tease out noneaf  nodes. However, it
            //saves doing any unneccesary traversal and adding aditional memory blocks to our queue.

            bool val = graph[key].find(key) != graph[key].end();
            if (len == 1 || val)
            {
                Qw.emplace_back(key, sets, (int)list.size() - 1);
            }
        }

        int count = 0;

        auto start = Qw.begin();

    for (auto node: Qw)
        {
         
        
            if (node.depth <= 0)
            {
                count++;
                continue;
            }
            node.sets[node.current]--;
            for (auto adj : graph[node.current])
            {
                if (node.sets[adj] != 0)
                {
                    Qw.emplace_back(adj, node.sets, node.depth - 1);
                }
            }
        }

        return count;
    }
};


#include <iostream>
#include <cmath>





int main()
{

    vector<int> list{0, 0, 0, 1, 1, 1};
    Solution obj{};
    cout << obj.numSquarefulPerms(list) << endl;
}