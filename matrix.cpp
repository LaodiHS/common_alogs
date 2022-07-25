// templatess
// testes

#include <vector>
#include <bits/stdc++.h>
#include <algorithm>
#include <iostream>
using namespace std;
template <class T>
class matrix2
{
public:
    vector<T> data;
    int cols;
    int rows;

    matrix2(int y, int x) : cols(x), rows(y), data(x * y) {}
    T &operator()(int y, int x)
    {
        assert(x <= cols);
        assert(y <= rows);
        return data[y * cols + x];
    }

    T operator()(int y, int x) const
    {
        assert(x <= cols);
        assert(y <= rows);
        return data[y * cols + x];
    }
};

int main()
{
    //ways to call operator and use it
    int a = 5;
    int b = 3;
    vector<vector<int>>c;
    vector<vector<int>>d;
    matrix2<vector<int>>d2object(a, b);
    matrix2<vector<int>> *d2objectCopy = new matrix2<vector<int>>(a, b);
    
    vector<vector<int>> d2matrix = d2object.data;
    c = (new matrix2<vector<int>>(a,b)) -> data;
    d = matrix2 <vector<int>>(a,b).data;
    
    cout << c.size() << "\n";
    cout << d.size()<< "\n"; 
    cout << d2matrix.size() << "\n";
    cout << d2object.data.size() << "\n";
    cout << d2objectCopy->data.size() << "\n";
    return 0;
}

// template <class T>;
// class AdjList {
// 	std::vector<T>data;
// 	int columns;
// public:
// 	T& operator()(int x, int y) {
// 		return data[y * columns + x]; 
// }

// 	AdjList(int x, int y) : data(x* y), columns(x) {}
// };

